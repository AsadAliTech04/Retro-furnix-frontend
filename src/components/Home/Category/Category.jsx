import "./Category.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Category = ({ categories }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (

        <div className="shop-by-category">
            <div className="categories"
                >
                {categories?.data?.map(item => (
                    <div key={item.id} className="category"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} 

                        onClick={() => navigate(`/category/${item.id}`)}>
                        <img src={
                            process.env.REACT_APP_DEV_URL +
                            item.attributes.img.data.attributes.url
                        } />

                        {isHovered && (
                            <div className="category-name">
                                <span>{ item.attributes.title}</span>
                            </div>
                        )}

                    </div>

                ))}



            </div>
        </div>


    )
};

export default Category;
