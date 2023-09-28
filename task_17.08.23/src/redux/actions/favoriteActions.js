export const DELETE_FAVORITE = "DELETE_FAVORITE"

export const ADD_REMOVE_FAVORITE = "ADD_FAVORITE"


export const addRemoveFavorite =
    item => ({
        type: ADD_REMOVE_FAVORITE,
        payload:
            item
    });
