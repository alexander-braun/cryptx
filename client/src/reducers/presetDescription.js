import { SET_PRESET_DESCRIPTION } from '../actions/constants'

const presetDescription = (state = '', action) => {
    switch(action.type) {
        case SET_PRESET_DESCRIPTION:
            return action.description
        default:
            return state
    }
}

export default presetDescription
