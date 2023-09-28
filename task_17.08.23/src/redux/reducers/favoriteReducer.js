import { ADD_REMOVE_FAVORITE } from "../actions/favoriteActions";


const favoriteData = JSON.parse(localStorage.getItem('favorites'))

function favoriteReducer(state = favoriteData || [], action = {}) {
    switch (action.type) {
        case ADD_REMOVE_FAVORITE:
            const isIn = state.find((item) => item.id == action.payload.id);
            if (isIn) {

                const newFavorites = state.filter(
                    (item) => item.id !== action.payload.id
                );

                localStorage.setItem("favorites", JSON.stringify(newFavorites));
                return newFavorites;

            } else {

                const newFavorites = [...state, action.payload];

                localStorage.setItem("favorites", JSON.stringify(newFavorites));
                return newFavorites;

            }


        default:
            return state;
    }
}
export default favoriteReducer