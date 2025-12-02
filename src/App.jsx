import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Products from './pages/Products'
import DiamandQuickViews from './pages/DiamandQuickViews'
import DiamondDesign from './pages/DiamondDesign'


function App() {
  

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path="/diamond/:id" element={<DiamandQuickViews/>} />
      <Route path='/diamonddesign/:id' element={<DiamondDesign/>}/>
     </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
