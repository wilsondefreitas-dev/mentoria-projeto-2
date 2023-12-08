import { useState } from "react";
import ProductBox from "../productBox";
import { PRODUCTS_LIST_MOCK } from "../../utils/mockdata";

function ProductsList() {
  /**
   * Agora nós precisamos usar o recurso de mapear uma array
   * para adicionar varios items no carrinho.
   */

  const [itemsOnCart, setItemsOnCart] = useState(0);

  function handleAddToCart() {
    const add = itemsOnCart + 1;
    setItemsOnCart(add);
  }

  function handleRemoveItem() {
    const remove = itemsOnCart - 1;
    setItemsOnCart(remove);
  }

  return (
    <>
      <h3>
        Carrinho: {itemsOnCart} {itemsOnCart === 1 ? "item" : "items"}
        <ButtonRemove
          itemsOnCart={itemsOnCart}
          handleRemoveItem={handleRemoveItem}
        />
      </h3>

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

function ButtonRemove({ itemsOnCart, handleRemoveItem }) {
  const removeItemsButtonDisabled = itemsOnCart === 0;
  return (
    <button disabled={removeItemsButtonDisabled} onClick={handleRemoveItem}>
      Remover item
    </button>
  );
}

export default ProductsList;
