
//import the image like a component. When importing an image you give it an alias
import holees from "../images/holeeshit.jpg"

const Main = ({products}) =>{
    let sn = 1;
    return(
       <div className="row">
         <div className="col-md-6">
            <h2>Main Section</h2>
            <img src={holees} alt="chinese man" className="img-fluid w-50"/>
            <table className="table">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((pro)=>{
                            return(
                                <tr key={pro.id} >
                                    <td> {sn++} </td>
                                    <td> {pro.name} </td>
                                    <td> {pro.price} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
       </div>
    )
}


export default Main;