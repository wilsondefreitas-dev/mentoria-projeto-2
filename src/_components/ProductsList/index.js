import { useState } from "react";
import ProductBox from "../productBox";

function ProductsList(){

    const [itemsOnCart, setItemsOnCart] = useState(0);

    function handleOnClick(){

        const add = itemsOnCart + 1;
        setItemsOnCart(add);

    }

    return(
        <>
            <h3>
                Carrinho: {itemsOnCart} {itemsOnCart === 1 ? 'item' : 'items'}
            </h3>
            <ProductBox addToCart={handleOnClick}/>
            <ProductBox addToCart={handleOnClick}/>
        </>
    );

}

export default ProductsList;