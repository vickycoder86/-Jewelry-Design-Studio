import React from "react";

const DiamondQuickViewModal = ({ diamond, onClose }) => {
  if (!diamond) return null;

  return (
    // Modal overlay
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose} // close if clicked outside
    >
      {/* Modal content */}
      <div
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        style={{
          width: "280px",
          background: "#fff",
          borderRadius: "10px",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          boxShadow: "0 3px 12px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            background: "transparent",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "700",
          }}
        >
          ×
        </button>

        {/* Diamond Info */}
        <img
          src={diamond.images}
          alt={diamond.shape}
          style={{
            width: "100%",
            height: "140px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <h2
          style={{
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
            margin: "4px 0",
          }}
        >
          {diamond.shape}
        </h2>
        <p style={{ fontSize: "13px", margin: "2px 0" }}>Carat: {diamond.carat} ct</p>
        <p style={{ fontSize: "13px", margin: "2px 0" }}>SKU: {diamond.id}</p>
        <p style={{ fontSize: "13px", margin: "2px 0" }}>Color: {diamond.color}</p>
        <p style={{ fontSize: "13px", margin: "2px 0" }}>Clarity: {diamond.clarity}</p>
        <p style={{ fontSize: "13px", margin: "2px 0" }}>Cut: {diamond.cut}</p>
        <p style={{ fontSize: "13px", margin: "2px 0" }}>Lab: {diamond.lab}</p>
        <p
          style={{
            fontWeight: "700",
            color: "#0b8a55",
            fontSize: "14px",
            margin: "4px 0",
          }}
        >
          AUD ${diamond.priceAUD}
        </p>
      </div>
    </div>
  );
};

export default DiamondQuickViewModal;
