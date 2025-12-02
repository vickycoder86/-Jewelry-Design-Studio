import React from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"20px",fontSize:"20px",fontWeight:"600",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}}>
      <Link style={{textDecoration:"none",color:"black"}} to="/"><div>💎Diamond Kings💎</div></Link>
      <div style={{display:"flex",flexWrap:"wrap",gap:"30px"}}>
      <Link style={{textDecoration:"none"}} to="/"><div>Home</div></Link>
      
      <Link style={{textDecoration:"none"}} to="/myorders"><div>My Orders</div></Link>
      </div>
    </div>
  )
}

export default Headers
