import { Link } from "react-router-dom";

export default function Country({ countryDetails, continent, countryFilter }) {
  if (continent !== "all" && continent !== countryDetails.region) return;
  if (
    countryFilter.toLowerCase() !==
    countryDetails.name.toLowerCase().substr(0, countryFilter.length)
  )
    return;
  return (
    <div className="country">
      <Link to={`/country/${countryDetails.name}`} state={{countryDetails}}>
        <img
          src={countryDetails.flags.png}
          alt={`${countryDetails.name} Flag`}
        />
      </Link>
      <div className="country-details">
        <h3>{countryDetails.name}</h3>
        <p>
          Population: <span>{countryDetails.population}</span>
        </p>
        <p>
          Region: <span>{countryDetails.region}</span>
        </p>
        <p>
          Capital: <span>{countryDetails.capital}</span>
        </p>
      </div>
    </div>
  );
}
