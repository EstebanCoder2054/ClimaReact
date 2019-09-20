import React from 'react';

function Header(props){
    return(
        <nav>
            <div className="nav-wrapper #f57c00 orange darken-2">
                <a href="#!" className="brand-logo"> {props.titulo} </a>
            </div>
        </nav>    
    )   
}

export default Header;