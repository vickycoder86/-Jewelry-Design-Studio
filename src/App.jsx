import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Products from './pages/Products'
import DiamandQuickViews from './pages/DiamandQuickViews'
import DiamondDesign from './pages/DiamondDesign'
import Summary from './pages/Summary'
import Headers from './components/Headers'
import MyOrders from './pages/MyOrders'
import Footers from './components/Footers'
import Cart from './pages/Cart'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Headers />
     <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path="/diamond/:id" element={<DiamandQuickViews/>} />
      <Route path='/diamonddesign/:id' element={<DiamondDesign/>}/>
      <Route path='/summary' element={<Summary/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     <Footers/>
    </BrowserRouter>

    
    </>
  )
}

export default App
