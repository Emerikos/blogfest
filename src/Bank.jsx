import Counter from "./bank_components/Counter"
import Atm from "./bank_components/Atm"
import Pos from "./bank_components/Pos"
import {useState} from "react"    // hook that is used for a state
import Success from "./bank_components/Success"
import Warning from "./bank_components/Warning"

const Bank = () =>{
    // let accountBalance = 1000;  //if accountBalance will change, never store in a variable

    const [accountBalance, setAccountBalance] = useState(1000);   //a state to mmanage account balance
    const [amount, setAmount] = useState(0);   //a state to manage what user is typing in input field

    function updateAmount(e){
        setAmount(e.target.value)
    }

    return(
        <div className="container">
            <h1>Bank Application: {accountBalance} </h1>
            {accountBalance > 1000? <Success /> : <Warning /> }
            <button className="btn btn-danger" onClick={()=>{
                if(amount < accountBalance){
                    setAccountBalance(accountBalance-amount)
                }else{
                    alert("You cannot withdraw more than your balance")
                }
            }}>Withdraw</button>
            <input type="number" value={amount} onChange={updateAmount} />
            <button className="btn btn-primary" value={amount} onClick={()=>{
                setAccountBalance(accountBalance+Number(amount))
            }}>Deposit</button>
            <Counter ab = {accountBalance} />
            <Atm ab = {accountBalance}/>
            <Pos ab = {accountBalance}/>
        </div>
    )
}



export default Bank;