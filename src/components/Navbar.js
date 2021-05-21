import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import { cartActions } from '../store/cartSlice';

const Navbar = () => {

    const dispatch = useDispatch();
    const itemList = useSelector(state => state.cart.itemList);
    const cartSize = useSelector(state => state.cart.cartSize);

    useEffect(() => {
      dispatch(cartActions.calculateCartSize());
    },[itemList])

    const searchRef = useRef();

    const history = useHistory();

    const searchProduct = () => {
      const searchedKeyword = searchRef.current.value;
      history.push(`/search/${searchedKeyword}`);
    }

    return (
      <div className="nav">
          <h1>Amazon</h1>
          <div className="search">
            <input type="text" placeholder="Search" className="search-bar" ref={searchRef}/>
            <i type="submit" className="fa fa-search" aria-hidden="true" id="search-icon" onClick={searchProduct}></i>
          </div>
          <button className="cart-add-btn" style={{fontSize: '1rem'}}>Login</button>
          <div className="nav-cart">
              <p>My Cart</p>
              <p className="nav-cart-count">{cartSize}</p>
          </div>
      </div>
    )
  }
  
  export default Navbar;