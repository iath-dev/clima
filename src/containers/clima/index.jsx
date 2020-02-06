import React from 'react';
import PropTypes from 'prop-types'

const Clima = ({ result }) => {

    const { name, main } = result;

    if (!name || !main) {
        return null;
    }

    const toKelvin = (temp = 273.1) => {
        return Number(temp - 273.1).toFixed(2);
    }

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {toKelvin(main.temp)} <span> &#x2103; </span>
                </p>
                <p>
                    Temperatura Máxima: {toKelvin(main.temp_max)} <span> &#x2103; </span>
                </p>
                <p>
                    Temperatura Minima: {toKelvin(main.temp_min)} <span> &#x2103; </span>
                </p>
            </div>
        </div>
     );
}

Clima.propTypes = {
    result: PropTypes.object.isRequired,
}

export default Clima;
