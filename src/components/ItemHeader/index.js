import React from 'react';
import PropTypes from 'prop-types';
import { item } from '../../propTypes';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './item_header.scss';

const ItemHeader = ({ item }) => {
    return (
        <header className="item_header">
            <Link to={'/'}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <span className="name"> {item.name} </span>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faShoppingCart} />
        </header>
    );
};

ItemHeader.defaultProps = {
    item: {}
};

ItemHeader.propTypes = {
    item: PropTypes.shape(item)
};

export default ItemHeader;
