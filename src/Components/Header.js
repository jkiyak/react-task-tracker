import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className = 'header'>
        <h1>{title}</h1>  
        <Button color='blue' text='Add' />
        </header>
          
        
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}
//CSS in JS
/*
const headingStyle = {
    backgroundColor: 'black',
    color: 'red'
}
*/

export default Header
