import { useState } from "react";
import ProductBox from "../productBox";
import { PRODUCTS_LIST_MOCK } from "../../utils/mockdata";

function ProductsList() {

  const [cart, setCart] = useState([]);
  const itemsOnCart = cart.length;

  function handleAddToCart(product) {

    const temporaryCart = [...cart];
    temporaryCart.push(product);
    setCart(temporaryCart);

  }

  function handleRemoveItem() {

    const temporaryCart = [...cart];
    temporaryCart.pop();
    setCart(temporaryCart);

  }

  function getSubtotal(){

    /**
     * pegar item por item (esta no cart)
     * acessar valor dele (iterar o cart)
     * e somar todos (somar em uma variavel)
     */

    return 0;

  }

  return (
    <>
      <div>

        <h3>Carrinho: {itemsOnCart} {itemsOnCart === 1 ? "item" : "items"}</h3>

        <div>
          {
            cart.map((product) => <ProductOnCart name={product.name} preco={product.preco}/>)
          }          
        </div>

        <p><b>Total:</b> R$ {getSubtotal()}</p>

        <ButtonRemove
          itemsOnCart={itemsOnCart}
          handleRemoveItem={handleRemoveItem}
        />

      </div>

      <hr/>

      <div style={{display: 'flex', gap: '15px'}}>
      {
        PRODUCTS_LIST_MOCK.map((product) => 
          <ProductBox itemsOnCart={itemsOnCart} addToCart={handleAddToCart} product={product}/>
        ) 
      }
      </div>
    </>
  );
}

function ProductOnCart({name, preco}){

  return(
    <p><button disabled={true}>X</button> | <b>{name}</b> - R$ <i>{preco}</i></p>
  )

}

function ButtonRemove({ itemsOnCart, handleRemoveItem }) {
  const removeItemsButtonDisabled = itemsOnCart === 0;
  return (
    <button disabled={removeItemsButtonDisabled} onClick={handleRemoveItem}>
      Remover item
    </button>
  );
}

export default ProductsList;
