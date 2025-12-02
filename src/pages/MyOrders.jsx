import React, { useEffect, useState } from 'react'

const MyOrders = () => {
  const [diamondData, setDiamondData] = useState([]);
  
    useEffect(() => {
      const saved = localStorage.getItem("finalOrder");
      if (saved) {
        const diamondData = JSON.parse(saved);
        setDiamondData(diamondData);
      }
    }, []);

  return (
    <>
    <div style={{margin:"15px"}}>My orders</div>
    {diamondData.length===0 ? (<p>No orders found</p>):(
      diamondData && diamondData.map((order)=>(
        
        <div key={order.orderDate} style={{border:"1px solid gray",margin:"10px",background:"#f5f5f5",padding:"10px",borderRadius:"8px",width:"500px"}}>
           <p>Order ID: {order.orderDate}</p>
          <p>Order Date: {new Date(parseInt(order.orderDate)).toLocaleString()}</p>
          <p>Order Details: {order.diamondId} — {order.carat} ct, Shape: {order.shape}, Lab: {order.lab}</p>
          <p>Setting: {order.setting}</p>
          <p>Order Price: ${order.price}</p>
        </div>
      ))
    )}
    </>
  )
  }
      


export default MyOrders
