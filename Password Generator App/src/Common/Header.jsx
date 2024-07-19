import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
        <nav>
            <ul className='nav-link'>
                <li> <Link to={'/'}>Home</Link></li>
                <li><Link to={'/About'}>About</Link></li>
                <li> <Link to={'/Course'}>Course</Link></li>
            </ul>
        </nav>
    </div>
  )
}
