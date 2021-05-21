import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Item = ({item}) => {

    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="item-properties">
                <h2>{item.name}</h2>
                <h2>${item.price}</h2>
            </div>
            <div className="item-functions">
                <p>x{item.quantity}</p>
                <div>
                    <button className="btn" onClick={() => dispatch(cartActions.addItem(item))}>+</button>
                    <button className="btn" onClick={() => dispatch(cartActions.removeItem(item))}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Item;