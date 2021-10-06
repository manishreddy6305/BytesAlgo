import './../styles/product.css'
import star from './../images/star4.png'
function Product(props){
    return(
    <>
       <div className="Productc">
          <img src={star} className="star"></img>
          <p style={{fontWeight:500}}>{props.heading}</p>
          <p className="content">It is a long established fact that a reader will be distracted by the </p>
        </div>
    </>
    )
}
export default Product;