import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleAnalysisModal } from '../../actions/toggleAnalysisModal'
import { 
    toggleAnalysisMethodFQInput, 
    toggleAnalysisMethodFQOutput, 

    toggleAnalysisMethodICInput, 
    toggleAnalysisMethodICOutput, 

    toggleAnalysisMethodCHIOutput,
    toggleAnalysisMethodCHIInput 
} from '../../actions/toggleAnalysisMethod'
import '../../styles/modal.css'


const AnalysisModal = ({
        analysisModal, 
        toggleAnalysisModal,
        toggleAnalysisMethodICInput,
        toggleAnalysisMethodICOutput, 
        toggleAnalysisMethodFQInput, 
        toggleAnalysisMethodFQOutput, 
        toggleAnalysisMethodCHIOutput,
        toggleAnalysisMethodCHIInput, 
        ic_input, 
        ic_output,
        fq_input,
        fq_output,
        chi_output,
        chi_input
    }) => {

        const toggleModal = (e) => {
            if(!(e.target.className !== 'modal')) {
                toggleAnalysisModal()
            }
        }

    return (
        <Fragment>
            {analysisModal ? (
                <div className="modal" 
                    onClick = {e => toggleModal(e)}
                >
                    <div className="inner_modal">
                        <div className="block_top_decoration"></div>
                        <div className="modal_header">Add a method of cryptoanalysis</div>
                        <div className="modal_body">
                            <div className="method_category">
                                <ul>
                                    {!fq_input || !fq_output ? (
                                        <li>
                                            <button 
                                                className="modal_category_method" 
                                                value="atbash"
                                                onClick={(evt) => {
                                                    !fq_input && toggleAnalysisMethodFQInput()
                                                    !fq_output && toggleAnalysisMethodFQOutput()
                                                }}
                                            >
                                                Frequency Analysis
                                            </button>
                                        </li>
                                        ) : null
                                    }
                                    {!ic_input || !ic_output ? (
                                        <li>
                                            <button 
                                                className="modal_category_method" 
                                                value="atbash"
                                                onClick={(evt) => {
                                                    !ic_input && toggleAnalysisMethodICInput()
                                                    !ic_output && toggleAnalysisMethodICOutput()
                                                }}
                                            >
                                                Index of Coincidence
                                            </button>
                                        </li>
                                        ) : null
                                    }
                                    {
                                        !chi_input || !chi_output ? (
                                            <li>
                                                <button 
                                                    className="modal_category_method" 
                                                    value="atbash"
                                                    onClick={(evt) => {
                                                        !chi_input && toggleAnalysisMethodCHIInput()
                                                        !chi_output && toggleAnalysisMethodCHIOutput()
                                                    }}
                                                >
                                                    Chi Squared
                                                </button>
                                            </li>
                                        ) : null
                                    }
                                    {
                                        ic_input && ic_output && fq_input && fq_output && chi_output && chi_input ? (
                                            <li>
                                                All methods already in use
                                            </li>
                                        ) : null
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    analysisModal: state.analysisModal,

    fq_input: state.analysisMethod.fq_input,
    fq_output: state.analysisMethod.fq_output,

    ic_input: state.analysisMethod.ic_input,
    ic_output: state.analysisMethod.ic_output,

    chi_input: state.analysisMethod.chi_input,
    chi_output: state.analysisMethod.chi_output

})

const mapActionsToProps = {
    toggleAnalysisModal: toggleAnalysisModal,

    toggleAnalysisMethodFQInput: toggleAnalysisMethodFQInput, 
    toggleAnalysisMethodFQOutput: toggleAnalysisMethodFQOutput,

    toggleAnalysisMethodICInput: toggleAnalysisMethodICInput, 
    toggleAnalysisMethodICOutput: toggleAnalysisMethodICOutput,

    toggleAnalysisMethodCHIOutput: toggleAnalysisMethodCHIOutput,
    toggleAnalysisMethodCHIInput: toggleAnalysisMethodCHIInput  
}

export default connect(mapStateToProps, mapActionsToProps)(AnalysisModal)