
export const TOGGLE_MODAL = "TOGGLE_MODAL"
export const DISPLAY_MODAL = "DISPLAY_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"



export const toggleModal =
    () => ({
        type: TOGGLE_MODAL,

    });
export const displayModal =
    () => ({
        type: DISPLAY_MODAL,

    });

export const closeModal = () => ({ type: CLOSE_MODAL, });

