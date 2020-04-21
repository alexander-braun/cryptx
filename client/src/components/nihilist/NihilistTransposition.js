import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

class NihilistTransposition extends React.PureComponent {

    genAlphabet = () => {
        
        //Generate Inputstream
        let input = this.props.nihilistPlainNumbers
        input = input.length >= 15 ? input.slice(0, 14) : input

        //Generate Keystream
        let key = this.props.nihilistRunningKey
        key = key.length >= 15 ? key.slice(0, 14) : key

        //Generate Outputstream
        let out = this.props.direction === 'encrypt' ? this.props.output.split(' ') : this.props.input.split(' ')
        out = out.length >= 15 ? out.slice(0, 14) : out

        //Generate Plaintext
        let plaintext = this.props.direction === 'encrypt' ? this.props.input.split(' ').join('').split('') : this.props.output.split(' ').join('').split('')
        plaintext = plaintext.length >= 15 ? plaintext.slice(0, 14) : plaintext

        //Generate Plainkey
        let plainkey = this.props.cipherNihilist.split('')
        let ind = 0
        let newKey = []
        if(input.length > plainkey.length) {
            for(let i = 0; i < input.length; i++) {
                if(ind < plainkey.length - 1) {
                    newKey.push(plainkey[ind])
                    ind++
                } else {
                    newKey.push(plainkey[ind])
                    ind = 0
                }
            }
        } else newKey = plainkey
        newKey = newKey.length >= 15 ? newKey.slice(0, 14) : newKey

        //Generate Visualisation with all elements
        let output = []
        let counter = 0
        for(let element of input) {
            output.push(
                <div className="alphabet_transpos" style={{fontSize:'12px'}} key={uuidv4()}>
                    <div>{plaintext[counter]}</div>
                    <div className="arrow">=</div>
                    <div>{element}</div>
                    <div className="arrow">+</div>
                    <div>{newKey[counter]}</div>
                    <div className="arrow">=</div>
                    <div>{key[counter]}</div>
                    <div className="arrow">=</div>
                    <div>{out[counter]}</div>
                </div>
            )
            counter++
        }
        if(this.props.output === 'Not a valid input') return null
        return output
    }

    render() {
        return (
            <React.Fragment>
                { this.props.output !== 'Not a valid input' && this.props.output !== 'Please enter a Keyphrase' ? 
                    <div className="controller" style={{borderBottom:'none', borderTop: '1px solid rgba(255, 255, 255, 0.192)'}}>
                        <div className="settings_name">Nihilist Cipher Transposition</div>
                        <div id="caesar_transposition">
                            <div className="alphabet_row_collect">
                                <div id="alphabet_standart">{this.genAlphabet()}</div>
                            </div>
                        </div>    
                        <div id="caesar_explanatory_text">
                            <p className="feature_text"> 
                                Visualization of the character mapping for input, keyword and output.
                            </p>
                        </div>
                    </div> : null
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    nihilistRunningKey: state.nihilistRunningKey,
    nihilistPlainNumbers: state.nihilistPlainNumbers,
    cipherNihilist: state.cipherNihilist,
    input: state.input,
    output: state.output,
    direction: state.direction
})

export default connect(mapStateToProps)(NihilistTransposition)
