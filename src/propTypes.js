import PropTypes from 'prop-types';

export const item = {
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    like_count: PropTypes.number,
    comment_count: PropTypes.number,
    price: PropTypes.number,
    is_sold_out: PropTypes.bool,
    shipping_fee: PropTypes.string,
    image: PropTypes.string,
    category_id: PropTypes.number
};

export const category = {
    id: PropTypes.string,
    name: PropTypes.string
};

export const CategoryProps = {
    categories: PropTypes.arrayOf(PropTypes.shape(category)),
    filterBy: PropTypes.number,
    getCategoriesData: PropTypes.func,
    filterCategory: PropTypes.func
};

export const ItemListProps = {
    items: PropTypes.arrayOf(PropTypes.shape(item)),
    filterBy: PropTypes.number,
    getItemsData: PropTypes.func
};

export const itemDetails = PropTypes.shape(item);

export const ItemDetailProps = {
    id: PropTypes.string,
    itemDetails: itemDetails,
    getItemsDetailsAction: PropTypes.func
};
