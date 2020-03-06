import React from 'react'
import { ReactComponent as Caret} from './img/caret.svg'

const BlockHeadSettings = ({switchModal, methodNameInset, changeDirection}) => {

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
                    }} 
                    className="block_head_option selected"
                >
                Encrypt
                </button>
                    <button 
                    value='decrypt' 
                    onClick={(evt) => {
                        changeDirection(evt)
                        switchClassName(evt)
                    }} 
                    className="block_head_option"
                >
                Decrypt
                </button>
                <button 
                    value='crack' 
                    onClick={(evt) => {
                        changeDirection(evt)
                        switchClassName(evt)
                    }} 
                    className="block_head_option"
                >
                Crack
                </button>
            </div>
            <button 
                className="block_head_text" 
                id="block_head_modal"
                onClick = {switchModal}
            >   {methodNameInset} <Caret />
            </button>
        </div>
    )
}

export default BlockHeadSettings