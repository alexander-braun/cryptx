import React from 'react'
import { ReactComponent as Caret} from './img/caret.svg'
import { connect } from 'react-redux'
import { toggleModal } from '../../actions/modal'
import { toggleDirection } from '../../actions/direction'
import MethodNames from './MethodNames'
import MethodCrackAvailability from './MethodCrackAvailability'

const BlockHeadSettings = (props) => {

    const switchClassName = (evt) => {
        const buttons = document.getElementsByClassName('block_head_option')
        for(let button of buttons) {
            if(evt.target === button) {
                button.className = 'block_head_option selected'
            } else {
                button.className = 'block_head_option'
            }
        }
    }

    const toggleModal = () => {
        props.onModalToggle()
    }

    return (
        <div className="block_head">
            <button 
                className="block_head_text" 
                id="block_head_modal"
                onClick = {toggleModal}
            >  
                {MethodNames[props.method]} <Caret />
            </button>
            <div className="block_head_options">
                <button 
                    value='encrypt' 
                    onClick={(evt) => {
                        switchClassName(evt)
                        props.onToggleDirection(evt.target.value)
                    }} 
                    className="block_head_option selected"
                >
                    Encrypt
                </button>
                    <button 
                    value='decrypt' 
                    onClick={(evt) => {
                        props.onToggleDirection(evt.target.value)
                        switchClassName(evt)
                    }} 
                    className="block_head_option"
                >
                    Decrypt
                </button>
                {
                    MethodCrackAvailability[props.method] ? (
                        <button 
                            value='crack' 
                            onClick={(evt) => {
                                props.onToggleDirection(evt.target.value)
                                switchClassName(evt)
                            }} 
                            className="block_head_option"
                        >
                            Crack
                        </button>
                    ) :
                    null
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    modalOpen: state.modal,
    direction: state.direction,
    method: state.method
})

const mapActionsToProps = {
    onModalToggle: toggleModal,
    onToggleDirection: toggleDirection
}


export default connect(mapStateToProps, mapActionsToProps)(React.memo(BlockHeadSettings))