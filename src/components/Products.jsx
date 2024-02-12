import ProductItem from "./ProductItem"
import ProductData from "../productData"

function Product(props) {

  return (
    <div className="grid grid-cols-3 gap-10 mb-8">
     {ProductData.map((product)=>(
      <ProductItem key={product.id} product={product} card={props.card} setCard = {props.setCard}/>
     ))}
    </div>

  )
}

export default Product