import productImg from "./prancha.jpeg"

import './styles.css';

function productBox() {
  const odd = true
  const productTitle = "pranca sharpeye"
  const imgWidth = 300
  const label = "adicionar ao carrinho"

   
  return (

    
    <div>
       
      
      <img src={productImg} alt="prancha" width={imgWidth} />
      <h3>{productTitle}</h3>
      <button>{label}</button>

      {odd==true ?"produto em estoque " : " produto fora de  estoque" }
      
      
       
        
       
      
      
      
    </div>
  );
}


export default productBox;
