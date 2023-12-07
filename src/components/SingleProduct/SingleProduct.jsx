import "./SingleProduct.scss";
import React from 'react';
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from "react";
import { useContext } from "react";
import ReactImageMagnify from 'react-image-magnify';

import {
    UilFacebookF,
    UilInstagram,
    UilTwitterAlt,
    UilLinkedinAlt,
    UilShoppingCart

} from '@iconscout/react-unicons'

import useFetch from "../../useFetch/useFetch"
import { useParams } from "react-router-dom";
import { Context } from "../../Utils/Context";
import {Helmet} from "react-helmet";




const SingleProduct = () => {
    const { id } = useParams();
    // const data = useFetch(
    //     `/api/products?populate=*&[filters][id]=${id}`
    // );
    const data = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    // if (!data) return;
    const product = data?.data?.[0]?.attributes;
    const { handleAddToCart } = useContext(Context);

    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        setQuantity((prevState) => prevState + 1);

    }
    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;

            return prevState - 1;

        })
    };


    useEffect(() => {




    }, [])
    const [selectedColor, setSelectedColor] = useState('');


    const [selectedSize, setSelectedSize] = useState('');
    const [selectedPrice, setSelectedPrice] = useState();
    const [assemblingChargeAdded, setAssemblingChargeAdded] = useState(false);
    const [addAssemble, setAddAssemble] = useState('');




    // Event handler to handle size selection
    const handleSizeChange = (event) => {
        const selectedSize = event.target.value;
        setSelectedSize(selectedSize);




        // Find the selected size in the data and update the price
        const selectedSizeData = data?.data?.[0]?.attributes.Size.find(
            (sizeOption) => sizeOption.SIZE === selectedSize
        );

        if (selectedSizeData) {
            setSelectedPrice(selectedSizeData.Price);
        }
    };

    const handleColorChange = (event) => {
        const selectedColor = event.target.value;
        setSelectedColor(selectedColor); // Update the selected color state
    };



    const handleAssemblyChange = (e) => {
        const selectedOption = e.target.value;
        const assemblingPrice = data?.data?.[0]?.attributes.assemmble;
        setAddAssemble(selectedOption);


        if (selectedOption === "Yes need assemmbling" && !assemblingChargeAdded) {
            setSelectedPrice(selectedPrice + assemblingPrice)
            setAssemblingChargeAdded(true);

        } else if (selectedOption === "No need assemmbling" && assemblingChargeAdded) {
            setSelectedPrice(selectedPrice - assemblingPrice)
            setAssemblingChargeAdded(false);

        }

    };










    return (
        <div className="single-product-main-content">
              <Helmet>
                <title>RetroFurnix - Single Product</title>
                <meta name="description" content="View details of a specific vintage furniture product" />
            </Helmet>
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        {/* <img src={  
                                  process.env.REACT_APP_DEV_URL +
                                  data?.data?.[0]?.attributes.img?.data[0]?.attributes.url
                                
                            } alt="" /> */}


                        <Carousel>
                            {data?.data?.[0]?.attributes.img?.data.map((imageData, index) => (
                                <div key={index}    >



                                    <ReactImageMagnify
                                       enlargedImageContainerStyle={{ zIndex: 99 }}
                                        enlargedImagePosition="over"
                                    {...{
                                        smallImage: {
                                       
                                           isFluidWidth: true,
                                            src: process.env.REACT_APP_DEV_URL + imageData?.attributes.url,
                                             width : 150,
                                             height: 150
                                        },
                                        largeImage: {
                                            src: process.env.REACT_APP_DEV_URL + imageData?.attributes.url,
                                            width: 1000,
                                            height: 1800
                                        }
                                    }} /> 
                                

                                     {/* <img
                                        src={process.env.REACT_APP_DEV_URL + imageData?.attributes.url}
                                        alt=""
                                    />  */}

                                </div>
                            ))}
                        </Carousel>



                    </div>
                    <div className="right">
                        <span className="name">{data?.data?.[0]?.attributes.title}</span>
                        <span className="price"> &pound;{selectedPrice}</span>
                        <span className="desc">{data?.data?.[0]?.attributes.desc}</span>
                        <span className="assebling-charges"> Aseembling Charges :  {data?.data?.[0]?.attributes.assemmble}</span>
                        <span className="divider" />
                        <div className="selection-div">
                            <div className="size-selection">




                                <select id="dropdown" value={selectedSize} onChange={handleSizeChange}>
                                    {data?.data?.[0]?.attributes.Size?.map((sizeOption, index) => (
                                        <option key={index} value={sizeOption.SIZE}>
                                            {sizeOption.SIZE}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="color-selection">


                                <select id="dropdown" onChange={handleColorChange}>
                                    {/* <option value="apple">{data?.data?.[0]?.attributes.Variation?.[0]?.Color}</option> */}
                                    {data?.data?.[0]?.attributes.Variation?.map((sizeOption, index) => (
                                        <option key={index} value={sizeOption.Color}>
                                            {sizeOption.Color}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="assemble-selection">
                                <select id="dropdown" onChange={handleAssemblyChange} >
                                    <option >Select once </option>
                                    <option >Yes need assemmbling</option>
                                    <option >No need assemmbling</option>
                                </select>
                            </div>

                        </div>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-cart-button" onClick={() => {
                                handleAddToCart(data?.data?.[0], quantity, selectedSize, selectedColor, addAssemble);
                                setQuantity(1);
                            }}>
                                <UilShoppingCart size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-items">
                            <span className="text-bold">
                                Category: {""}

                                <span>
                                    {
                                        data?.data?.[0]?.attributes.categories.data[0].attributes
                                            .title
                                    }
                                </span>

                            </span>
                            <span className="text-bold">
                                Share:

                                <span className="social-icons">
                                    <UilFacebookF size={16} />
                                    <UilInstagram size={16} />
                                    <UilLinkedinAlt size={16} />
                                    <UilTwitterAlt size={16} />

                                </span>

                            </span>

                        </div>
                    </div>
                </div>
                <RelatedProducts productId={id} categoryId={product?.categories.data[0].id} />
            </div>

        </div>
    )
};

export default SingleProduct;
