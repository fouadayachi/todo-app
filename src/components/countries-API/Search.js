import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search({filterCountriesByName,countryFilter}) {

  return (
    <div className="search">
      <div className="search-button">
            <FaSearch />
        </div>  
      <input
        type="text"
        value={countryFilter}
        onChange={(e) => {filterCountriesByName(e.target.value)}}
        placeholder="Search for a country..."
      />
    </div>
  );
}
