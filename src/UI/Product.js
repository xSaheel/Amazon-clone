import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Product = ({item}) => {

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem(item));
  }

  return (
    <div className="item-container">
        <h2 style={{marginBottom: '2rem'}}>{item.name}</h2>
        <div className="item-attributes">
            <h2>${item.price}</h2>
            <button className="cart-add-btn" onClick={addToCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product;