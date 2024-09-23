import React, { useState } from "react";
import data from "./data.json";
import Header from "./header";
import "./Style.css";
import Country from "./Country";
import FilterSection from "./Filter-inputs";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./CountryDetails";
import useLocalStorage from "./useLocalStorage";

export default function Countries() {
  const [mode, setMode] = useLocalStorage("mode","Dark");
  const [continent, setContinent] = useState("all");
  const [countryFilter, setCountryFilter] = useState("");

  function changeMode() {
    setMode(mode === "Dark" ? "Light" : "Dark");
  }

  function filterCountries(continent) {
    setContinent(continent);
  }

  function filterCountriesByName(countryFilter) {
    setCountryFilter(countryFilter);
  }

  return (
    <div className={`container ${mode}`}>
      <Header mode={mode} changeMode={changeMode} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FilterSection
                filterCountries={filterCountries}
                filterCountriesByName={filterCountriesByName}
                countryFilter={countryFilter}
                continent={continent}
              />
              <div className="content">
                <div className="countries-list">
                  {data.map((country,index) => (
                    <Country key={index}
                      countryDetails={country}
                      continent={continent}
                      countryFilter={countryFilter}
                    />
                  ))}
                </div>
              </div>
            </>
          }
        />

        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}
