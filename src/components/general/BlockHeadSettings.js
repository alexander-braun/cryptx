import React from 'react'
import { ReactComponent as Caret} from './img/caret.svg'
import { connect } from 'react-redux'
import { hideModal, showModal } from '../../actions/modal'

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
        switch(props.modalOpen) {
            case true:
                onModalClose()
                break
            case false:
                onModalOpen()
                break
            default:
                break
        }
    }

    const onModalClose = () => {
        props.onModalClose()
    }

    const onModalOpen = () => {
        props.onModalOpen()
    }

    return (
        <div className="block_head">
            <button 
                className="block_head_text" 
                id="block_head_modal"
                onClick = {toggleModal}
            >  
                {props.methodNameInset} <Caret />
            </button>
            <div className="block_head_options">
                <button 
                    value='encrypt' 
                    onClick={(evt) => {
                        props.changeDirection(evt)
                        switchClassName(evt)
                    }} 
                    className="block_head_option selected"
                >
                    Encrypt
                </button>
                    <button 
                    value='decrypt' 
                    onClick={(evt) => {
                        props.changeDirection(evt)
                        switchClassName(evt)
                    }} 
                    className="block_head_option"
                >
                    Decrypt
                </button>
                <button 
                    value='crack' 
                    onClick={(evt) => {
                        props.changeDirection(evt)
                        switchClassName(evt)
                    }} 
                    className="block_head_option"
                >
                    Crack
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    modalOpen: state.modal.modalOpen
})

const mapActionsToProps = {
    onModalOpen: showModal,
    onModalClose: hideModal
}


export default connect(mapStateToProps, mapActionsToProps)(React.memo(BlockHeadSettings))