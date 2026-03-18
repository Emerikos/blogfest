import styles from "./Header.module.css"

const Header = ({name,wb})=>{    //collecting the prop coming from Header in App.jsx
    // logics and data
    const appname = "Chopchop FastFood";
    let productsCount = 10;
    const rowStyle = {
        minHeight: "200px",
        border: "2px solid red",
        padding: "10px"
    }

    return(
        <div className={`row ${styles.myrow}`} style={rowStyle}>
            <div className="col-md-12">
                <h1>{name} </h1>
                <h2> Wallet Balance: {wb} </h2>
                <h4>Total Products: {productsCount+2} </h4>
                <button className="btn btn-success" onClick={()=>{alert(`You are welcome to ${appname}`)}}>Click Me</button>
            </div>
        </div>
    )
}


export default Header