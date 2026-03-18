import { createContext,useState } from "react";

//stage one: create a context
export const ProductContext = createContext()


//stage 2: create the provider
export const ProductProvider = ({children})=>{
     const defaultProducts = [
        {
            id: 197656,
            name:"product1",
            price:1200,
        },
        {
            id: 1964859,
            name:"product2",
            price:2500,
        }
    ];

    const [products, setProducts] = useState(defaultProducts)

    function delete_product(idToDelete){
        // delete a product with id of parameter: filter our state: pproducts and exclude a product with id of id parameter
        const filteredProducts = products.filter((prod)=>{
            return prod.id != idToDelete
        });
        setProducts(filteredProducts)
    }
    return(<ProductContext.Provider value={{products, setProducts, delete_product }}>
        {children}
        
    </ProductContext.Provider>)
}