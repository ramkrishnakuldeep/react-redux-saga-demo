import React from 'react';
import Item from '../Item';
import { item } from '../../propTypes';
import PropTypes from 'prop-types';
import './items.scss';

const ItemList = ({ items }) => {
    return (
        <div className={'items__container'}>
            {items.map((item) => <Item key={item.id} item={item} />)}
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(item))
};

ItemList.defaultProps = {
    items: []
};

export default ItemList;
