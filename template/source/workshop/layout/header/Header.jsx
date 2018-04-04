import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header className="header">
        <div className="header__wrapper">
          <div className="header__item">
            {/* TODO: Logo */}
          </div>  
          <div className="header__item">
            {/* TODO: MENU */}
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
              </ul>
            </nav>
          </div>
        </div>
			</header>
		);
	}
}

export default Header;
