import React from 'react'

class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.modalVisible !== this.props.modalVisible) {
            return true
        } else return false
    }

    render() {
        if(this.props.modalVisible) {
            return (
                <div className="modal" 
                    onClick = {this.props.switchModal}
                >
                    <div className="inner_modal">
                        <div className="block_top_decoration"></div>
                        <div className="modal_header">Encryption Methods</div>
                        <div className="modal_body">
                            <div className="method_category">
                                <span className="modal_category_title">Ciphers</span>
                                <ul>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="atbash"
                                            onClick={(evt) => {
                                                this.props.changeMethod(evt)
                                            }}
                                        >
                                        Atbash Cipher
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="caesar"
                                            onClick={(evt) => {
                                                this.props.changeMethod(evt)
                                            }}
                                        >
                                        Ceasars Cipher
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="skytale"
                                            onClick={(evt) => {
                                                this.props.changeMethod(evt)
                                            }}
                                        >
                                        Skytale
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="affine"
                                            onClick={(evt) => {
                                                this.props.changeMethod(evt)
                                            }}
                                        >
                                        Affine Cipher
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="vigenere"
                                            onClick={(evt) => {
                                                this.props.changeMethod(evt)
                                            }}
                                        >
                                        Vigenère Cipher
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="playfair"
                                            onClick={(evt) => {
                                                this.props.changeMethod(evt)
                                            }}
                                        >
                                        Playfair Cipher
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="otp"
                                            onClick={(evt) => {
                                                this.props.changeMethod(evt)
                                            }}
                                        >
                                        One Time Pad
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="rot13"
                                            onClick={(evt) => {
                                                this.props.changeMethod(evt)
                                            }}
                                        >
                                        ROT13
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="method_category">
                                <span className="modal_category_title">Alphabets</span>
                                <ul>
                                    <li>
                                        <button
                                            className="modal_category_method"
                                            value="morse"
                                            onClick={(evt) => {
                                                this.props.changeMethod(evt)
                                            }}
                                        >
                                        Morse Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="method_category">
                                <span className="modal_category_title">Public Key Encryption</span>
                                <ul>
                                    <li>
                                        <button
                                            className="modal_category_method"
                                            value="rsa"
                                            onClick={(evt) => {
                                                this.props.changeMethod(evt)
                                            }}
                                        >
                                        RSA
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="method_category">
                                <span className="modal_category_title">Text Transformations</span>
                                <ul>
                                    <li>
                                        <button
                                            className="modal_category_method"
                                            value="replace"
                                            onClick={(evt) => {
                                                this.props.changeMethod(evt)
                                            }}
                                        >
                                        Replace
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

export default Modal