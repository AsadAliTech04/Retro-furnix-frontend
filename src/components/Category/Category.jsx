import "./Category.scss";
import Products from "../Products/Products"
import useFetch from "../../useFetch/useFetch"
import { useParams } from "react-router-dom";
import {Helmet} from "react-helmet";

const Category = () => {
    const { id } = useParams();
    const  data  = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );
    return(
        <div className="category-main-content">
              <Helmet>
                <title>RetroFurnix - Category</title>
                <meta name="description" content="Explore our vintage furniture categories" />
            </Helmet>
            <div className="layout">
                <div className="category-title">
                {
                        data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }
                    <Products innerPage={true} products={data}/>
                </div>
            </div>
        </div>
    )
};

export default Category;
  