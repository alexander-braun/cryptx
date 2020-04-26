import React from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../../actions/toggleModal'
import '../../styles/modal.css'
import { changeMethod } from '../../actions/changeMethod'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

class Modal extends React.Component {
    handleModalToggle = (e) => {
        if(!(e.target.className !== 'modal')) {
            this.props.onModalToggle()
        }
    }
    render() {
        if(this.props.modalOpen) {
            return (
                <div className="modal"
                    id="methodSelectModal" 
                    onClick = {e => this.handleModalToggle(e)}
                >
                    <div className="inner_modal">
                        <div className="modal_header">Encryption Methods<button style={{color:'#b0b3b8'}}><HighlightOffIcon onClick={this.props.onModalToggle} /></button></div>
                        <div className="modal_body" style={{backgroundColor:'#272727'}}>
                            <div className="method_category methods_modal">
                                <span className="modal_category_title">Ciphers</span>
                                <ul>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="atbash"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="timeline_feature_sign">F</div>
                                                <div className="timeline_feature_name">Atbash Cipher</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="caesar"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="timeline_feature_sign">F</div>
                                                <div className="timeline_feature_name">Ceasars Cipher</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="skytale"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="timeline_feature_sign">F</div>
                                                <div className="timeline_feature_name">Skytale</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="affine"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="not_in_timeline_feature_sign">N</div>
                                                <div className="timeline_feature_name">Affine</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="playfair"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="timeline_feature_sign">F</div>
                                                <div className="timeline_feature_name">Playfair Cipher</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="otp"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="timeline_feature_sign">F</div>
                                                <div className="timeline_feature_name">One Time Pad</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="rot13"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="not_in_timeline_feature_sign">N</div>
                                                <div className="timeline_feature_name">Rot13</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="substitution"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="not_in_timeline_feature_sign">N</div>
                                                <div className="timeline_feature_name">Alphabetic Substitution Cipher</div>
                                            </div>
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
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="timeline_feature_sign">F</div>
                                                <div className="timeline_feature_name">Morse Code</div>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="method_category">
                                <span className="modal_category_title">Polybius square ciphers</span>
                                <ul>
                                    <li>
                                        <button
                                            className="modal_category_method"
                                            value="nihilist"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="timeline_feature_sign">F</div>
                                                <div className="timeline_feature_name">Nihilist Cipher</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="modal_category_method"
                                            value="trifid"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="timeline_feature_sign">F</div>
                                                <div className="timeline_feature_name">Trifid Cipher</div>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="method_category">
                                <span className="modal_category_title">Polyalphabetic Ciphers</span>
                                <ul>
                                    <li>
                                        <button 
                                            className="modal_category_method" 
                                            value="vigenere"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="timeline_feature_sign">F</div>
                                                <div className="timeline_feature_name">Vigenère Cipher</div>
                                            </div>
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
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="timeline_feature_sign">F</div>
                                                <div className="timeline_feature_name">RSA</div>
                                            </div>
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
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="not_in_timeline_feature_sign">N</div>
                                                <div className="timeline_feature_name">Replace</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="modal_category_method"
                                            value="reverse"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="not_in_timeline_feature_sign">N</div>
                                                <div className="timeline_feature_name">Reverse</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="modal_category_method"
                                            value="casetransform"
                                            onClick={(evt) => {
                                                this.props.onModalToggle()
                                                this.props.changeMethod(evt.target.value)
                                            }}
                                        >
                                            <div className="modal_method_wrapper">
                                                <div className="not_in_timeline_feature_sign">N</div>
                                                <div className="timeline_feature_name">Case Transforms</div>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="loadpreset_explanatory" style={{width:'100%', borderTop:'1px solid #424242', marginLeft:'auto', backgroundColor: 'rgb(39, 39, 39)'}}>
                            <div className="modal_legend">
                                <div className="modal_explanation_wrapper"><div className="timeline_feature_sign">F</div> Featured in Timeline</div>
                                <div className="modal_explanation_wrapper"><div className="not_in_timeline_feature_sign">N</div> Not featured in Timeline</div>
                            </div>
                            <button onClick={this.props.onModalToggle}>Close</button>
                        </div>
                    </div>
                </div>
            )
        } else return null
    }
}

const mapStateToProps = state => ({
    modalOpen: state.modal,
    method: state.method
})

const mapActionsToProps = {
    onModalToggle: toggleModal,
    changeMethod: changeMethod
}

export default connect(mapStateToProps, mapActionsToProps)(Modal)