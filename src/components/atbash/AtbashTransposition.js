import React from 'react'


class AtbashTransposition extends React.Component {
    genAlphabet = (reverse) => {
        if(this.props.alphabet.length === 0) return

        let style = {color: 'black'}
        let keys = ['iBk','DB5','JyV','1Ts','FUf','rMk','TVa',
                    '9b3','Dk8','byB','Lo8','ayb','8Cx','lv5',
                    '6z4','5nD','yUs','2er','8QH','BHv','TJV',
                    'wJn','DmX','JXz','bKq','coo']

        let alphabet = this.props.alphabet.toLowerCase().split('').sort()
        alphabet = reverse ? [...new Set(alphabet)].reverse() : [...new Set(alphabet)]

        
        let output = []
        let counter = 0

        for(let element of alphabet) {
            output.push(
                <div    class="alphabet_transpos" 
                        key={keys[counter]} 
                        style={element.toLowerCase() === 'a' ? style : {color: 'white'}}
                >
                    <div>
                        {reverse ? '↑' : element}
                    </div>
                    <div>
                        {reverse ? element : '↓'}
                    </div>
                </div>
            )
            counter++
        }
        return output
    }

    render() {
        return (
            <div className="controller">
                <div className="settings_name">Atbash Cipher Transposition</div>
                <div id="caesar_transposition">
                    <div id="alphabet_standart">{this.genAlphabet(false)}</div>
                    <div id="alphabet_transpositioned">{this.genAlphabet(true)}</div>
                </div>    
                <div id="caesar_explanatory_text">
                    <p className="feature_text"> 
                        This is a visualization of the character mapping. For the Atbash Cipher this mapping looks like a mirror.
                        It is incredibly easy to break as the letter mapping always stays the same. The encryption- decryption- and 
                        cracking algorithm are exactly the same. Have a look at the output- and inputchart of the letter frequencies
                        and notice the mirrored graph.
                    </p>
                </div>    
            </div> 
        )
    }
}

export default AtbashTransposition
