import fancooler from "assets/categories/fancooler.png"
import laptops from "assets/categories/laptops.png"
import powersupplies from "assets/categories/powersupplies.png"
import streaming from "assets/categories/streaming.png"
import ssd from "assets/categories/ssd.png"
import motherboards from "assets/categories/motherboards.png"
import processors from "assets/categories/procesadores.png"
import ram from "assets/categories/RAM.webp"
import storage from "assets/categories/almacenamiento.png"
import roku from "assets/products/rokuexpress.webp"
import premiere from "assets/products/rokupremiere.webp"
import evga600 from "assets/products/evga600w.webp"
import firelite from "assets/products/firesticklite.webp"
import fire4k from "assets/products/firestick4k.webp"
import tablet from "assets/products/fire7kids.webp"
import ddr4zeus from "assets/products/ddr4zeus.webp"
import arctic from "assets/products/arcticmx5.webp"
import razer from "assets/products/razerdeathadder.jpg"
import skullcandy from "assets/products/skullcandyearbuds.jpg"
import patriot from "assets/products/patriot.webp"
import switchOled from "assets/products/switcholed.jpg"
import thermaltake from "assets/products/thermaltake600w.webp"
import toshiba1tb from "assets/products/toshiba.jpg"
import toshiba2tb from "assets/products/toshiba2tb.webp"
import toshiba4tb from "assets/products/toshiba4tb.webp"
import xbox from "assets/products/xboxs.jpg"

export const productArr = [
    {
        _id: "1",
        name: "Roku Express HD Model 2022",
        category: [
            1, 53
        ],
        price: 32.99,
        discountedPrice: 29.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            roku,
            roku
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "2",
        name: "Fuente de Poder EVGA 600W 80 Plus Bronce",
        category: [
            3, 51, 53
        ],
        price: 74.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            evga600,
            evga600
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "3",
        name: "Disco SSD Adata 240GB",
        category: [
            4, 51, 53
        ],
        price: 32.99,
        discountedPrice: 29.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            ssd,
            ssd,
            ssd,
            ssd
        ],
        model: "240GB",
        models: {
            Capacidad: [
                {
                    _id: "9",
                    model: "120GB"
                },
                {
                    _id: "3",
                    model: "240GB"
                },
                {
                    _id: "7",
                    model: "480GB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "4",
        name: "Fire TV Stick Lite 2nd Gen",
        category: [
            1, 51, 53
        ],
        price: 34.99,
        discountedPrice: 29.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            firelite,
            
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "5",
        name: "Fire Stick 4K 2022",
        category: [
            1, 51
        ],
        price: 42.99,
        discountedPrice: 39.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            fire4k,
            fire4k,
            
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "6",
        name: "Tablet Fire 7 Kids Forro Azul",
        category: [
            11
        ],
        price: 74.99,
        discountedPrice: 70.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            tablet,
            tablet
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "7",
        name: "Disco SSD Adata 480GB",
        category: [
            4
        ],
        price: 59.99,
        discountedPrice: 54.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            ssd,
            ssd,
            ssd,
            ssd
        ],
        model: "480GB",
        models: {
            Capacidad: [
                {
                    _id: "9",
                    model: "120GB"
                },
                {
                    _id: "3",
                    model: "240GB"
                },
                {
                    _id: "7",
                    model: "480GB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "8",
        name: "Laptop Acer 15.6 AMD Ryzen 7 8GB 512GB SSD",
        category: [
            2
        ],
        price: 32.99,
        discountedPrice: 29.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            laptops
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "9",
        name: "Disco SSD Adata 120GB",
        category: [
            4
        ],
        price: 24.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            ssd,
            ssd,
            ssd,
        ],
        model: "120GB",
        models: {
            Capacidad: [
                {
                    _id: "9",
                    model: "120GB"
                },
                {
                    _id: "3",
                    model: "240GB"
                },
                {
                    _id: "7",
                    model: "480GB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "10",
        name: "Disco SSD Kingston 240GB",
        category: [
            4, 52
        ],
        price: 41.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            patriot,
            patriot
        ],
        model: "240GB",
        models: {
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "11",
        name: "Disco Portátil Toshiba 1TB",
        category: [
            8
        ],
        price: 54.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            toshiba1tb,
            storage
        ],
        model: "1TB",
        models: {
            Capacidad: [
                {
                    _id: "11",
                    model: "1TB"
                },
                {
                    _id: "13",
                    model: "2TB"
                },
                {
                    _id: "14",
                    model: "4TB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "12",
        name: "Laptop ASUS MH10",
        category: [
            2, 52
        ],
        price: 544.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            laptops,
            laptops
        ],
        model: "H10",
        models: {
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "13",
        name: "Disco Portátil Toshiba 2TB",
        category: [
            8, 51, 53
        ],
        price: 74.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            toshiba2tb,
            storage
        ],
        model: "2TB",
        models: {
            Capacidad: [
                {
                    _id: "11",
                    model: "1TB"
                },
                {
                    _id: "13",
                    model: "2TB"
                },
                {
                    _id: "14",
                    model: "4TB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "14",
        name: "Disco Portátil Toshiba 4TB",
        category: [
            8
        ],
        price: 119.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            toshiba4tb,
            storage
        ],
        model: "4TB",
        models: {
            Capacidad: [
                {
                    _id: "11",
                    model: "1TB"
                },
                {
                    _id: "13",
                    model: "2TB"
                },
                {
                    _id: "14",
                    model: "4TB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "15",
        name: "RAM DDR4 Corsair 8GB X2 3600 MHz",
        category: [
            7, 52
        ],
        price: 84.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            ram,
            ram
        ],
        model: "3600 MHz 8GB x 2",
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "16",
        name: "RAM DDR3 Moment 8GB",
        category: [
            7, 52
        ],
        price: 34.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            ram,
            ram
        ],
        model: "8GB 3600 MHz",
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "17",
        name: "Nintendo Switch OLED",
        category: [
            10,52
        ],
        price: 419.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            switchOled,
            motherboards
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "18",
        name: "Mouse Razer DeathAdder Essential",
        category: [
            9, 10, 51
        ],
        price: 29.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            razer,
            fancooler,
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "19",
        name: "Xbox Series S",
        category: [
            10, 50, 51, 52
        ],
        price: 439.99,
        discountedPrice: 379.99,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            xbox,
            fancooler,
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "20",
        name: "Fan Cooler Hyper 212",
        category: [
            10, 50, 51, 52
        ],
        price: 439.99,
        discountedPrice: 379.99,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            fancooler,
            fancooler,
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "21",
        name: "Pasta térmica Arctic MX-5",
        category: [
            10, 50, 51, 52
        ],
        price: 14.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            arctic,
            arctic,
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "22",
        name: "RAM DDR4 Zeus Laptop",
        category: [
            10, 50, 51, 52
        ],
        price: 39.99,
        discountedPrice: 37.99,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            ddr4zeus,
            ddr4zeus,
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "23",
        name: "Earbuds Skullcandy",
        category: [
            10, 50, 51, 52
        ],
        price: 31.99,
        discountedPrice: 29.99,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            skullcandy,
            skullcandy,
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "24",
        name: "Fuente de Poder Thermaltake 600w",
        category: [
            10, 50, 51, 52
        ],
        price: 439.99,
        discountedPrice: 379.99,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            thermaltake
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "25",
        name: "Procesador Intel i3 10100F",
        category: [
            10, 50, 51, 52
        ],
        price: 139.99,
        discountedPrice: 119.99,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            processors,
            fancooler,
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "26",
        name: "Roku Premiere",
        category: [
            10, 50, 51, 52
        ],
        price: 39.99,
        discountedPrice: 29.99,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            premiere,
            fancooler,
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    }
]