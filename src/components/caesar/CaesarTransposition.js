import React from 'react'


class CaesarTransposition extends React.Component {

    genAlphabet = () => {
        if(this.props.alphabet.length === 0) return

        let style = {color: 'black'}
        let keys = ['iBka','DB5u','JyVA','1TJs','FUAf','rM2k','TVla',
                    '9b3r','Dk8g','byB9','LoZ8','ayjb','8Cbx','lv5i',
                    '6z4q','5nDP','yUsd','2egr','8QXH','pBHv','TJBV',
                    'wJnj','DmXo','JXzT','bKqo','cloo']

        let alphabet = this.props.alphabet.toLowerCase().split('').sort()
        alphabet = [...new Set(alphabet)]

        let output = []
        let counter = 0;
        for(let element of alphabet) {
            output.push(
                <div className="alphabet_transpos" key={keys[counter]} style={element.toLowerCase() === 'a' ? style : {color: 'white'}}>
                <div>{element}</div><div>↓</div></div>
            )
            counter++
        }
        return output
    }

    genShifted = (shift) => {

        if(this.props.alphabet.length === 0) return

        let style = {color: 'black'}
        let keys = ['iBtka','DB5uD','JyVDA','1lTJs','FU7Af','rnM2k','TVlka',
                    '96b3r','DkU8g','byBW9','LoLZ8','cayjb','8CTbx','lhv5i',
                    '6zT4q','5nDWP','yUsXd','2regr','8MQXH','pIBHv','T7JBV',
                    'wJrnj','Dm5Xo','JXnzT','bKMqo','clXoo']
        
        let alphabet = this.props.alphabet.toLowerCase().split('').sort()
        alphabet = [...new Set(alphabet)]
        
        for(let i = 0; i < shift; i++) {
            let temp = alphabet.shift()
            alphabet.push(temp)
        }
        let output = []
        for(let i = 0; i < alphabet.length; i++) {
            output.push(
                <div    className="alphabet_transpos" 
                        key={keys[i]} 
                        style={alphabet[i].toLowerCase() === 'a' ? style : {color: 'white'}}
                >
                <div>↑</div><div>{alphabet[i]}</div>
                </div>    
            )
        }

        return output
    }

    render() {
        return (
            <div className="controller">
                <div className="settings_name">Caesar Cipher Transposition</div>
                <div id="caesar_transposition">
                    <div id="alphabet_standart">{this.genAlphabet()}</div>
                    <div id="alphabet_transpositioned">{this.genShifted(this.props.cShift)}</div>
                </div>    
                <div id="caesar_explanatory_text">
                    <p className="feature_text"> 
                        Visualization of the character mapping on <b>shift</b> changes.
                    </p>
                </div>    
            </div> 
        )
    }
}

export default CaesarTransposition
