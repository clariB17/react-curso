import { createContext, useState, useEffect } from 'react'

export const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
    // Sopping Cart - contador de cantidad
    const [count, setCount] = useState(0)

    // Product Detail - Abrir/cerrar
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout side menu - Abrir/cerrar
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - Mostrar Producto
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart - Agregar productos al carrito
    const [cartProducts, setCartProducts] = useState([]) 

    //Shoping Card - order
    const [order, setOrder] = useState([])

    //Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    const [filteredCategory, setFilteredCategory] = useState(null)

    //Search Products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log("buscador: ", searchByTitle)
    
    //Search Products by category
    const [searchByCategory, setSearchByCategory] = useState(null)
    console.log(" category: ",searchByCategory)
    
    useEffect(()=> {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => (response.json()))  
            .then(data => (setItems(data)))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(()=> {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])
    
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    useEffect(()=> {
        if (searchByCategory) setFilteredCategory(filteredItemsByCategory(items, searchByCategory))
    }, [items, searchByCategory])

    console.log('filteredItems', filteredItems)
    console.log('aca', filteredCategory)
    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            filteredCategory,
            setFilteredCategory,
            setSearchByCategory,
            searchByCategory

        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}