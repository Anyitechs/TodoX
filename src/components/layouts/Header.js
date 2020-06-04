import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>
            <header style={headerStyle}>
            <h3>TodoList App</h3>
            <Link to="/" style={linkStyle}>Home</Link>  
            <Link to="/about" 
                style={linkStyle}>About</Link>
            </header>
        </React.Fragment>
    )
}

const headerStyle = {
    backgroundColor: '#282c34',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
}

const linkStyle = {
    // marginLeft: '60rem',
    // position: 'relative',
    // bottom: '3rem',
    color: 'white'
}

export default Header;