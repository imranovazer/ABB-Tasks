import { DISPLAY_MODAL, TOGGLE_MODAL, CLOSE_MODAL } from "../actions/modalActions";



function modalReducer(state = false, action = {}) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return !state
        case DISPLAY_MODAL:
            return true
        case CLOSE_MODAL:
            return false

        default:
            return state;
    }
}






export default modalReducer;