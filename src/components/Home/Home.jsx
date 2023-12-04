import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Produts from "../Products/Products"
import { useEffect , useContext } from "react";
import { fetchDataFromApi } from "../../Utils/Api";
import {Context} from "../../Utils/Context"


const Home = () => {
   const { categories ,setCategories,products,setProducts} = useContext(Context);
    useEffect(() => {
        getCategories();
        getProducts();
    }, {});  

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((resp) => {
            console.log(resp);
            setCategories(resp);
            
        });
    }
    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((resp) => {
            console.log(resp);
            setProducts(resp);
            
        });
    }

    return <div >
           {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Retro Furnix</title>
                <link rel="canonical" href="https://retrofurnix.com/" />
            </Helmet> */}
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category  categories={categories}/>
                <Produts products={products} headingText="Popular Produts" />
            </div>
        </div>  

    </div>;
};

export default Home;
