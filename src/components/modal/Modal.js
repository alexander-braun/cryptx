import React, {Component} from 'react'

class Modal extends Component {

    render() {
        if(this.props.modalVisible) {
            return (
                <div className="modal" 
                    onClick = {this.props.switchModal}
                >
                    <div className="modal_header">Encryption Methods</div>
                    <div className="modal_body">
                        <div className="method_category">
                            <span className="modal_category_title">Ciphers</span>
                            <ul>
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
            )
        } else return null
    }
}

export default Modal