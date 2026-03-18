import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const Create = ({}) =>{
    // these data are coming from our ProductContext
    const {products, setProducts} = useContext(ProductContext);

    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [id,setId] = useState("")
    // using one state to manage all form elements and id 
    const [form, setForm] = useState({
        id: "",
        name: "",
        price: ""
    });

    // a function that will respond when the form is submitted
    function handle_submit(e){
        e.preventDefault();   // to prevent the form from submitting
        if(form.name=="" || form.price==""){
            alert("Please fill in all the fields")
        }else{
            // generate a random id
            let id = Date.now();
            setForm({...form, id:id});
            
            //console.log(data)
            //send what we collected from the form to an api that will insert it to our database. The api sends a response and we update our state like below
           
            setProducts([...products, form])
        }
    }

    function updateFormState(e){
        setForm({...form,[e.target.name] : e.target.value})
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 py-3">
                   <form onSubmit={handle_submit}>
                    <input type="text" className="form-control mb-2" placeholder="product name" value={form.name} onChange={updateFormState} name="name"/>
                    <input type="number" className="form-control mb-2" placeholder="product price" value={form.price} onChange={updateFormState} name="price"/>
                    <button className="btn btn-primary btn-sm">Add Product</button>
                   </form>
                </div>
            </div>


        </div>
    )
}




export default Create;