import { useCallback, useEffect, useState } from "react"
import ProductsList from "./ProductsList"

function ProductsPage(){


    const [products , setProducts] = useState([])
    const [favorites , setFavorites] = useState([])
    
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            setProducts(data.products)
        }
        getProducts()
    }, [])

    const toggleFavorite = useCallback((id) => {
        setFavorites((prevState) => prevState.includes(id) ? prevState.filter(fid => fid !== id) : [...prevState, id])
    }, [])


    return(
        <div>
            <h1>Products</h1>
            <ProductsList products={products} favorites={favorites} toggleFavorite={toggleFavorite}/>
        </div>
    )
}

export default ProductsPage