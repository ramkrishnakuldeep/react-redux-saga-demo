import {
    GET_ITEMS,
    GET_ITEM_DETAILS,
    GET_CATEGORIES,
    ITEM_CATEGORIES_RECEIVED,
    ITEMS_RECEIVED,
    ITEM_DETAILS_RECEIVED,
    FILTER_CATEGORY
} from './actions';

export const getItemsAction = () => ({
    type: GET_ITEMS
});

export const getItemsDetailsAction = (id) => ({
    type: GET_ITEM_DETAILS,
    id
});

export const getCategoriesAction = () => ({
    type: GET_CATEGORIES
});

export const itemsReceived = () => ({
    type: ITEMS_RECEIVED
});

export const itemsDetailsReceived = () => ({
    type: ITEM_DETAILS_RECEIVED
});

export const categoriesReceived = () => ({
    type: ITEM_CATEGORIES_RECEIVED
});

export const filterCategory = (filterId) => ({
    type: FILTER_CATEGORY,
    filterId
});
