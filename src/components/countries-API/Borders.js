import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json";

export default function Borders({ CountryBorders = [] }) {
  const borders = CountryBorders.map((border) =>
    data.find((country) => country.alpha3Code === border)
  );
  console.log(borders);
  return (
    <div className="borders">
      <div>Border Countries : </div>
      <div className="wrraper">
        {borders.map((border, index) => {
          return (
            <Link
              to={`/country/${border.name}`}
              state={{ countryDetails: border }}
              key={index}
            >
              <button className="border-button">{border.name}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
