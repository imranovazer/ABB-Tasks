import { ADD_REMOVE_ITEM } from "../actions/cartActions";


const cartData = JSON.parse(localStorage.getItem('cart'))

function cartReducer(state = cartData || [], action = {}) {
    switch (action.type) {
        case ADD_REMOVE_ITEM:
            const isIn = state.find((item) => item.id == action.payload.id);
            if (isIn) {

                const newCart = state.filter(
                    (item) => item.id !== action.payload.id
                );

                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;

            } else {

                const newCart = [...state, action.payload];

                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;

            }



        default:
            return state;
    }
}
export default cartReducer