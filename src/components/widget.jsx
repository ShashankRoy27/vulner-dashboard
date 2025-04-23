// src/components/Widget.jsx
import React, { useState } from "react";
import Card from "./card";
import Model from "./model";

const Widget = ({ category, addWidget, removeWidget, isSearching }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  // Updated to handle widget type
  const handleSaveWidget = (widgetName, widgetType, widgetData) => {
    addWidget(category.name, widgetName, widgetType, widgetData);
  };
  
  
  const widgetCards = category.widgets.map((widget) => (
    <Card
      key={widget.id}
      widget={widget}
      onRemove={() => removeWidget(category.name, widget.id)}
    />
  ));

  // Only calculate empty cards if not searching
  const remainder = widgetCards.length % 3;
  const emptyCount = !isSearching && remainder !== 0 ? 3 - remainder : 0;

  const emptyCards = Array.from({ length: emptyCount }).map((_, idx) => (
    <Card key={`empty-${idx}`} isEmpty={idx === 0} onAdd={handleModalOpen} />
  ));

  return (
    <>
      <div className="category">
        <h2>{category.name}</h2>
        <div className="widgets-grid">
          {widgetCards}
          {emptyCards}
        </div>
      </div>

      {showModal && (
        <Model onClose={handleModalClose} onSave={handleSaveWidget} />
      )}

      <style>{`
        .category {
          margin-bottom: 2rem;
        }

        .widgets-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 1rem;
          max-width: 100%;
        }
      `}</style>
    </>
  );
};

export default Widget;
