function ProductsList({products , favorites , toggleFavorite}){
    
    return(
        <div>   
            <div>
                {
                    products.map((product) => (
                       <div key={product.id} style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <button onClick={() => toggleFavorite(product.id)}>{favorites.includes(product.id) ? 'Remove' : 'Add to Favorites'}</button>
                       </div> 
                    ))
                }
            </div>
        </div>
    )

}

export default ProductsList