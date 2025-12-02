import React from "react";
import Diamonds from "../data/Diamonds";
import { useParams, useNavigate } from "react-router-dom";

const DiamondDesign = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const diamond = Diamonds.find((d) => d.id === id);

  if (!diamond) return <p>Diamond not found</p>;


 const handleSelectSetting = (settingName) => {
  const selectedData = {
    diamondId: diamond.id,
    carat: diamond.carat,
    price: diamond.priceAUD,
    shape: diamond.shape,
    color: diamond.color,
    clarity: diamond.clarity,
    cut: diamond.cut,
    lab: diamond.lab,
    setting: settingName,
    image: diamond.images,
  };

  localStorage.setItem("selectedDiamond", JSON.stringify(selectedData));
  navigate("/summary");
};

const handleSelectSkipSetting = () => {
  const selectedData = {
    diamondId: diamond.id,
    carat: diamond.carat,
    price: diamond.priceAUD,
    shape: diamond.shape,
    color: diamond.color,
    clarity: diamond.clarity,
    cut: diamond.cut,
    lab: diamond.lab,
    setting: "No setting chosen",
    image: diamond.images,
  };

  localStorage.setItem("selectedDiamond", JSON.stringify(selectedData));
  navigate("/summary");
};


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        background: "#f9f9f9",
        minHeight: "100vh",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          width: "80%",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          overflow: "hidden",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          height: "100%",
        }}
      >
      
        <div style={{ width: "100%", height: "250px", overflow: "hidden" }}>
          <img
            src={diamond.images}
            alt={diamond.shape}
            style={{
              width: "80%",
              height: "80%",
              objectFit: "cover",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

     
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: 0, color: "#333" }}>{diamond.id}</h2>
          <p style={{ margin: 0, fontWeight: "500" }}>
            Shape: <span style={{ fontWeight: "400" }}>{diamond.shape}</span>
          </p>
          <p style={{ margin: 0, fontWeight: "500" }}>
            Carat: <span style={{ fontWeight: "400" }}>{diamond.carat}</span>
          </p>
          <p style={{ margin: 0, fontWeight: "500" }}>
            Color: <span style={{ fontWeight: "400" }}>{diamond.color}</span>
          </p>
          <p style={{ margin: 0, fontWeight: "500" }}>
            Clarity: <span style={{ fontWeight: "400" }}>{diamond.clarity}</span>
          </p>
          <p style={{ margin: 0, fontWeight: "500" }}>
            Cut: <span style={{ fontWeight: "400" }}>{diamond.cut}</span>
          </p>
          <p style={{ margin: 0, fontWeight: "500" }}>
            Lab: <span style={{ fontWeight: "400" }}>{diamond.lab}</span>
          </p>
          <p style={{ margin: 0, fontWeight: "600", fontSize: "18px", color: "#10b981" }}>
            Price: ${diamond.priceAUD} AUD
          </p>

          
        </div>
      </div>

      
      <div style={{ maxWidth: "400px", width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>
          Choose a Setting for {diamond.id} ({diamond.carat} ct)
        </h3>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["Solitaire", "Halo", "Three-Stone", "Bezel"].map((shape) => (
            <button
              key={shape}
              onClick={() => handleSelectSetting(shape)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid #bbb",
                background: "#f3f3f3",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "500",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e5e7eb")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f3f3f3")}
            >
              {shape}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              background: "#f3f4f6",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Back
          </button>
          <button
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: "#10b981",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onClick={handleSelectSkipSetting}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#059669")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#10b981")}
          >
            Skip & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiamondDesign;
