import productImg from "./prancha.jpeg";
import {MAX_ITEMS_ALLOWED_ON_CART} from '../../utils/constants';
import "./styles.css";



function ProductBox({itemsOnCart, addToCart}) {

  const buttonDisabled = (itemsOnCart >= MAX_ITEMS_ALLOWED_ON_CART);
  const productTitle = "pranca sharpeye";
  const label = "adicionar ao carrinho";
  const imgWidth = 200;

  //

  return (
    <div>
      
      <img src={productImg} alt="prancha" width={imgWidth} />
      <h3>{productTitle}</h3>

      <button onClick={addToCart} disabled={buttonDisabled}>
        {label}
      </button>

    </div>
  );
}

export default ProductBox;
