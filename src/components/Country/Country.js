import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    // console.log(props)
    return (
        <div className="country-style">
            <div className="flag-style">
                <img src={flag} alt=""/>
            </div>
            <div className="detils-style">
                <h3>This is a : {name}</h3>
                <p>Population : {population}</p>
                <p><small>Region : {region}</small></p>
                <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;