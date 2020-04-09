import { UPDATE_ALPHABET } from '../actions/constants'

const alphabet = (state = 'abcdefghijklmnopqrstuvwxyz', action) => {
  switch(action.type) {
    case UPDATE_ALPHABET:
      return action.new_alphabet
    default:
      return state
  }
}

export default alphabet