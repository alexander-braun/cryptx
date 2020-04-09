import { UPDATE_ALPHABET } from './constants'

const updateAlphabet = new_alphabet => ({
  type: UPDATE_ALPHABET,
  new_alphabet
})

export default updateAlphabet