import productImg from "./prancha.jpeg";
import {MAX_ITEMS_ALLOWED_ON_CART} from '../../utils/constants';
import "./styles.css";

function ProductBox({itemsOnCart, addToCart, product}) {

  const buttonDisabled = (itemsOnCart >= MAX_ITEMS_ALLOWED_ON_CART);
  const label = "adicionar ao carrinho";
  const imgWidth = 200;

  const {name, marca, preco, detalhes:details} = product;

  //

  const arrayDetails = Object.keys(details); //cria uma array com as keys do objeto

  return (
    <div>
            
      <img src={productImg} alt="prancha" width={imgWidth} />
      <h3>{name}</h3>
      <p>{marca}</p>
      <p>R$ {preco}</p>
      
      <div>
        {
          arrayDetails.map((label) => <Details label={label} value={details[label]}/>)
        }
      </div>

      <button onClick={() => addToCart(product)} disabled={buttonDisabled}>
        {label}
      </button>

    </div>
  );
}

const Details = ({label, value}) => {
  
  return(
      <p><b>{label}:</b> {value}</p>
  )

}

export default ProductBox;
