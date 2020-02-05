import React from 'react';

const Form = () => {
    return ( 
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                />
                <label htmlFor="city">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select name="country" id="country">
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
