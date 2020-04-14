import { TOGGLE_PRESETS_MODAL } from "./constants"

export const togglePresetsModal = (target) => {
    return {
        type: TOGGLE_PRESETS_MODAL,
        target  
    }
}
    
