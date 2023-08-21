import { combineReducers } from "redux";
import productReducer from "./productReducers";
import cartReducer from "./cartReducer";
import favoriteReducer from "./favoriteReducer";
import modalReducer from "./modalReducer";

const reducers = combineReducers(
    {
        products: productReducer,
        cart: cartReducer,
        favorites: favoriteReducer,
        modal: modalReducer
    }
);

export default reducers; 