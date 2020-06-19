import { SET_WORDBOOK } from './constants';

const setWordbook = () => async (dispatch) => {
  const url =
    'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json';
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({
      type: SET_WORDBOOK,
      payload: {
        data,
      },
    });
  } catch (err) {
    dispatch({
      type: SET_WORDBOOK,
      payload: {
        data: 'FAIL',
      },
    });
  }
};

export default setWordbook;
