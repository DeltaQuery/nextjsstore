import { useEffect, useState } from "react"
import { TextField, Select, Button, MenuItem, InputLabel, InputAdornment, Stack, Container, CssBaseline, Box, Typography, IconButton } from "@mui/material"
import { BiCamera } from "react-icons/bi"
import { categoriesArr } from "database/categoriesArr"
import { variants } from "database/variants"
import MuiAlert from "components/MuiAlert"
import { uploadImage, updateProduct, addProduct } from "services/productService"
import { ProcessorInputs } from "./Combo/ProcessorInputs"
import { MotherboardInputs } from "./Combo/MotherboardInputs"
import { RamInputs } from "./Combo/RamInputs"
import { StorageInputs } from "./Combo/StorageInputs"
import { CaseInputs } from "./Combo/CaseInputs"
import { CoolerInputs } from "./Combo/CoolerInputs"
import { GraphicInputs } from "./Combo/GraphicInputs"
import { PowerSupplyInputs } from "./Combo/PowerSupplyInputs"
import { caseData, coolerData, graphicData, moboData, powerData, processorData, ramData, storageData } from "database/comboData"
import { BiX } from "react-icons/bi"
import { useRouter } from "next/router"
import Spinner from "./Spinner"

const fontSize = 16

export const ProductForm = ({ products, newProductForm = true, product }) => {
    const ErrAlert = ({ alert, setAlert, alertType = "error", alertText = "Ha habido un error." }) => {
        return <MuiAlert alert={alert} setAlert={setAlert} alertType={alertType} alertText={alertText} />
    }
    const SuccessAlert = ({ alert, setAlert, alertType = "success", alertText = `Producto ${newProductForm ? "añadido" : "actualizado"} correctamente.` }) => {
        return <MuiAlert alert={alert} setAlert={setAlert} alertType={alertType} alertText={alertText} />
    }
    const router = useRouter()
    const [name, setName] = useState("")
    const [price, setPrice] = useState()
    const [discountedPrice, setDiscountedPrice] = useState()
    const [comboInputs, setComboInputs] = useState()
    const [model, setModel] = useState("")
    const [category, setCategory] = useState([])
    const [associated, setAssociated] = useState([])
    const [modelType, setModelType] = useState("")
    const [comboItem, setComboItem] = useState(false)
    const [alert, setAlert] = useState(false)
    const [errAlert, setErrAlert] = useState(false)
    const [img, setImg] = useState()

    useEffect(() => {
        if (modelType === "") setAssociated([])
    }, [modelType])

    useEffect(() => {
        if (product) {
            //console.log(product)
            setName(product.name)
            setPrice(product.price)
            setDiscountedPrice(product.discountedPrice)
            setModel(product.model)
            setCategory(product.category)
            setModelType(product.models?.type)
            setAssociated((product.models?.variants && product.models?.variants.length > 0) ?
                product.models.variants.map(product => {
                    return product._id
                })
                :
                []
            )
            setComboItem(product.combo_item)
            //define combo_data fields
            if (product?.combo_data && Object.keys(product?.combo_data).length > 0) {
                const categories = categoriesArr.filter(cat => cat.combo)
                const filteredCategory = category.filter(elem => {
                    return categories.find(obj => obj.categoryId === elem) !== undefined
                })
                const categoryId = categories.find(item => item.categoryId === filteredCategory[0])

                if (categoryId) {
                    if (categoryId.categoryId === 5) {
                        //processor
                    }
                    if (categoryId.categoryId === 6) {
                        //mobo
                    }
                    if (categoryId.categoryId === 7) {
                        //ram
                    }
                    if (categoryId.categoryId === 4 || categoryId.name === 8) {
                        //storage
                    }
                    if (categoryId.categoryId === 13) {
                        //case
                    }
                    if (categoryId.categoryId === 12) {
                        //cooler

                    }
                    if (categoryId.categoryId === 14) {
                        //graphic
                    }
                    if (categoryId.categoryId === 3) {
                        //power
                    }
                }
            }
        }
    }, [product])

    useEffect(() => {
        const categories = categoriesArr.filter(cat => cat.combo)
        const filteredCategory = category.filter(element => categories.some(category => category.categoryId === element))
        const categoryId = categories.find(item => item.categoryId === filteredCategory[0])

        if (categoryId) {
            if (categoryId.categoryId === 5) setComboInputs([<ProcessorInputs product={product} validate={comboItem}/>, processorData])
            if (categoryId.categoryId === 6) setComboInputs([<MotherboardInputs product={product} validate={comboItem}/>, moboData])
            if (categoryId.categoryId === 7) setComboInputs([<RamInputs product={product} validate={comboItem}/>, ramData])
            if (categoryId.categoryId === 4 || categoryId.name === 8) setComboInputs([<StorageInputs product={product} validate={comboItem}/>, storageData])
            if (categoryId.categoryId === 13) setComboInputs([<CaseInputs product={product} validate={comboItem}/>, caseData])
            if (categoryId.categoryId === 12) setComboInputs([<CoolerInputs product={product} validate={comboItem}/>, coolerData])
            if (categoryId.categoryId === 14) setComboInputs([<GraphicInputs product={product} validate={comboItem}/>, graphicData])
            if (categoryId.categoryId === 3) setComboInputs([<PowerSupplyInputs product={product} validate={comboItem}/>, powerData])
        } else {
            setComboInputs(undefined, undefined)
        }
    }, [category, comboItem])

    const handleComboInputs = (e) => {
        const categories = categoriesArr.filter(cat => cat.combo)
        const filteredCategory = category.filter(elem => {
            return categories.find(obj => obj.categoryId === elem) !== undefined
        })
        const categoryId = categories.find(item => item.categoryId === filteredCategory[0])
        if (categoryId) {
            if (categoryId.categoryId === 5) return processorData(e)
            if (categoryId.categoryId === 6) return moboData(e)
            if (categoryId.categoryId === 7) return ramData(e)
            if (categoryId.categoryId === 4 || categoryId.name === 8) return storageData(e)
            if (categoryId.categoryId === 13) return caseData(e)
            if (categoryId.categoryId === 12) return coolerData(e)
            if (categoryId.categoryId === 14) return graphicData(e)
            if (categoryId.categoryId === 3) return powerData(e)
        }
        return {}
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const productForm = {
            name: name,
            category: category,
            price: price,
            discountedPrice: discountedPrice,
            images: [{
                smallImg: product ? product.images[0].smallImg : undefined
            }],
            features: e.target.features.value.split(/\n/),
            model: model,
            models: {
                type: modelType,
                variants: (associated && associated.length > 0) ? associated.map(product => {
                    return {
                        "_id": product,
                        "model": products[products.findIndex(element => element._id === product)].model
                    }
                })
                    :
                    undefined
            },
            date: new Date(),
            combo_item: comboItem,
            combo_data: handleComboInputs(e)
        }

        //console.log(productForm)

        const img = e.target.image.files[0]
        const imgData = new FormData()
        imgData.append("file", img)


        try {
            if (img) {
                const imgData = new FormData()
                imgData.append("file", img)
                const uploadedImage = await uploadImage(imgData)
                productForm.images[0].smallImg = uploadedImage.file
            }

            if (!product) {
                const newProduct = await addProduct(productForm)
                if (newProduct) {
                    router.push({
                        pathname: '/admin/dashboard',
                        query: { alertState: 'success_added' }
                    }, '/admin/dashboard')
                } else {
                    setAlert(false)
                    setErrAlert(true)
                }
            }

            if (product) {
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
            }
        } catch (err) {
            console.log(err)
            typeof window !== "undefined" ? window.scrollTo(0, 0) : null
            setAlert(false)
            setErrAlert(true)
        }

    }

    return (
        <Container component="main" maxWidth="xs" sx={{ mt: -7, position: "relative" }}>
            {/*<Spinner/>*/}
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
                <Typography component="h1" variant="h5" sx={{ fontSize: 20, fontWeight: 600, mt: 1 }}>
                    {newProductForm ? "AGREGAR" : "ACTUALIZAR"} PRODUCTO
                </Typography>
                <Box component="form" onSubmit={handleSubmit}
                    sx={{
                        mt: 1,
                        maxWidth: "100%",
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5
                    }}>
                    <TextField id="name" autoFocus required fullWidth placeholder="Nombre del Producto" label="Nombre"
                        value={name} onChange={e => setName(e.target.value)} />

                    <div>
                        <InputLabel id="category">Categoría</InputLabel>
                        <Select multiple required fullWidth value={category} onChange={(e) => setCategory(e.target.value)}>
                            {categoriesArr.map((category) => (
                                <MenuItem
                                    key={category.categoryId}
                                    value={category.categoryId}
                                    sx={{ fontSize: 14 }}
                                >
                                    {category.category}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>

                    <TextField id="price" step="any" required fullWidth label="Precio regular" type="number"
                        value={price} onChange={e => setPrice(e.target.value)}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">$</InputAdornment>),
                        }} />

                    <TextField id="discountedPrice" step="any" fullWidth label="Precio de oferta" type="number"
                        value={discountedPrice} onChange={e => setDiscountedPrice(e.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} />

                    <div>
                        <InputLabel id="">Características</InputLabel>
                        <TextField id="features" required fullWidth placeholder="IMPORTANTE: Separa las características con un salto de línea."
                            defaultValue={product ? product?.features.map(feature => {
                                return feature + "\n"
                            })
                                :
                                undefined}
                            multiline rows={10} />
                    </div>

                    <Stack direction="column" alignItems="center" spacing={2}>
                        {(product && !img) && <>
                            <img src={product?.images[0]?.smallImg} alt="Product img" width="200"></img>
                            <Typography>Nota: La imagen actual será reemplazada por la imagen adjuntada. Si no se adjunta ninguna imagen, la imagen actual se mantendrá.</Typography>
                        </>}
                        {img && <img src={img} alt="Product img" width="200"></img>}
                        <Button fullWidth variant="contained" component="label" size="large" sx={{ fontSize: fontSize }}
                            startIcon={<BiCamera size="22" />}>
                            Upload <span>&nbsp;</span>
                            <input required={!product ? true : false} name="image" id="image" sx={{ display: "none" }} accept="image/*" type="file"
                                onChange={(e) => {
                                    if (e.target?.files[0]) {
                                        const image = URL.createObjectURL(e.target.files[0])
                                        setImg(image)
                                    }
                                }} />
                        </Button>
                    </Stack>

                    <TextField id="model" required fullWidth placeholder="Modelo del Producto" label="Modelo"
                        value={model} onChange={e => setModel(e.target.value)} />

                    <div>
                        <InputLabel>Tipo de Modelado</InputLabel>
                        <Select id="modelType" fullWidth value={modelType} onChange={(e) => setModelType(e.target.value)}
                            endAdornment={<IconButton sx={{ display: modelType === "" ? "" : "none" }} onClick={() => setModelType("")}><BiX size={20} /></IconButton>}>
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
                    </div>

                    <div>
                        <InputLabel>Productos Asociados</InputLabel>
                        <Select id="associatedProducts" disabled={!modelType ? true : false} multiple fullWidth value={associated}
                            onChange={(e) => setAssociated(e.target.value)}
                        >
                            {products && products.filter(product => product.models?.type === modelType).map((product) => (
                                <MenuItem
                                    key={product._id}
                                    value={product._id}
                                    sx={{ fontSize: fontSize }}
                                >
                                    {product.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>

                    <div>
                        <InputLabel>Item para PC Builder</InputLabel>
                        <Select id="comboItem" name="comboItem" required fullWidth value={comboItem}
                            onChange={(e) => setComboItem(e.target.value)}
                        >
                            <MenuItem
                                value={false}
                                sx={{ fontSize: fontSize }}
                            >
                                No
                            </MenuItem>
                            <MenuItem
                                value={true}
                                sx={{ fontSize: fontSize }}
                            >
                                Sí
                            </MenuItem>
                        </Select>
                    </div>

                    {comboInputs && comboInputs[0]}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{ mb: 3, fontSize: fontSize }}
                    >
                        {newProductForm ? "Agregar" : "Actualizar"} Producto
                    </Button>
                </Box>
            </Box>
        </Container>

    )
}
