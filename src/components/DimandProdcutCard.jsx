import React from "react";

const DimandProdcutCard = ({ diamond, onQuickView }) => {
  return (
    <div
      style={{
        width: "220px",
        height: "400px",
        background: "#fff",
        padding: "16px",
        borderRadius: "16px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
      }}
    >
      <img
        src={diamond.images}
        alt={diamond.shape}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "12px",
          
        }}
      />
      <h2
        style={{
          fontSize: "16px",
          fontWeight: "700",
          textAlign: "center",
          color: "#111827",
          margin: "4px 0",
        }}
      >
        {diamond.shape}
      </h2>
      <p style={{ fontSize: "13px", color: "#4b5563", margin: "2px 0" }}>
        Carat: <strong>{diamond.carat} ct</strong>
      </p>
      <p style={{ fontSize: "13px", color: "#4b5563", margin: "2px 0" }}>
        SKU: <strong>{diamond.id}</strong>
      </p>
      <p
        style={{
          fontSize: "14px",
          fontWeight: "700",
          color: "#0b8a55",
          margin: "4px 0",
          textAlign: "center",
        }}
      >
        AUD ${diamond.priceAUD}
      </p>

      <button
        onClick={() => onQuickView(diamond)}
        style={{
          padding: "8px",
          borderRadius: "10px",
          background: "#2563eb",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "600",
          border: "none",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#1e40af")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
      >
        Quick View
      </button>

      <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
        <button
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "10px",
            background: "#10b981",
            color: "#fff",
            border: "none",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#059669")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#10b981")}
        >
          Add to Cart
        </button>
        <button
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "10px",
            background: "#f3f4f6",
            color: "#111827",
            border: "1px solid #d1d5db",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#111827";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f3f4f6";
            e.currentTarget.style.color = "#111827";
          }}
        >
          Add to Compare
        </button>
      </div>
    </div>
  );
};

export default DimandProdcutCard;
