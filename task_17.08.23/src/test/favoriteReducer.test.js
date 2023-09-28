import favoriteReducer from '../redux/reducers/favoriteReducer'; // Import your reducer
import { ADD_REMOVE_FAVORITE } from '../redux/actions/favoriteActions'; // Import your action type


describe('favoriteReducer', () => {
    it('should return the initial state when no state is provided', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN_ACTION' }; // Use an unknown action to trigger the default case
        const newState = favoriteReducer(undefined, action);
        expect(newState).toEqual(initialState);
    });

    it('should handle ADD_REMOVE_FAVORITE action for adding an item to favorites', () => {
        const initialState = [];
        const action = {
            type: ADD_REMOVE_FAVORITE,
            payload: { id: 1, name: 'Example Item' }, // Your action payload
        };
        const newState = favoriteReducer(initialState, action);

        // Your expectations based on the reducer logic
        expect(newState).toEqual([action.payload]);
    });

    it('should handle ADD_REMOVE_FAVORITE action for removing an item from favorites', () => {
        const initialState = [{ id: 1, name: 'Example Item' }]; // Initial state with one item
        const action = {
            type: ADD_REMOVE_FAVORITE,
            payload: { id: 1, name: 'Example Item' }, // The same item as the initial state
        };
        const newState = favoriteReducer(initialState, action);

        // Your expectations based on the reducer logic
        expect(newState).toEqual([]);
    });
});
