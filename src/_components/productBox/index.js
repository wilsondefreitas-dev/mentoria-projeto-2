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

  /*
  
    - usar o map na arrayDetayls
    - inserir os valores corretamente no componente Details
    - finalizar o componente Details
    - renderizar todos os detalhes na tela

    NOTA: (referência no productsList)

  */

  console.log(details);
  console.log(arrayDetails);

  return (
    <div>
      
      <img src={productImg} alt="prancha" width={imgWidth} />
      <h3>{name}</h3>
      <p>{marca}</p>
      <p>R$ {preco}</p>
      
      <div>
        {/* inserir aqui um map com os detalhes */}
      </div>

      <button onClick={addToCart} disabled={buttonDisabled}>
        {label}
      </button>

    </div>
  );
}

const Details = ({label, value}) => {

}

export default ProductBox;
