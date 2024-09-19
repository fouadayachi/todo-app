import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import Borders from "./Borders";

export default function CountryDetails() {
  const { name } = useParams();
  const location = useLocation();
  const { countryDetails } = location.state || {};
  const languages = countryDetails.languages && countryDetails.languages.map(language => language.name).join(",");
  const currencies = countryDetails.currencies && countryDetails.currencies.map(currency => currency.code).join(",");
  if (!countryDetails) {
    return <h2>Country not found</h2>;
  }
  return (
    <div className="country-main">
      <Link to={"/"}>
        <button className="back-button">
          {<FaArrowLeft />} <span>Back</span>
        </button>
      </Link>

      <div className="country-info">
        <div className="country-flag" style={{backgroundImage : `url(${countryDetails.flag})`}}>
        </div>
        <div className="information">
          <div className="country-name">
            <h3>{name}</h3>
          </div>
          <div className="country-information">
            <div className="left">
              <div>
                Native Name : <span>{countryDetails.nativeName}</span>
              </div>
              <div>
                Population : <span>{countryDetails.population}</span>
              </div>
              <div>
                Region : <span>{countryDetails.region}</span>
              </div>
              <div>
                Subregion : <span>{countryDetails.subregion}</span>
              </div>
              <div>
                Capital : <span>{countryDetails.capital}</span>
              </div>
            </div>
            <div className="right">
              <div>Top Level Domain : <span>{countryDetails.topLevelDomain[0]}</span></div>
              <div>Currencies : <span>{currencies}</span></div>
              <div>Languages : <span>{languages}</span></div>

            </div>
          </div>
          <div className="country-borders">
            <div>{<Borders CountryBorders={countryDetails.borders && countryDetails.borders.slice(0,3)} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
