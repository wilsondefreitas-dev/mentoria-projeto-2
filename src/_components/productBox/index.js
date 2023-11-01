import productImg from "./prancha.jpeg"

import './styles.css';

function productBox() {
  const productTitle = "pranca sharpeye"
  const imgWidth = 300
  const label = "adicionar ao carrinho"
  return (
    <div>
      <img src={productImg} alt="prancha" width={imgWidth} />
      <h3>{productTitle}</h3>
      <button>{label}</button>
    </div>
  );
}

export default productBox;
