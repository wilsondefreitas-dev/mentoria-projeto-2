import productImg from "./prancha.jpeg";
import "./styles.css";

function ProductBox({addToCart}) {

  const productTitle = "pranca sharpeye";
  const label = "adicionar ao carrinho";
  const imgWidth = 200;

  //

  return (
    <div>
      
      <img src={productImg} alt="prancha" width={imgWidth} />
      <h3>{productTitle}</h3>

      <button onClick={addToCart}>
        {label}
      </button>

    </div>
  );
}

export default ProductBox;
