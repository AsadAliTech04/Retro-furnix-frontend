import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../Utils/Context";
import {
    UilTimes
} from '@iconscout/react-unicons'

const CartItem = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);

    return (
        <div className="cart-products">
            {cartItems?.map((item) => (
                <div
                    key={item.id}
                    className="cart-product"
                >
                    <div className="img-container">
                        <img src={
                            process.env.REACT_APP_DEV_URL +
                            item.attributes.img?.data[0]?.attributes.url
                        } alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <span className="size">{item.attributes.Size?.[0]?.SIZE}</span>
                        <span className="color">{item.attributes.Variation?.[0]?.Color}</span>
                        <span className="assemble">{item.attributes.assemmble}</span>
                        <UilTimes className="close-btn" onClick={() => handleRemoveFromCart(item)} />
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity("dec", item)}> -</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handleCartProductQuantity("inc", item)} >+</span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span className="highLight"> &pound;{item.attributes.Size?.[0]?.Price * item.attributes.quantity} </span>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
};

export default CartItem;
