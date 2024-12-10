import React from 'react';
import './styleheader.css';
import { Link } from "react-router-dom";

function Headercom() {
  return (
    <header className='header'>
        <h1 className='title'>Welcome</h1>
        <nav>
            <ul className='link-list'>
            <li>
                <Link className='link' to='/'>Hemo</Link>
            </li>
            <li>
                <Link className='link' to='/formularios'>Datos</Link>
            </li>
            </ul>
        </nav>
    </header>
    
  )
}

export default Headercom