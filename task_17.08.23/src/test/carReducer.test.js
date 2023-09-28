// cartReducer.test.js
import cartReducer from '../redux/reducers/cartReducer';

import { ADD_REMOVE_ITEM, CLEAR_CART } from '../redux/actions/cartActions';

describe('cartReducer', () => {
    it('should add an item to the cart', () => {
        const initialState = [];
        const action = {
            type: ADD_REMOVE_ITEM,
            payload: { id: 1, name: 'Item 1' },
        };
        const newState = cartReducer(initialState, action);

        expect(newState).toEqual([{ id: 1, name: 'Item 1' }]);
    });

    it('should remove an item from the cart', () => {
        const initialState = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
        const action = {
            type: ADD_REMOVE_ITEM,
            payload: { id: 1 },
        };
        const newState = cartReducer(initialState, action);

        expect(newState).toEqual([{ id: 2, name: 'Item 2' }]);
    });

    it('should clear the cart', () => {
        const initialState = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
        const action = {
            type: CLEAR_CART,
        };
        const newState = cartReducer(initialState, action);

        expect(newState).toEqual([]);
    });

    it('should handle unknown actions and return the state unchanged', () => {
        const initialState = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
        const action = {
            type: 'UNKNOWN_ACTION',
        };
        const newState = cartReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });
});
