import '../App.css';
import React from 'react';
import {HashRouter} from 'react-router-dom'
import routes from '../routes'
import {Link} from 'react-router-dom'

export default function Header (){
    return(
        <HashRouter>
        <div>
          <nav className='nav'>
            <div>LeagueDraftNotes</div> 
            <div className='link-wrap'>
                <Link to="/" className='links'>Champ Select</Link>
                <Link to="/about" className='links'>About</Link> 
                <Link to='/login' className='links'>Login</Link>
            </div>
          </nav>
          {routes}
        </div>
        </HashRouter>
    )
}