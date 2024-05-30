import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import ShowProuducts from "./pages/ShowProuducts"

import {Routes,Route} from 'react-router-dom'
 function App() {



 

  return (
    <>
    <Navbar/>

  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<ShowProuducts/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
 
    </>
  )
}

export default App
