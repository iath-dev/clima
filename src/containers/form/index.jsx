import React from 'react';
import { formDefault } from '../../constants/docs';

const Form = () => {

    const [data, setData] = React.useState(formDefault);
    const { city, country } = data;

    const handleChanges = (event) => {
        const { value, name } = event.target;
        setData({ ...data, [name]: value });
    }

    return ( 
        <form>
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
                    <option value="">--Selecione un Pais--</option>
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
        </form>
     );
}
 
export default Form;
