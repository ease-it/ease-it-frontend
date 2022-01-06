import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    return (
        <>
            <button className="primary-color-yellow hidden py-3 
            shadow-lg sm:px-4 text-white text-lg 
            rounded-2xl font-extrabold">
            SignUp?Login</button>
        </>
           
    )
}

Button.propTypes = {
    children:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired
}

export default Button
