import React, { useState } from "react";
import Diamonds from "../data/Diamonds";

const Sidebar = ({
  onSearch,
  onShapeSelect,
  oncolorSelect,
  onClariatySelect,
  onCutSelect,
  onLabSelect,
  onQuickShipToggle,
}) => {
  const [searchText, setSearchText] = useState("");
  const [shapeFilter, setShapeFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [clarityFilter, setClarityFilter] = useState("");
  const [cutFilter, setCutFilter] = useState("");
  const [labFilter, setLabFilter] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (onSearch) onSearch(value);
  };

  const handleShapeClick = (shape) => () => {
    setShapeFilter(shape);
    if (onShapeSelect) onShapeSelect(shape);
  };

  const handleColorClick = (e) => {
    setColorFilter(e.target.value);
    if (oncolorSelect) oncolorSelect(e.target.value);
  };

  const handleClariatyClick = (e) => {
    setClarityFilter(e.target.value);
    if (onClariatySelect) onClariatySelect(e.target.value);
  };

  const handleCutClick = (e) => {
    setCutFilter(e.target.value);
    if (onCutSelect) onCutSelect(e.target.value);
  };

  const handleLabClick = (e) => {
    setLabFilter(e.target.value);
    if (onLabSelect) onLabSelect(e.target.value);
  };
  const handleQuickShipToggle = (e) => {
    if (onQuickShipToggle) onQuickShipToggle(e.target.checked);
  }

  return (
    <div
      style={{
        width: "210px",
        padding: "14px",
        background: "#ffffff",
        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {/* Search */}
      <div>
        <h5
          style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "3px",
            marginTop: "5px",
          }}
        >
          Search
        </h5>

        <input
          type="text"
          placeholder="e.g AUD1234"
          style={{
            width: "100%",
            padding: "5px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "13px",
            outline: "none",
          }}
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>

      {/* Shape */}
      <div>
        <h5
          style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "5px",
            marginTop: "4px",
          }}
        >
          Shape
        </h5>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
          }}
        >
          {["All", "Emerald", "Princess", "Round", "Marquise"].map((shape) => (
            <button
              key={shape}
              onClick={handleShapeClick(shape)}
              style={{
                padding: "6px 8px",
                borderRadius: "8px",
                border: "1px solid #bbb",
                background: shapeFilter === shape ? "#2563eb" : "#f3f3f3",
                color: shapeFilter === shape ? "#fff" : "#000",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              {shape}
            </button>
          ))}
        </div>
      </div>

      {/* Carat */}
      <div>
        <h5
          style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "5px",
          }}
        >
          Carat
        </h5>

        <div style={{ display: "flex", gap: "4px" }}>
          <input
            type="number"
            min={0}
            max={5}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "13px",
            }}
          />

          <input
            type="number"
            min={0}
            max={5}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "13px",
            }}
          />
        </div>
      </div>

      {/* Color */}
      <div>
        <h5
          style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "5px",
          }}
        >
          Color
        </h5>

        <select
          value={colorFilter}
          onChange={handleColorClick}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "13px",
          }}
        >
          <option value="all">Any</option>
          <option value="J">J</option>
          <option value="F">F</option>
          <option value="H">H</option>
        </select>
      </div>

      {/* Clarity */}
      <div>
        <h5
          style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "2px",
          }}
        >
          Clarity
        </h5>

        <select
          value={clarityFilter}
          onChange={handleClariatyClick}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "13px",
          }}
        >
          <option value="all">Any</option>
          <option value="VVS2">VVS2</option>
          <option value="FL">FL</option>
          <option value="IF">IF</option>
          <option value="SI1">SI1</option>
        </select>
      </div>

      {/* Cut */}
      <div>
        <h5
          style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "5px",
          }}
        >
          Cut
        </h5>

        <select
          value={cutFilter}
          onChange={handleCutClick}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "13px",
          }}
        >
          <option value="all">Any</option>
          <option value="Good">Good</option>
          <option value="Excellent">Excellent</option>
          <option value="Very Good">Very Good</option>
        </select>
      </div>

      {/* Labs */}
      <div>
        <h5
          style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "5px",
          }}
        >
          Labs
        </h5>

        <select
          value={labFilter}
          onChange={handleLabClick}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "13px",
          }}
        >
          <option value="all">Any</option>
          <option value="IGI">IGI</option>
          <option value="GIA">GIA</option>
          <option value="AGS">AGS</option>
        </select>

        <div style={{ marginTop: "6px" }}>
          <input type="checkbox" onChange={handleQuickShipToggle} />
          <label style={{ marginLeft: "4px", fontSize: "13px" }}>
            Quick Ship only
          </label>
        </div>

        <button
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "8px",
            background: "#e53935",
            color: "white",
            border: "none",
            marginTop: "8px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
