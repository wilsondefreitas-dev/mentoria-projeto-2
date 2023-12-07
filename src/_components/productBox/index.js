import productImg from "./prancha.jpeg";
import "./styles.css";

function ProductBox({itemsOnCart, addToCart}) {

  const buttonDisabled = (itemsOnCart >= 3);
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
