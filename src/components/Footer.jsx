
const Footer = (props)=>{
    return(
        <div className="row">
            <div className="col-md-4">
                <h1>Footer Section</h1>
                <h2>Wallet Balance: {props.wb} </h2>
            </div>
        </div>
    )
}



export default Footer;