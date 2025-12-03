import React, { useContext } from 'react'
import { productContext } from '../context/MainContext';

const Cart = () => {
  const {cart, setCart} = useContext(productContext);




  return (
    <div>
      {cart.length === 0 ? (
        <div style={{textAlign: "center", marginTop: "50px", fontSize: "24px"}}>
          Your cart is empty.
        </div>
      ) : (
        <div>
          <h2 style={{textAlign: "center", margin: "20px 0"}}>My Cart-{cart.length} items</h2>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {cart.map((item) => ( 
              <div key={item.id} style={{border: "1px solid #ddd", padding: "10px", margin: "5px", width: "30%", borderRadius: "8px"}}>
                <h3>{item.shape} - {item.carat} ct</h3>
                <img src={item.images} alt={item.shape} style={{width: "100px", height: "100px",marginTop:"-15px"}} />
                <p style={{fontWeight:"bold",color:"blueviolet"}}>Price: ${item.priceAUD} AUD</p>
                <button
                  onClick={() => {
                    setCart(cart.filter(cartItem => cartItem.id !== item.id));  
                  }}
                  style={{
                    padding: "8px 50px",
                    backgroundColor: "#e3342f",   
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",  
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
