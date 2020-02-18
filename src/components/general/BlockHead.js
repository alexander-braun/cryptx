import React from 'react'
import { ReactComponent as Caret} from './img/caret.svg'

const BlockHead = ({openModal, methodNameInset, changeDirection, encrypt}) => {

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

    return (
        <div className="block_head">
            <div className="block_head_options">
            <button 
                value='encrypt' 
                onClick={(evt) => {
                    changeDirection(evt)
                    switchClassName(evt)
                    encrypt()
                }} 
                className="block_head_option selected"
            >
            ENCRYPT
            </button>
            <button 
                value='decrypt' 
                onClick={(evt) => {
                    changeDirection(evt)
                    switchClassName(evt)
                    encrypt()
                }} 
                className="block_head_option"
            >
            DECRYPT
            </button>
            <button 
                value='crack' 
                onClick={(evt) => {
                    changeDirection(evt)
                    switchClassName(evt)
                    encrypt()
                }} 
                className="block_head_option"
            >
            CRACK
            </button>
            </div>
            <button 
                className="block_head_text" 
                onClick={openModal} 
            >{methodNameInset} <Caret />
            </button>
        </div>
    )
}

export default BlockHead