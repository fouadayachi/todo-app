import Filter from "./Filter";
import Search from "./Search";


export default function FilterSection({filterCountries,filterCountriesByName,countryFilter,continent}){

    return (
        <div className="filter-section">
            <Search filterCountriesByName={filterCountriesByName} countryFilter={countryFilter}/> 
            <Filter filterCountries={filterCountries} continent={continent}/>
        </div>
    )

}