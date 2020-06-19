import { TOGGLE_CASEFORMAT } from './constants';

const toggleCaseFormat = (caseformat) => ({
  type: TOGGLE_CASEFORMAT,
  caseformat,
});

export default toggleCaseFormat;
