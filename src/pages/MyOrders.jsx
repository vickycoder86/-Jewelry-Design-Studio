import React, { useEffect, useState } from 'react'

const MyOrders = () => {
  const [diamondData, setDiamondData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [debouncedInput, setDebouncedInput] = useState('');

  
    useEffect(() => {
      const saved = localStorage.getItem("finalOrder");
      if (saved) {
        const diamondData = JSON.parse(saved);
        setDiamondData(diamondData);
        
      }
    }, []);

    //use debounce

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedInput(inputValue);
      }, 300);
      return () => {
        clearTimeout(handler);
      };
    }, [inputValue]);

    //handlinggg search
  const filteredOrders = diamondData.filter(order =>
    order.orderDate.toString().includes(debouncedInput)
  );


  return (
    <>
    <div style={{margin:"15px",fontSize:"24px",fontWeight:"600"}}>My orders</div>
    <div><input style={{padding:'5px',margin:"15px",width:"29%",borderRadius:"5px"}} 
   type="text" value={inputValue}  onChange={(e) => setInputValue(e.target.value)} placeholder='Search order with orderID..' /></div>
    {filteredOrders.length===0 ? (<p>No orders found</p>):(
      filteredOrders && filteredOrders.map((order)=>(
        
        <div key={order.orderDate} style={{border:"1px solid gray",margin:"15px",background:"#f5f5f5",padding:"10px",borderRadius:"8px",width:"430px"}}>
           <p>Order ID: {order.orderDate}</p>
          <p>Order Date: {new Date(parseInt(order.orderDate)).toLocaleString()}</p>
          <p>Order Details: {order.diamondId} — {order.carat} ct, Shape: {order.shape}, Lab: {order.lab}</p>
          <p>Setting: {order.setting}</p>
          <p style={{color:"green"}}>Order Price: ${order.price}</p>
        </div>
      ))
    )}
    </>
  )
  }
      


export default MyOrders
