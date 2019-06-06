import React from 'react';
import { itemDetails } from '../../propTypes';
import './item_footer.scss';

const ItemFooter = ({ item }) => {
    return (
        <footer>
            <div>
                <span className="price"> &#165; {item.price} </span>
                <span> { item.shipping_fee} </span>
            </div>
            <div>
                <button className="add_to_cart">
                    Add to cart
                </button>
            </div>
        </footer>
    );
};

ItemFooter.defaultProps = {
    item: {}
};

ItemFooter.propTypes = { item: itemDetails };

export default ItemFooter;
