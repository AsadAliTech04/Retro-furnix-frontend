import React, { useState } from 'react'
import "./Order.scss"
import { useContext } from "react";
import { Context } from "../../../Utils/Context";
import queryString from 'query-string';
import { Helmet } from 'react-helmet';

const Order = () => {
    const { cartItems } = useContext(Context);

    const [formComplete, setFormComplete] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();

    //     // Check if all required fields are filled
    //     const fullName = e.target.fullName.value;
    //     const email = e.target.email.value;
    //     const telephone = e.target.telephone.value;
    //     const address = e.target.address.value;
    //     const postcode = e.target.postcode.value;
    //     const city = e.target.city.value;

    //     if (fullName && email && telephone && address && postcode && city) {
    //         setFormComplete(true);

    //         // Send details to WhatsApp using the WhatsApp API (not shown in this code)
    //     } else {
    //         setErrorMessage('Please fill in all required form fields.');
    //     }
    // };


    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        const fullName = e.target.fullName.value;
        const email = e.target.email.value;
        const telephone = e.target.telephone.value;
        const address = e.target.address.value;
        const postcode = e.target.postcode.value;
        const city = e.target.city.value;

        if (fullName && email && telephone && address && postcode && city) {
            setFormComplete(true);

            // Create an object with the form details
            const formDetails = {
                fullName,
                email,
                telephone,
                address,
                postcode,
                city,
            };

            // Create an array to store product details
            const productDetails = cartItems.map(item => ({
                productName: item.attributes.title,
                productSize: item.attributes.Size?.[0]?.SIZE,
                productColor: item.attributes.Variation?.[0]?.Color,
                quantity: item.attributes.quantity,
                assemble: item.attributes.assemble,
                subtotal: item.attributes.Size?.[0]?.Price,
            }));

            // Combine form and product details into one message
            const orderDetails = {
                formDetails,
                productDetails,
            };

            const whatsappMessage = JSON.stringify(orderDetails, null, 2);

            // Create a WhatsApp message link with the message
            const whatsappURL = `https://wa.me/447918099801?text=${encodeURIComponent(whatsappMessage)}`;

            // Open the WhatsApp link in a new window
            window.open(whatsappURL);

            // Clear any previous error messages
            setErrorMessage('');
        } else {
            setErrorMessage('Please fill in all required form fields.');
        }
    };



    return (
        <div className="main-order">
            <Helmet>
                <title>RetroFurnix - Order</title>
                <meta name="description" content="Track and manage your orders with RetroFurnix" />
              
            </Helmet>
            <div className="client-detail">
                <div className="title">
                    <span className="title-text">
                        Checkout
                    </span>
                </div>

                <div className="form"  >
                    <form action="" onSubmit={handleFormSubmit} >
                        <div className="row1">
                            <label>Full Name <span>*</span></label>
                            <input type="text" name="fullName" required />
                            <label>Email <span>*</span></label>
                            <input type="email" name="email" required />
                        </div>
                        <div className="row2">
                            <label>Telephone <span>*</span></label>
                            <input type="number" name="telephone" required />
                            <label>Address <span>*</span></label>
                            <input type="text" name="address" required />
                        </div>
                        <div className="row3">
                            <label>Appartment</label>
                            <input type="text" name="apartment" />
                            <label>Postcode <span>*</span></label>
                            <input type="text" name="postcode" required />
                            <label>Town/city <span>*</span></label>
                            <input type="text" name="city" required />
                        </div>
                        <div className="row4">
                            <label htmlFor="" required>Loading Charges* (If lift not available then select the Floor)</label>
                            <select >
                                <option value="">£0 Ground Floor upto Max</option>
                                <option value="">£10 for 1 Floor</option>
                                <option value="">£20 for 2 Floor</option>
                                <option value="">£30 for 3 Floor</option>
                                <option value="">£40 for 4 Floor</option>
                                <option value="">£50 for 5 Floor</option>
                                <option value="">£60 for 6 Floor</option>
                                <option value="">£70 for 7 Floor</option>
                                <option value="">£80 for 8 Floor</option>
                                <option value="">£90 for 9 Floor</option>
                                <option value="">£100 for 10 Floor</option>
                                <option value="">£110 for 11 Floor</option>
                                <option value="">£120 for 12 Floor</option>
                                <option value="">£130 for 13 Floor</option>
                                <option value="">£140 for 14 Floor</option>
                                <option value="">£150 for 15 Floor</option>
                                <option value="">£160 for 16 Floor</option>
                                <option value="">£170 for 17 Floor</option>


                            </select>
                        </div>
                        <div className="row5">
                            <label>Additional informatoin about your order</label>
                            <input type="message" id='message' name="message" />
                        </div>
                        <div className="error-message">{errorMessage}</div>

                        <button className='button' type="submit">Confirm order</button>

                    </form>
                </div>
                {/* <div className="button" type="submit">
                    Confirm order
                </div> */}

            </div>
            <div className="product-detail">
                <div className="product">
                    <span>YOUR ORDER SUMMARY</span>
                </div>

                {cartItems?.map((item) => (
                    <div className="detail" key={item.id}>
                        <div className="product-detail">
                            <span>Product name:</span>
                            <span>{item.attributes.title}</span>
                        </div>
                        <div className="product-detail">
                            <span>Product Size:</span>
                            <span>{item.attributes.Size?.[0]?.SIZE}</span>
                        </div>
                        <div className="product-detail">
                            <span> Product Color:</span>
                            <span>{item.attributes.Variation?.[0]?.Color}</span>
                        </div>
                        <div className="product-detail">
                            <span>Quantity:</span>
                            <span>{item.attributes.quantity}</span>
                        </div>
                        <div className="product-detail">
                            <span>Aseemble:</span>
                            <span>{item.attributes.assemmble}</span>
                        </div>
                        <div className="product-detail">
                            <span>Subtotal:</span>
                            <span> &pound;{item.attributes.Size?.[0]?.Price} </span>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    )
}

export default Order