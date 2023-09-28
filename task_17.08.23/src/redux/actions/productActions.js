export const LOAD_PRODUCTS_START = "LOAD_PRODUCTS_START"
export const LOAD_PRODUCTS_ERROR = "LOAD_PRODUCTS_ERROR"
export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS"


export const loadProductsStart = () => ({
    type: LOAD_PRODUCTS_START
});
export const loadProductsSuccess =
    products => ({
        type: LOAD_PRODUCTS_SUCCESS,
        payload:
            products
    });
export const loadProductsError = () => ({
    type: LOAD_PRODUCTS_ERROR
});