

export const ADD_REMOVE_ITEM = "ADD_ITEM"

export const CLEAR_CART = "CLEAR_CART"

export const addRemoveCart =
    item => ({
        type: ADD_REMOVE_ITEM,
        payload:
            item
    });

export const clearCart =
    () => ({
        type: CLEAR_CART
    });

