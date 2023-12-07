import { useState } from "react";
import ProductBox from "../productBox";

function ProductsList() {
  /**
   * Agora nós precisamos saber quais items foram adicionados
   * no carrinho. Iremos usar o recurso de mapear uma array
   * para adicionar varios items na lista e também no carrinho.
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
      <ProductBox itemsOnCart={itemsOnCart} addToCart={handleAddToCart} />
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
