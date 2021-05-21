import { useSelector } from "react-redux";
import Item from "../UI/Item"

const MyCart = () => {

    const items = useSelector(state => state.cart.itemList);

    return (
      <div className="cart-container">
        <h1>My Cart</h1>
        {items.map(item => <Item key={item.id} item={item}/>)}
        {items.length !== 0 && <button className="cart-add-btn" style={{backgroundColor: "#6515dd", fontWeight: '500', fontSize: '1rem'}}>Buy Now!</button>}
      </div>
    )
  }
  
  export default MyCart;