import { HIDE_MODAL, SHOW_MODAL } from "./constants"

export const hideModal = () => ({
    type: HIDE_MODAL
})

export const showModal = () => ({
    type: SHOW_MODAL
})