import { useState } from "react";


function ProductCard({name,price}){
    const[added,setadded] = useState(false);

    const handleAddToCart = ()=>{
        setadded(true);
    };

    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p>₹{price}</p>
            <button onClick={handleAddToCart} disabled={added}>
                {added ? "Added" : "Add to Cart"}
            </button>
        </div>
    );
}

export default ProductCard;