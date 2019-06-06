import React from 'react';
import { itemDetails } from '../../propTypes';
import SoldOut from '../Item/SoldOut';
import './item_details.scss';
import ItemHeader from '../ItemHeader';
import ItemFooter from '../ItemFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const ItemDetail = ({ itemDetails }) => {
    return (
        <React.Fragment>
            <ItemHeader item={itemDetails} />
            <div className="item-details">
                <div className="item-img">
                    <img src={itemDetails.image} />
                    {
                        itemDetails.is_sold_out && <SoldOut />
                    }
                </div>
                <div className="details">
                    <div className="name"> {itemDetails.name} </div>
                    <div>
                        <span className="likes">
                            <FontAwesomeIcon icon={faHeart} />
                            Liked count
                        </span>
                        {itemDetails.like_count}
                    </div>
                    <div className="description"> {itemDetails.description} </div>
                </div>
            </div>
            <ItemFooter item={itemDetails} />
        </React.Fragment>
    );
};

ItemDetail.propTypes = { itemDetails };

ItemDetail.defaultProps = {
    itemDetails: {}
};

export default ItemDetail;
