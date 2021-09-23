import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR3OBkU2LxWWbp58v9r5oE0ve7XgdnomE2baUH1xDv6gzrjvXzU1KO4ju8g')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hello From Countries:{countries.length}</h1>
            <div className='country-container'>
                {
                    countries.map(country => <Country
                        key={country.alpha3Code}
                        name={country.name}
                        capital={country.capital}
                        alpha3Code={country.alpha3Code}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;