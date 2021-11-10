import React from "react";

import { BrowserRouter as Router, 
    Route,
    Switch,
    Link
  } from 'react-router-dom';

  import './Nav.css'

const Menu = () => {

    return (
        <div className = "nav" >
            <ul>
            <li><Link to="/" className="menu-text">Formulario</Link></li>
                <li><Link to="/list">Listar</Link></li>
            </ul>
        </div>

    );
}

export default Menu;