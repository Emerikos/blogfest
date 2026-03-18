
const Counter = ({ab})=>{
    // ab = ab + 10000;  //Let's assume that a customer deposited 10000 and we need to update the account balance don't do it here
    return(
        <div className="row">
            <div className="col-md-8">
                <h1>Account Balance: {ab} </h1>
            </div>
        </div>
    )
}


export default Counter;