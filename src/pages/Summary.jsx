import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();
  const [diamondsData, setDiamondData] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("selectedDiamond");
    if (saved) {
      const diamondData = JSON.parse(saved);
      setDiamondData(diamondData);
    }
  }, []);

  const Checkout = () => {

  const orders = {
    orderDate: Date.now().toString(),
    ...diamondsData 
  };

 
  const existingOrders = JSON.parse(localStorage.getItem("finalOrder")) || [];

 
  const finalOrder = [...existingOrders, orders];

  
  localStorage.setItem("finalOrder", JSON.stringify(finalOrder));

  alert(`order is placed sucessfully with oreder no ${orders.orderDate}`);

  navigate("/myorders");
};

  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
        gap: "30px",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
     
      <div
        style={{
          
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <h5 style={{ marginTop: 0 }}>Summary Page</h5>

        {diamondsData ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <img
              src={diamondsData.image}
              alt={diamondsData.shape}
              style={{
                width: "80%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h2 style={{ margin: "10px 0 5px" }}>Selected Diamond Details:</h2>

            <p style={{ fontWeight: "bold" }}>
              {diamondsData.diamondId} — {diamondsData.carat} ct
            </p>
              
            <p>
              Shape: {diamondsData.shape} • Lab: {diamondsData.lab}
            </p>

            <p style={{ fontSize: "16px", fontWeight: "600", color: "#10b981" }}>
              Price: AUD ${diamondsData.price}
            </p>
          </div>
        ) : (
          <p>No diamond data available.</p>
        )}
      </div>

     
      <div
        style={{
          width: "300px",
          height: "fit-content",
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Selected Setting:</h2>
        <p style={{ fontSize: "16px",color:"blue" }}>{diamondsData?.setting}</p>
      

      
      </div>
      
    </div>
    <div style={{ display: "flex",  gap: "10px",justifyContent: "center", marginBottom: "30px" }}>
        <button
        onClick={() => navigate(-1)}
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "1px solid #aaa",
            background: "#f2f2f2",
            cursor: "pointer",
            width: "200px",
          }}
        >
          Back
        </button>

        <button
        onClick={Checkout}
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            background: "#10b981",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
            width: "200px",
          }}
        >
          Checkout
        </button>
      </div>
      </>
  );
};

export default Summary;
