import {
  SET_PRIME_1,
  SET_PRIME_2,
  SET_TIME_TO_CALCULATE,
  SET_RSA_PHI,
  SET_RSA_D,
  SET_RSA_N,
  SET_RSA_E,
} from '../actions/constants';

const initialState = {
  prime1:
    '250556952327646214427246777488032351712139094643988394726193347352092526616305469220133287929222242315761834129196430398011844978805263868522770723615504744438638381670321613949280530254014602887707960375752016807510602846590492724216092721283154099469988532068424757856392563537802339735359978831013',
  prime2:
    '290245329165570025116016487217740287508837913295571609463914348778319654489118435855243301969001872061575755804802874062021927719647357060447135321577028929269578574760547268310055056867386875959045119093967972205124270441648450825188877095173754196346551952542599226295413057787340278528252358809329',
  timeToCalculate: '0s',
  d: '0',
  phi: '0',
  n: '0',
  e: '17',
};

const rsa = (state = initialState, action) => {
  switch (action.type) {
    case SET_RSA_E:
      if (!isNaN(action.e) && action.e !== null) {
        return {
          ...state,
          e: action.e,
        };
      }
      break;
    case SET_RSA_PHI:
      return {
        ...state,
        phi: action.phi,
      };
    case SET_RSA_D:
      return {
        ...state,
        d: action.d,
      };
    case SET_RSA_N:
      return {
        ...state,
        n: action.n,
      };
    case SET_PRIME_1:
      return {
        ...state,
        prime1: action.prime1,
      };
    case SET_PRIME_2:
      return {
        ...state,
        prime2: action.prime2,
      };
    case SET_TIME_TO_CALCULATE:
      return {
        ...state,
        timeToCalculate: action.timeToCalculate,
      };
    default:
      return state;
  }
};

export default rsa;
