import fancooler from "assets/categories/fancooler.png"
import laptops from "assets/categories/laptops.png"
import powersupplies from "assets/categories/powersupplies.png"
import streaming from "assets/categories/streaming.png"
import ssd from "assets/categories/ssd.png"
import motherboards from "assets/categories/motherboards.png"
import processors from "assets/categories/procesadores.png"
import ram from "assets/categories/RAM.webp"
import storage from "assets/categories/almacenamiento.png"
import graphic_card from "assets/categories/graphic_card.png"
import gaming_case from "assets/categories/case.png"
import mobo from "assets/categories/mobo.png"
/*import razerMouse from "../assets/productsImages/mouse/razerdeathadder.jpg"
import switchOled from "../assets/productsImages/gaming/switcholed.jpg"
import { FaPenNib } from "react-icons/fa"*/

export const categoriesArr = [
    {
        category: "Streaming",
        categoryId: 1,
        image: streaming,
        combo: false
    },
    {
        category: "Laptops",
        categoryId: 2,
        image: laptops,
        combo: false
    },
    {
        category: "Fuentes de Poder",
        categoryId: 3,
        image: powersupplies,
        combo: true
    },
    {
        category: "Unidades SSD",
        categoryId: 4,
        image: ssd,
        combo: true
    },
    {
        category: "Procesadores",
        categoryId: 5,
        image: processors,
        combo: true
    },
    {
        category: "Placas madre",
        categoryId: 6,
        image: mobo,
        combo: true
    },
    {
        category: "Memorias RAM",
        categoryId: 7,
        image: ram,
        combo: true
    },
    {
        category: "Almacenamiento",
        categoryId: 8,
        image: storage,
        combo: false
    },
    {
        category: "Mouse",
        categoryId: 9,
        image: ssd,
        combo: false
    },
    {
        category: "Gaming",
        categoryId: 10,
        image: ssd,
        combo: false
    },
    {
        category: "Accesorios",
        categoryId: 11,
        image: ssd,
        combo: false
    },
    {
        category: "Fan Cooling",
        categoryId: 12,
        image: fancooler,
        combo: true
    },
    {
        category: "Case",
        categoryId: 13,
        image: gaming_case,
        combo: true
    },
    {
        category: "Tarjeta Gr??fica",
        categoryId: 14,
        image: graphic_card,
        combo: true
    },
    {
        category: "Ofertas",
        categoryId: 50,
        image: null,
        combo: false
    },
    {
        category: "Destacados",
        categoryId: 51,
        image: null,
        combo: false
    },
    {
        category: "Novedades",
        categoryId: 52,
        image: null,
        combo: false
    },
    {
        category: "M??s vendidos",
        categoryId: 53,
        image: null,
        combo: false
    },
]