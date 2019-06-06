import {
    GET_ITEMS,
    GET_ITEM_DETAILS,
    GET_CATEGORIES,
    ITEM_CATEGORIES_RECEIVED,
    ITEMS_RECEIVED,
    ITEM_DETAILS_RECEIVED,
    FILTER_CATEGORY
} from '../actions/actions';

const initialState = {
    items: [],
    itemDetails: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state, loading: true };
        case ITEMS_RECEIVED:
            return { ...state, items: action.payload, loading: false };
        case GET_ITEM_DETAILS:
            return { ...state, loading: true };
        case ITEM_DETAILS_RECEIVED:
            return { ...state, itemDetails: action.payload, loading: false };
        case GET_CATEGORIES:
            return { ...state, loading: true };
        case ITEM_CATEGORIES_RECEIVED:
            return { ...state, categories: action.payload, loading: false };
        case FILTER_CATEGORY:
            return { ...state, filterBy: action.filterId, loading: false };
        default:
            return state;
    }
};

export default reducer;
