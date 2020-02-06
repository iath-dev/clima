import React from 'react';
import PropTypes from 'prop-types'

const ErrorMessage = ({ message }) => {
    return <p className="red darken-4 error">{message}</p>;
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
}
 
export default ErrorMessage;
