import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCheck } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

const Header = ({}) => {
    return (
        <header className="app_header">
            <FontAwesomeIcon icon={faBars} />
            <input type="text" />
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCheck} />
        </header>
    );
};

export default Header;
