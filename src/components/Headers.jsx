import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../context/MainContext';

const Headers = () => {

  const {cart} = useContext(productContext);

  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"20px",fontSize:"20px",fontWeight:"600",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",}}>
      <Link style={{textDecoration:"none",color:"black"}} to="/"><div>💎Diamond Kings💎</div></Link>
      <div style={{display:"flex",flexWrap:"wrap",gap:"30px"}}>
      <Link style={{textDecoration:"none",color:"#2563eb"}} to="/"><div style={{fontSize:"18px"}}>🏠Home</div></Link>
      
      <Link style={{textDecoration:"none",color:"#2563eb"}} to="/myorders"><div style={{fontSize:"18px"}}>🧾My Orders</div></Link>
      <Link style={{textDecoration:"none",color:"#2563eb"}} to="/cart"><div style={{fontSize:"18px"}}>🛒Cart({cart.length})</div></Link>
      </div>
    </div>
  )
}

export default Headers
