import { SET_RSA_PHI } from './constants'

const setRsaPhi = phi => ({
    type: SET_RSA_PHI,
    phi
})

export default setRsaPhi