import {    TOGGLE_ANALYSIS_METHOD_FQ_INPUT,
            TOGGLE_ANALYSIS_METHOD_FQ_OUTPUT, 
            TOGGLE_ANALYSIS_METHOD_IC_INPUT, 
            TOGGLE_ANALYSIS_METHOD_IC_OUTPUT,
            TOGGLE_ANALYSIS_METHOD_CHI_OUTPUT,
            TOGGLE_ANALYSIS_METHOD_CHI_INPUT

        } from '../actions/constants'


const initialState = {
    'fq_input': true,
    'fq_output': true,

    'ic_output': true,
    'ic_input': true,

    'chi_input': true,
    'chi_output': true
}

const analysisMethod = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_ANALYSIS_METHOD_FQ_INPUT:
            return {
                ...state,
                'fq_input': !state['fq_input']
            }
        case TOGGLE_ANALYSIS_METHOD_FQ_OUTPUT:
            return {
                ...state,
                'fq_output': !state['fq_output']
            }
        case TOGGLE_ANALYSIS_METHOD_IC_INPUT:
            return {
                ...state,
                'ic_input': !state['ic_input']
            }
        case TOGGLE_ANALYSIS_METHOD_IC_OUTPUT:
            return {
                ...state,
                'ic_output': !state['ic_output']
            }
        case TOGGLE_ANALYSIS_METHOD_CHI_INPUT:
            return {
                ...state,
                'chi_input': !state['chi_input']
            }
        case TOGGLE_ANALYSIS_METHOD_CHI_OUTPUT:
            return {
                ...state,
                'chi_output': !state['chi_output']
            }
        default:
            return state
    }
}

export default analysisMethod