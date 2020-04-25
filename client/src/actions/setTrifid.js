import { SET_TRIFID_KEY, SET_TRIFID_27TH_LETTER, SET_TRIFID_GROUP_SIZE, SET_TRIFID_LAYERS, SET_TRIFID_GROUPS} from './constants'

const setTrifidKey = trifidKey => ({
    type: SET_TRIFID_KEY,
    trifidKey
})

const setTrifid27thLetter = trifid27thLetter => ({
    type: SET_TRIFID_27TH_LETTER,
    trifid27thLetter
})

const setTrifidGroupSize = trifidGroupSize => ({
    type: SET_TRIFID_GROUP_SIZE,
    trifidGroupSize
})

const setTrifidLayers = trifidLayers => ({
    type: SET_TRIFID_LAYERS,
    trifidLayers
})

const setTrifidGroups = trifidGroups => ({
    type: SET_TRIFID_GROUPS,
    trifidGroups
})

export { setTrifidKey, setTrifid27thLetter, setTrifidGroupSize, setTrifidLayers, setTrifidGroups }