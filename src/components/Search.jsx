import React, { useState } from "react";
import "../styles/searchForm.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        placeholder="Rechercher par nom"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
