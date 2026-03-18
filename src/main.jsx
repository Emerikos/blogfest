import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Blogger from "./Blogger.jsx"
import Bank from "./Bank"
import Inventory from "./Inventory.jsx"
import { AppNameProvider } from './context/AppNameContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import Meal from './Meal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppNameProvider>
      <ProductProvider>
      {/* <Inventory /> */}
      {/* <Meal /> */}
      </ProductProvider>
      {/* <App /> */}
      <Blogger />
      {/* <Bank /> */}
    </AppNameProvider>
  </StrictMode>,
// <div>
  //  <h1 className='text-success bg-primary'>Hello World</h1>
  //<p>greetings from Mars</p>
//</div> 
)
