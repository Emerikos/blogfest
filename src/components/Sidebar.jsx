
const Sidebar= ({stud})=>{
    console.log(stud)
    return(
        <div className="col-md-6">
            <h1>Sidebar Section</h1>
            <ul>
                {
                    stud.map((std,index)=>{
                        return <li key={index}> {std} </li>  //must return and use key
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar;