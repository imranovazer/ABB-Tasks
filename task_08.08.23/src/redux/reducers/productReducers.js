import { LOAD_PRODUCTS_ERROR, LOAD_PRODUCTS_START, LOAD_PRODUCTS_SUCCESS, loadProductsError, loadProductsStart, loadProductsSuccess } from "../actions/productActions";


function productReducer(state = {
    loading: false,
    error: null,
    data: null
}, action = {}) {
    switch (action.type) {
        case LOAD_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false, error: true
            };
        case LOAD_PRODUCTS_START:
            return {
                ...state,
                loading: true, error: false
            };
        case LOAD_PRODUCTS_SUCCESS:

            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state;
    }
}





export const loadProducts = () =>
    async dispatch => {
        dispatch(loadProductsStart());
        try {
            const res = await fetch('./data.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const fetchedData = await res.json();

            dispatch(loadProductsSuccess(fetchedData.products))
        } catch (error) {
            dispatch(loadProductsError());
        }
    }

export default productReducer;