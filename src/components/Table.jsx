const Table = ()=>{
    return(
         <div className="col-md-6">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Products</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>PMS</td>
                        <td>N620</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Kerosene</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Diesel</td>
                        <td>680</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Table;