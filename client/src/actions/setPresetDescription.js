import { SET_PRESET_DESCRIPTION } from './constants'

const setPresetDescription = description => ({
    type: SET_PRESET_DESCRIPTION,
    description
})

export default setPresetDescription