import React, {Component} from 'react'

class Modal extends Component {

    render() {
        if(this.props.modalVisible) {
            return (
                <div className="modal" 
                    onClick = {this.props.closeModal}
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
                                            this.props.encrypt()
                                        }}
                                    >
                                        Ceasars Cipher
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="modal_category_method" 
                                        value="affine"
                                        onClick={(evt) => {
                                            this.props.changeMethod(evt)
                                            this.props.encrypt()
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
                                            this.props.encrypt()
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
                                            this.props.encrypt()
                                        }}
                                    >
                                        Playfair Cipher
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