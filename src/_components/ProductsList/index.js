import { useState } from "react";
import ProductBox from "../productBox";

function ProductsList(){

    /**
     * o responsável pelo e-commerce solicitou que não seja vendido mais de 
     * 3 items por usuário. por isso, precisamos limitar o número de items
     * que o cliente pode adicionar no carrinho, e também dar a possibilidade
     * de remover um item do carrinho.
     * 
     * TODO:
     * 
     * 
     * 1. passar o estado 'itemsOnCart' pro filho 'ProductBox'
     * 2. se 'itemsOnCart' for igual ou maior a 3 desativa o botão de adicionar ao carrinho
     * 3. adicionar um botão pra remover items do carrinho
     *      3.1 ao clicar, diminui um item do carrinho
     */

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
        </>
    );

}

export default ProductsList;