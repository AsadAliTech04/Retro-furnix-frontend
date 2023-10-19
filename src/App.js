  import {Route,  BrowserRouter , Routes} from "react-router-dom"
    
 import Header from "./components/Header/Header";
 import Footer from "./components/Footer/Footer";
 import Home from "./components/Home/Home";
 import Category from "./components/Category/Category";
 import SingleProduct from "./components/SingleProduct/SingleProduct";
 import NewsLetter from "./components/Footer/Newsletter/Newsletter";
 import About from "./components/About/About";
 import Contact from "./components/Contact/Contact";
 import Success from "./components/Success/Success";
import AppContext from "./Utils/Context";
import Order from "./components/Cart/Order/Order";


  
function App() {
    return (
        <> 

     <BrowserRouter> 
     <AppContext>
     <Header/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:id" element={ <Category/>}/>
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/about"  element={<About/>}   />
        <Route path="/contact"  element={<Contact/>}   />
        <Route path="/success" element={<Success/>}  />
        <Route path="/order"  element={<Order/>} />

     </Routes>
     <NewsLetter/>
     <Footer/>
     </AppContext>
     </BrowserRouter>    


</>
    )
}                         
   
export default App; 