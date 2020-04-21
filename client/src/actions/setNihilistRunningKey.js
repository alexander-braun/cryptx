import { SET_NIHILIST_RUNNING_KEY } from "./constants"

const setNihilistRunningKey = nihilistRunningKey => ({
    type: SET_NIHILIST_RUNNING_KEY,
    nihilistRunningKey
})

export default setNihilistRunningKey