import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { categoriesArr } from 'database/categoriesArr'
import { ActionButtons } from 'components/Admin/ActionButtons'
import { TextField } from '@mui/material'
import { getProducts } from 'services/productService'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from 'slices/dataSlice'
import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import { useRouter } from 'next/router'

export default function ProductsTable({children}) {
    const dispatch = useDispatch()
    const products = useSelector(state => state.data.products)
    const router = useRouter()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("")
    const [products_arr, setProducts_arr] = useState()
    const [filtered_arr, setFiltered_arr] = useState()

    const handleAdd = () => {
        router.push("/admin/add-product")
    }

    useEffect(() => {
        (async function () {
            const productsArr = await getProducts()
            if (productsArr) {
                dispatch(setProducts(productsArr))
                setLoading(false)
            } else {
                setLoading(false)
                setError(true)
            }
        })()
    }, [])

    useEffect(() => {
        if (products && products?.length > 0) {
            (function () {
                let arr = []
                products.map((product) => {
                    arr.push(createData(product.images[0].smallImg, product.name, getCategory(product.category[0]), product.price, product.discountedPrice, product._id))
                })
                setProducts_arr(arr)
                setFiltered_arr(arr)
            })()
        }
    }, [products])

    useEffect(() => {
        if (products_arr) {
            const filteredProducts = products_arr.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
            setFiltered_arr(filteredProducts)
        }
    }, [searchValue])

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            {(!error && !loading && products) && <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Stack spacing={2} sx={{ pt: 1, mb: 1, ml: 1, mr: 1}}>{children}</Stack>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 1, mb: 1 }}>
                    <TextField
                        label="Búsqueda" sx={{ minWidth: 120, mt: 1, mb: 1, ml: 1 }} id="filled-basic" variant="filled" value={searchValue} onChange={handleChange}
                        inputProps={{ style: { fontSize: fontSize } }}
                        InputLabelProps={{ style: { fontSize: fontSize } }} />
                    <Button variant="contained" size="large" sx={{ height: 52 }} onClick={handleAdd}><span>+ Agregar Producto</span></Button>

                </Stack>

                <TableContainer sx={{ maxHeight: 500, pl: 1, pr: 1, pb: 1 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell
                                        key={index}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontSize: fontSize }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell align={"right"}
                                    style={{ minWidth: 140, fontSize: fontSize }}
                                >
                                    Acciones
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filtered_arr && filtered_arr
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            {columns.map((column, index) => {
                                                const value = row[column.id]
                                                return (
                                                    <TableCell key={column.id} align={column.align} style={{ fontSize: fontSize }}>
                                                        {handleValue(column.format, value, column, index)}
                                                    </TableCell>
                                                )
                                            })}
                                            <TableCell align={"right"} style={{ minWidth: 140, fontSize: fontSize }}>
                                                <ActionButtons product={row} />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                {
                    filtered_arr && (
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={filtered_arr.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    )
                }

            </Paper>
            }
            {(loading) && <div>Loading...</div>}
            {(error && !loading) && <div>An error ocurred trying to load the data. Please reload this page.</div>}
        </>
    )
}

const fontSize = 14

const columns = [
    { id: "image", label: "Imagen", minWidth: 100, align: "left" },
    { id: "name", label: "Nombre", minWidth: 180 },
    { id: "category", label: "Categoría", minWidth: 100 },
    { id: "price", label: "Precio", minWidth: 100, align: "right" },
    { id: "discountedPrice", label: "Oferta", minWidth: 100, align: "right" },
]

function createData(image, name, category, price, discountedPrice, id) {
    return { image, name, category, price, discountedPrice, id }
}

function getCategory(category) {
    const index = categoriesArr.findIndex(p => p.categoryId == category)
    return categoriesArr[index].category
}

const handleValue = (format, value, column, index) => {
    if (column.id === "image") {
        if (typeof value === "string" && value.includes("http")) {
            return <div style={{  maxWidth: "55px"}}>
                <img key={index} style={{ width: "100%", objectFit: "contain" }} src={value} alt="Img" height="45px"></img>
                </div>
        } else {
            return value
        }
    }
    if (format && typeof value === "number") {
        return format(value)
    } else {
        if (column.id === "price" || column.id === "discountedPrice") {
            if(value !== null && value !== undefined){
                return `$${value}`
            } else {
                return value
            }
        } else {
            return value
        }
    }
}
