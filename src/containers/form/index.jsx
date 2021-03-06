import React from 'react';
import { Error } from '..';
import PropTypes from 'prop-types'

const Form = ({ data, setData, setConsult }) => {

    const [error, setError] = React.useState(false);
    const { city, country } = data;

    const handleChanges = (event) => {
        const { value, name } = event.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        setConsult(true);

    }

    return ( 
        <form onSubmit={handleSubmit}>
            { error && <Error message="Todos los campos deben de ser diligenciados" /> }
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChanges}
                />
                <label htmlFor="city">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChanges}
                >
                    <option value="">--Seleccioné un País--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Pais:</label>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}

Form.propTypes = {
    data: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    }).isRequired,
    setData: PropTypes.func.isRequired,
    setConsult: PropTypes.func.isRequired,
}

export default Form;
