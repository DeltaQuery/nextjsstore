import React, { useEffect, useState } from 'react'
import { Main } from 'styles/View/ViewStyles'
import { useAuth } from 'hooks/useAuth'
import { categoriesArr } from 'database/categoriesArr'
import { AdLayout } from 'layout/Layout/AdLayout'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { InputAdornment } from '@mui/material'
import { BiCamera } from 'react-icons/bi'
import Stack from '@mui/material/Stack'
import { updateProduct, uploadImage } from 'services/productService'
import MuiAlert from 'components/MuiAlert'
import { getProducts } from 'services/productService'
import { useRouter } from 'next/router'
import { variants } from 'database/variants'

const UpdateProduct = () => {
    const [productsArr, setProductsArr] = useState()
    const [product, setProduct] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [alert, setAlert] = useState(false)
    const [errAlert, setErrAlert] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState([])
    const [selectedVariant, setSelectedVariant] = useState("")
    const [selectedModel, setSelectedModel] = useState("")
    const [associatedProducts, setAssociatedProducts] = useState([])
    const { auth } = useAuth()
    const router = useRouter()
    const { id } = router.query

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
    }
    
    const handleModelChange = (e) => {
        setSelectedModel(e.target.value)
    }
    
    const handleVariantChange = (e) => {
        setSelectedVariant(e.target.value)
    }
    
    const handleAssociatedProductsChange = (e) => {
        setAssociatedProducts(e.target.value)
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        const productForm = {
            name: e.target.name.value,
            category: selectedCategory,
            price: e.target.price.value,
            discountedPrice: e.target.discountedPrice.value,
            images: [{
                smallImg: product.images[0].smallImg
            }],
            features: e.target.features.value,
            model: selectedModel,
            models: {
                type: selectedVariant,
                variants: associatedProducts.filter(product => product !== undefined).map(product => {
                    return {
                        "_id": product,
                        "model": productsArr[productsArr.findIndex(element => element._id === product)].model
                    }
                })
            },
            date: new Date()
        }

        const img = e.target.image.files[0]

        try {
            if (img) {
                const imgData = new FormData()
                imgData.append("file", img)
                const uploadedImage = await uploadImage(imgData)
                productForm.images[0].smallImg = uploadedImage.file
            }
            const updatedProduct = await updateProduct(product._id, productForm)
            if (updatedProduct) {
                router.push({
                pathname: '/admin/dashboard',
                query: { alertState: 'success_updated' }
            }, '/admin/dashboard')
            } else {
                setAlert(false)
                setErrAlert(true)
            }
        } catch (err) {
            typeof window !== "undefined" ? window.scrollTo(0, 0) : null
            setAlert(false)
            setErrAlert(true)
            console.log(err)
        }
    }

    useEffect(() => {
        (async function () {
            const products_arr = await getProducts()
            if (products_arr) {
                setProductsArr(products_arr)
                setLoading(false)
            } else {
                setLoading(false)
                setError(true)
            }
        })()
    }, [id])

    useEffect(() => {
        if (productsArr && productsArr.length > 0) {
            (function () {
                const product = productsArr[productsArr.findIndex(product => product._id === id)]
                setProduct(product)
                setSelectedModel(product?.model)
                setSelectedCategory(product?.category)
                setSelectedVariant(product?.models?.type)
                let variants_arr = []
                if (product?.models?.variants) {
                    product?.models?.variants.map(variant => {
                        variants_arr.push(variant._id)
                    })
                    const newArr = [...new Map(variants_arr.map(item => [item, item])).values()]
                    setAssociatedProducts(newArr)
                }
            })()
        }
    }, [id, productsArr])

    if (!auth || loading) {
        return <Main>Loading...</Main>
    }

    if (error) {
        return <Main>An error ocurred trying to load this page. Please try reloading.</Main>
    }

    const inputs = [
        { required: true, id: "name", label: "Nombre", name: "name", autoComplete: "name", autoFocus: true, type: "text", InputProps: null },
        {
            required: true, id: "price", defaultValue: product?.price, label: "Precio regular", name: "price", autoComplete: "price", autoFocus: false, type: "number", InputProps: {
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }
        },
        {
            required: false, id: "discountedPrice", defaultValue: product?.discountedPrice, label: "Precio de oferta", name: "discountedPrice", autoComplete: "discountedPrice", autoFocus: false, type: "number", InputProps: {
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }
        },
        { required: true, id: "model", label: "Modelo", name: "model", autoComplete: "model", autoFocus: false, type: "text", InputProps: null },
    ]

    return (
        <Main>
            {product && <Container component="main" maxWidth="xs" sx={{ mt: -7 }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <SuccessAlert alert={alert} setAlert={setAlert} />
                    <ErrAlert alert={errAlert} setAlert={setErrAlert} />
                    <Typography component="h1" variant="h5" sx={{ mt: 2, fontSize: 20, fontWeight: 600 }}>
                        ACTUALIZAR PRODUCTO
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>

                        {inputs.slice(0, 1).map((input, index) => {
                            return (
                                <TextField
                                    key={index}
                                    margin="normal"
                                    required={input.required}
                                    fullWidth
                                    name={input.name}
                                    label={input.label}
                                    type={input.type}
                                    id={input.ud}
                                    InputProps={input.InputProps}
                                    autoComplete={input.autoComplete}
                                    defaultValue={product.name}
                                    inputProps={{ style: { fontSize: fontSize } }}
                                    InputLabelProps={{ style: { fontSize: fontSize } }} // font size of input label
                                />)
                        })}

                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                            required
                            labelId="category"
                            id="category"
                            multiple
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            input={<OutlinedInput label="Categoría" />}
                            MenuProps={MenuProps}
                            sx={{ width: "100%" }}
                        >
                            {categoriesArr.map((category) => (
                                <MenuItem
                                    key={category.categoryId}
                                    value={category.categoryId}
                                    sx={{ fontSize: fontSize }}
                                >
                                    {category.category}
                                </MenuItem>
                            ))}
                        </Select>

                        {inputs.slice(1, 3).map((input, index) => {
                            return (
                                <TextField
                                    key={index}
                                    margin="normal"
                                    required={input.required}
                                    fullWidth
                                    name={input.name}
                                    label={input.label}
                                    type={input.type}
                                    id={input.ud}
                                    step="any"
                                    defaultValue={input.defaultValue}
                                    InputProps={input.InputProps}
                                    autoComplete={input.autoComplete}
                                    inputProps={{ style: { fontSize: fontSize } }} // font size of input text
                                    InputLabelProps={{ style: { fontSize: fontSize } }} // font size of input label
                                />)
                        })}

                        <TextField
                            name="features"
                            label="Características"
                            type="text"
                            id="features"
                            margin="normal"
                            placeholder="IMPORTANTE: Separa las características con un salto de línea."
                            multiline
                            rows={10}
                            fullWidth
                            defaultValue={product?.features.map(feature => {
                                return feature + "\n"
                            })}
                            inputProps={{ style: { fontSize: fontSize } }}
                            InputLabelProps={{ style: { fontSize: fontSize } }}
                        />

                        <Stack direction="column" alignItems="center" spacing={2} sx={{ mt: 2, mb: 1 }}>
                            <img src={product?.images[0]?.smallImg} alt="Product img" width="200"></img>
                            <Typography>Nota: La imagen actual será reemplazada por la imagen adjuntada. Si no se adjunta ninguna imagen, la imagen actual se mantendrá.</Typography>
                            <Button fullWidth variant="contained" component="label" size="large" sx={{ fontSize: fontSize }}
                                startIcon={<BiCamera size="22" />}>
                                Upload <span>&nbsp;</span>
                                <input name="image" id="image" sx={{ display: "none" }} accept="image/*" type="file" />
                            </Button>
                        </Stack>

                        {inputs.slice(3, 4).map((input, index) => {
                            return (
                                <TextField
                                    key={index}
                                    margin="normal"
                                    required={input.required}
                                    fullWidth
                                    name={input.name}
                                    label={input.label}
                                    type={input.type}
                                    id={input.ud}
                                    value={selectedModel}
                                    onChange={handleModelChange}
                                    InputProps={input.InputProps}
                                    autoComplete={input.autoComplete}
                                    inputProps={{ style: { fontSize: fontSize } }} // font size of input text
                                    InputLabelProps={{ style: { fontSize: fontSize } }} // font size of input label
                                />)
                        })}

                        <InputLabel id="variant-label">Tipo de Modelado</InputLabel>
                        <Select
                            disabled={selectedModel ? false : true}
                            labelId="variants"
                            id="variants"
                            value={selectedVariant}
                            onChange={handleVariantChange}
                            input={<OutlinedInput label="Tipo de Modelado" />}
                            MenuProps={MenuProps}
                            sx={{ width: "100%" }}
                        >
                            {variants.map((variant, index) => (
                                <MenuItem
                                    key={index}
                                    value={variant}
                                    sx={{ fontSize: fontSize }}
                                >
                                    {variant}
                                </MenuItem>
                            ))}
                        </Select>

                        <InputLabel id="associated-products">Productos Asociados</InputLabel>
                        <Select
                            disabled={selectedVariant === "" ? true : false}
                            labelId="associatedProducts"
                            id="associatedProducts"
                            multiple
                            value={associatedProducts}
                            onChange={handleAssociatedProductsChange}
                            input={<OutlinedInput label="Productos Asociados" />}
                            MenuProps={MenuProps}
                            sx={{ width: "100%" }}
                        >
                            {(productsArr && productsArr.length > 0) && productsArr?.filter(element => (element.models?.type === selectedVariant && element._id !== product._id)).map((product) => (
                                <MenuItem
                                    key={product._id}
                                    value={product._id}
                                    sx={{ fontSize: fontSize }}
                                >
                                    {product.name}
                                </MenuItem>
                            ))}
                        </Select>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ mt: 2, mb: 3, fontSize: fontSize }}
                        >
                            Actualizar Producto
                        </Button>
                    </Box>
                </Box>
            </Container>
            }
        </Main>

    )
}

export default UpdateProduct

UpdateProduct.getLayout = function getLayout(page) {
    return (
        <AdLayout>
            {page}
        </AdLayout>
    )
}

const ErrAlert = ({ alert, setAlert, alertType = "error", alertText = "Ha habido un error." }) => {
    return <MuiAlert alert={alert} setAlert={setAlert} alertType={alertType} alertText={alertText} />
}

const SuccessAlert = ({ alert, setAlert, alertType = "success", alertText = "Producto actualizado correctamente." }) => {
    return <MuiAlert alert={alert} setAlert={setAlert} alertType={alertType} alertText={alertText} />
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const fontSize = 16