import React from 'react';
import logo from '../assets/images/argentBankLogo.png'
import {Link} from 'react-router-dom'
import { PersonCircle } from 'react-bootstrap-icons'


const Header = () => {
    return (
      
        <nav class="main-nav">
        <Link to='/'>
          <img
            class="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        
          <h1 class="sr-only">Argent Bank</h1>
          </Link>
        <div className= 'signIn-container'>

          <Link to='/signIn' class="main-nav-item">
            <PersonCircle className='icon-person'/>
            Sign In
          </Link>
        </div>
      </nav>
   
    );
};

export default Header;