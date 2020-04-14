import React from 'react'
import { connect } from 'react-redux'
import { togglePresetsModal } from '../../actions/togglePresetsModal'
import '../../styles/modal.css'

class PresetsModal extends React.Component {
    render() {
        if(this.props.presetsModal) {
            return (
                <div className="modal" 
                    onClick = {this.props.togglePresetsModal}
                >
                    <div className="inner_modal">
                        <div className="block_top_decoration"></div>
                        <div className="modal_header">{this.props.target === 'load' ? 'Load a Preset' : 'Save as Preset'}</div>
                        <div className="modal_body">
                            <div className="method_category">
                                <ul>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="atbash"
                                            onClick={(evt) => {
                                                
                                            }}
                                        >
                                            PRESET 1
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else return null
    }
}

const mapStateToProps = state => ({
    presetsModal: state.presetsModal.modalOpen,
    target: state.presetsModal.target
})

const mapActionsToProps = {
    togglePresetsModal: togglePresetsModal
}

export default connect(mapStateToProps, mapActionsToProps)(PresetsModal)