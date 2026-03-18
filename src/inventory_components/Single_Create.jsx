import { useState } from "react";

const Create = ({setProducts,products}) =>{
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [id,setId] = useState("")
    // using one state to manage all form elements and id 
    const [form, setForm] = useState({
        
    });

    // a function that will respond when the form is submitted
    function handle_submit(e){
        e.preventDefault();   // to prevent the form from submitting
        if(name=="" || price==""){
            alert("Please fill in all the fields")
        }else{
            let id = Date.now()
            setId(id);
            // combine everything to form an object
            const data = {
                id: id,
                name: name,
                price: price
            }
            //console.log(data)
            setProducts([...products, data])
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 py-3">
                   <form onSubmit={handle_submit}>
                    <input type="text" className="form-control mb-2" placeholder="product name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input type="number" className="form-control mb-2" placeholder="product price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    <button className="btn btn-primary btn-sm">Add Product</button>
                   </form>
                </div>
            </div>


        </div>
    )
}




export default Create;