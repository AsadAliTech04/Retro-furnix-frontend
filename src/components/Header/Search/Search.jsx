import "./Search.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UilTimes } from "@iconscout/react-unicons"
import prod from "../../../assets/products/earbuds-prod-1.webp"
import  useFetch  from "../../../useFetch/useFetch";
const Search = ({ setShowSearch }) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const onChange = (e) => {
        setQuery(e.target.value);

    }
    let data   = useFetch(
        `/api/products?populate=*&filters[title][$contains]=${query}`
    );

    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field" >
                <input
                    type="text"
                    autoFocus
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <UilTimes className="close-btn" onClick={() => setShowSearch(false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {data?.data?.map((item) => (
                             <div className="search-result-items"  
                               key={item.id}
                               onClick={() => {navigate("/product/" + item.id )
                               setShowSearch(false);
                    }
                            }
                             >
                             <div className="img-container">
                                 <img src={
                                    process.env.REACT_APP_DEV_URL + 
                                    item.attributes.img.data[0].attributes.url
                                 } alt="" />
                             </div>
                             <div className="prod-details">
                                 <span className="name">{item.attributes.title}</span>
                                 <span className="desc">{item.attributes.description}</span>
                             </div>
                         </div>

                    ))}
                  
                </div>
            </div>
        </div>
    )
};

export default Search;
