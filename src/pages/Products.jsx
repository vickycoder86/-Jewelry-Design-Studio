import React, { useState } from "react";
import Diamonds from "../data/Diamonds";
import DimandProdcutCard from "../components/DimandProdcutCard";
import Sidebar from "../components/Sidebar";
import DiamondQuickViewModal from "./DiamandQuickViews";

const Products = () => {
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [filteredDiamonds, setFilteredDiamonds] = useState(Diamonds);
  const [search, setSearch] = useState("");
  const [shapeFilter, setShapeFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [clarityFilter, setClarityFilter] = useState("");
  const [cutFilter, setCutFilter] = useState("");
  const [labFilter, setLabFilter] = useState("");
  const [quickShipFilter, setQuickShipFilter] = useState(false);

  // Search handler
  const handleSearch = (text) => {
    setSearch(text);
  };
  // Shape handler
  const handleShapeSelect = (shape) => {
    setShapeFilter(shape);

    if (shape === "All") {
      setFilteredDiamonds(Diamonds);
      return;
    }
  };
   // Color handler
  const handleColorSelect = (color) => {
    setColorFilter(color);

    if (color === "all") {
      setFilteredDiamonds(Diamonds);
      return;
    }
  };
  //clarity handler
  const handleClariatySelect = (clarity) => {
    setClarityFilter(clarity);

    if (clarity === "all") {
      setFilteredDiamonds(Diamonds);
      return;
    }
  };
  //cut handler

  const handleCutSelect = (cut) => {
    setCutFilter(cut);

    if (cut === "all") {
      setFilteredDiamonds(Diamonds);
      return;
    }
  };
//lab handler
  const handleLabSelect = (lab) => {
    setLabFilter(lab);
    if (lab === "all") {
      setFilteredDiamonds(Diamonds);
      return;
    }
  };
// Final filtering logic
  const finalFilteredData = Diamonds.filter((diamond) => {
    const matchSearch = diamond.id.toUpperCase().includes(search.toUpperCase());

    const matchShape =
      shapeFilter === "All" ||
      !shapeFilter ||
      diamond.shape.toLowerCase() === shapeFilter.toLowerCase();

    const matchColor =
      colorFilter === "all" ||
      !colorFilter ||
      diamond.color.toLowerCase() === colorFilter.toLowerCase();

    const matchClarity =
      clarityFilter === "all" ||
      !clarityFilter ||
      diamond.clarity.toLowerCase() === clarityFilter.toLowerCase();

    const matchCut =
      cutFilter === "all" ||
      !cutFilter ||
      diamond.cut.toLowerCase() === cutFilter.toLowerCase();

    const matchLab =
      labFilter === "all" ||
      !labFilter ||
      diamond.lab.toLowerCase() === labFilter.toLowerCase();

    const matchQuickShip = !quickShipFilter || diamond.quickShip === true;

    return (
      matchSearch &&
      matchShape &&
      matchColor &&
      matchClarity &&
      matchCut &&
      matchLab &&
      matchQuickShip
    );
  });

  return (
    <>
      <h1>Diamond Products</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Sidebar
          onSearch={handleSearch}
          onShapeSelect={handleShapeSelect}
          oncolorSelect={handleColorSelect}
          onClariatySelect={handleClariatySelect}
          onCutSelect={handleCutSelect}
          onLabSelect={handleLabSelect}
          onQuickShipToggle={setQuickShipFilter}
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          <div>Found:{finalFilteredData.length}</div>

          {finalFilteredData &&
            finalFilteredData.map((diamond) => (
              <DimandProdcutCard
                key={diamond.id}
                diamond={diamond}
                onQuickView={setSelectedDiamond} // Pass function to open modal
              />
            ))}
        </div>
      </div>

      {/* Modal rendered on top of page */}
      {selectedDiamond && (
        <DiamondQuickViewModal
          diamond={selectedDiamond}
          onClose={() => setSelectedDiamond(null)} // Close modal
        />
      )}
    </>
  );
};

export default Products;
