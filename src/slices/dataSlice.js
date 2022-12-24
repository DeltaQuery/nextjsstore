import { createSlice } from "@reduxjs/toolkit"

const LocalStorageName = "NextJsStoreDQ"

const initialState = {
    localCart: typeof window !== "undefined" ? localStorage.getItem(LocalStorageName) || [] : undefined,
    cart: [],
    combo: {
        gamingCase: undefined,
        cooler: undefined,
        graphic: undefined,
        mobo: undefined,
        power: undefined,
        processor: undefined,
        ram: undefined,
        storage: undefined
      },
    total: [0, 0, 0],
    addedToCart: null,
    addedProduct: null,
    quantity: 1,
    products: [],
    product: null,
    loadingProducts: true,
    auth: typeof window !== "undefined" ? localStorage.getItem("nextStore-token") : undefined
}

const setTotal = (cart) => {
    const initialValue = 0
    const subtotal = cart.reduce((accumulator, product) => accumulator + product.price * product.quantity, initialValue)
    const total = cart.reduce((accumulator, product) => product.discountedPrice === null || product.discountedPrice === undefined ? accumulator + product.price * product.quantity : accumulator + product.discountedPrice * product.quantity, initialValue)
    const saves = subtotal - total
    return [total, subtotal, saves]
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.cart.findIndex(product => product._id === action.payload[0]._id) === -1) {
                let objCopy
                if (action.payload[1]) {
                    objCopy = { ...action.payload[0] }
                    objCopy.quantity = Number(action.payload[1])
                } else {
                    objCopy = { ...action.payload[0] }
                    objCopy.quantity = Number(state.quantity)
                }
                state.cart = [...state.cart, objCopy]
            } else {
                const index = state.cart.findIndex(product => product._id === action.payload[0]._id)
                let newCart = state.cart
                if (!action.payload[1] && newCart[index].quantity < 8) {
                    newCart[index].quantity = newCart[index].quantity + Number(state.quantity)
                } else if (newCart[index].quantity < 8) {
                    newCart[index].quantity = newCart[index].quantity + Number(action.payload[1])
                }
                state.cart = newCart
            }
            const total = setTotal(state.cart)
            state.total = total
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(LocalStorageName, JSON.stringify(state.cart))
            }
        },
        setQuantity: (state, action) => {
            state.quantity = action.payload
            const total = setTotal(state.cart)
            state.total = total
        },
        updateProductQuantity: (state, action) => {
            const index = state.cart.findIndex(product => product._id === action.payload[0]._id)
            let newCart = state.cart
            if (index > -1) {
                if (action.payload[1] === "+" && newCart[index].quantity < 8) {
                    newCart[index].quantity = newCart[index].quantity + 1
                }
                if (action.payload[1] === "-" && newCart[index].quantity > 0) {
                    newCart[index].quantity = newCart[index].quantity - 1
                }
                state.cart = newCart
            }
            const total = setTotal(state.cart)
            state.total = total
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(LocalStorageName, JSON.stringify(state.cart))
            }
        },
        setCart: (state, action) => {
            state.cart = action.payload
        },
        setCombo: (state, action) => {
            state.combo = action.payload
        },
        removeFromCart: (state, action) => {
            let newCart = state.cart
            const index = newCart.findIndex(product => product._id === action.payload)
            if (index > -1) {
                newCart.splice(index, 1)
                state.cart = newCart
                if (typeof window !== 'undefined') {
                    window.localStorage.setItem(LocalStorageName, JSON.stringify(state.cart))
                }
            }
            const total = setTotal(state.cart)
            state.total = total
        },
        getTotal: (state, action) => {
            const total = setTotal(state.cart)
            state.total = total
        },
        setAddedProduct: (state, action) => {
            state.addedProduct = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProduct: (state, action) => {
            state.product = action.payload
        },
        setLoadingProducts: (state, action) => {
            state.loadingProducts = action.payload
        },
        setAuth: (state, action) => {
            state.auth = action.payload
        }
    },
})

export const { addToCart,
    setQuantity,
    updateProductQuantity,
    setCart,
    setCombo,
    removeFromCart,
    setProducts,
    setProduct,
    getTotal,
    setAddedProduct,
    setLoadingProducts,
    setAuth } = dataSlice.actions

export default dataSlice.reducer