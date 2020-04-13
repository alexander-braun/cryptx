import { TOGGLE_DIRECTION } from "./constants"

export const toggleDirection = direction => ({
    type: TOGGLE_DIRECTION,
    direction
})