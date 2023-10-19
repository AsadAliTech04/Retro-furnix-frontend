import "./Header.scss";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../Utils/Context";
import { UilBars } from '@iconscout/react-unicons'
import Navlink from "../Navlinks/Navlink";
const Header = () => {
    const {cartCount} = useContext(Context);

    const [scrolled, setScrolled] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [showLink, setShowLink] = useState(false)
    const navigate = useNavigate();


    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <div className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <UilBars className="link-bar" onClick={() => {setShowLink(true)}}/>
                        <li className="menu-icon" onClick={() => {setShowLink(true)}}>Menu</li>
                     
                    </ul>
                    <div className="center" onClick={() => navigate("/")} >Retro Furnix .</div>
                    <div className="right">
                        <TbSearch   onClick={() => {setShowSearch(true)}}/>
                        <AiOutlineHeart />
                        <span className="cart-icons">
                            <CgShoppingCart onClick={() => {setShowCart(true)}} />
                            
                            
                            {!!cartCount  && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>

            </div>
            { showCart && <Cart  setShowCart={setShowCart} /> }   
               
            { showSearch && <Search setShowSearch={setShowSearch} />  }
            { showLink && <Navlink setShowLink={setShowLink} />  }

           

        </>
    )
};

export default Header;
