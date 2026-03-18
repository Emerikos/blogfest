import Products from "./inventory_components/Products.jsx"
import Create from "./inventory_components/Create.jsx"
import { useState } from "react"   //hook that is used for a state
import { useContext } from "react"
import { AppNameContext } from "./context/AppNameContext.jsx"
import { ProductContext } from "./context/ProductContext.jsx"
import Footer from "./Inventory_components/Footer.jsx"

const Inventory = () =>{
    //how to use context
    const {appName} = useContext(AppNameContext);   //useContext expects one argument which is the context you want to use
    const {products} = useContext(ProductContext);


   

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center pt-5">
                    <h1>{appName}</h1>
                    <h4>Total Products: {products.length} </h4>
                </div>
            </div>
        {/* Other components go here */}
        <Create  />
        <Products />
        <Footer />


        </div>
    )
}




export default Inventory;