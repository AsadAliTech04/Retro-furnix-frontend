import "./Cart.scss";
import {

    UilTimes,
    UilShoppingCart

} from '@iconscout/react-unicons'
import CartItem from "./CartItem/CartItem"
import { useContext } from "react";
import { Context } from "../../Utils/Context";
 import { useNavigate } from "react-router-dom";
const Cart = ({ setShowCart }) => {
    const { cartItems, cartSubtotal } = useContext(Context);
    const navigate = useNavigate();

  

    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">   
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn"
                        onClick={() => { setShowCart(false) }}
                    >
                        <UilTimes />
                        <span className="text">close</span>
                    </span>
                </div>
                {!cartItems.length && (<div className="empty-cart">
                    <UilShoppingCart />
                    <span>No produts in the cart.</span>
                    <button className="return-btn">RETURN TO SHOP </button>
                </div>)

                }
                {!!cartItems.length && (<>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text"> Subtotal</span>
                            <span className="text">  &pound; {cartSubtotal}</span>

                        </div>
                        <div className="button" onClick={()=>setShowCart(false)}>
                            <button className="checkout-btn" 
                              onClick={()=> navigate("/order")}
                              
                            >Checkout</button>
                        </div>
                    </div>
                </>)}

            </div>   
        </div>
    )
};

export default Cart;
