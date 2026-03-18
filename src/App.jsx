import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Table from "./components/Table"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import "./style.css";

const App = ()=>{

  const appName = "Chopchop App"; //assume this is coming from an API
  let walletBalance = 7000000;
  const students = ["Yemi", "David", "Scofield", "Ojule"];
  let isLoggedIn = true;
  const products = [
    {id:1, name:"handkerchief", price:1000},
    {id:2, name:"Detol Soap", price:3000},
    {id:3, name:"Greek Yoghurt", price:15000},
    {id:4, name:"Fruit Salad", price:20000}
  ];

  return (
    <div className="container">
      { isLoggedIn? <Dashboard /> : <Login /> }      {/* conditional rendering */}
      <Header name={appName} wb={walletBalance} />    {/* passing a prop from parent to the child(prop drilling*/}
      <div className="row myrow">
        <Main products={products} />
        <Sidebar stud={students} />
        <Table />
      </div>
        <Footer wb={walletBalance} />
    </div>
  )

}


export default App;