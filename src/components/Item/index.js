import React from 'react';
import { Link } from 'react-router-dom';
// import SoldOut from './soldOut';
import './details.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { itemDetails } from '../../propTypes';
import SoldOut from './soldOut';

const Item = ({ item }) => {
    return (
        <React.Fragment>
            <Link to={`/items/${item.id}`} style={{ textDecoration: 'none' }}>
                <div className="item">
                    <div className="item-img">
                        <img src={item.image} />
                        {
                            item.is_sold_out &&
                            <SoldOut />
                            // <div className="sold-out">
                            //     <div className="triangle"> </div>
                            //     <span> SOLD </span>
                            // </div>
                        }
                    </div>
                    <div className="item-detail">
                        <div> {item.name} </div>
                        <div className="item-price">
                            <span> 	&#165; {item.price} </span>
                            <span>
                                <FontAwesomeIcon icon={faHeart} />
                                <span> {item.like_count} </span>
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    );
};

Item.propTypes = { item: itemDetails };

export default Item;
