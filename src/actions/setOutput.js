import { UPDATE_OUTPUT } from "./constants"

const setOutput = (output) => ({
    type: UPDATE_OUTPUT,
    output
})

export default setOutput