import { 
    TOGGLE_ANALYSIS_METHOD_FQ_INPUT, 
    TOGGLE_ANALYSIS_METHOD_FQ_OUTPUT, 
    TOGGLE_ANALYSIS_METHOD_IC_INPUT, 
    TOGGLE_ANALYSIS_METHOD_IC_OUTPUT, 
    TOGGLE_ANALYSIS_METHOD_CHI_INPUT,
    TOGGLE_ANALYSIS_METHOD_CHI_OUTPUT
 } from './constants'

export const toggleAnalysisMethodFQInput = () => ({
    type: TOGGLE_ANALYSIS_METHOD_FQ_INPUT
})

export const toggleAnalysisMethodFQOutput = () => ({
    type: TOGGLE_ANALYSIS_METHOD_FQ_OUTPUT
})

export const toggleAnalysisMethodICInput = () => ({
    type: TOGGLE_ANALYSIS_METHOD_IC_INPUT
})

export const toggleAnalysisMethodICOutput= () => ({
    type: TOGGLE_ANALYSIS_METHOD_IC_OUTPUT
})

export const toggleAnalysisMethodCHIInput = () => ({
    type: TOGGLE_ANALYSIS_METHOD_CHI_INPUT
})

export const toggleAnalysisMethodCHIOutput = () => ({
    type: TOGGLE_ANALYSIS_METHOD_CHI_OUTPUT
})