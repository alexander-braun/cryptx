import React from 'react'

import BlockElementInput from './BlockElementInput'
import BlockElementOutput from './BlockElementOutput'
import BlockConnectorEquals from './BlockConnectorEquals'
import BlockConnectorPlus from './BlockConnectorPlus'
import BlockElementSettings from './BlockElementSettings'
import Header from '../general/Header'
import Modal from '../modal/Modal'
import Caesar from '../caesar/CaesarLogic'
import Affine from '../affine/AffineLogic'
import Vigenere from '../vigenere/VigenereLogic'
import Playfair from '../playfair/PlayfairLogic'
import Morse from '../morse/Morselogic'
import Replace from '../replace/ReplaceLogic'
import Skytale from '../skytale/SkytaleLogic'
import Atbash from '../atbash/AtbashLogic'
import Timeline from '../../components/timeline/Timeline'
import Footer from './Footer'

class BlockElementsCollector extends React.Component  {
  constructor(props) {
    super()
    this.state = {
      modalVisible: false,
      method: 'atbash',
      methodNameInset: "Atbash",
      inputValue: 'The quick brown fox jumps over the lazy dog.',
      outputValue: 'Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt.',
      direction: 'encrypt',
      caseFormat: 'maintain',
      includeChars: 'include',
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      cShift: 3,
      wordbook: '',
      affineAlpha: 5,
      affineBeta: 1,
      keyword: 'cipher',
      playSquare: '',
      toReplaceLetter: 'quick',
      replaceLetter: 'mean',
      ringLength: 8,
      skytaleLength: 1,
      skytaleProjectedValue: '',
      alphabetActive: false,
    }

    this.encrypt = this.encrypt.bind(this)
    this.alphabetUpdate = this.alphabetUpdate.bind(this)
    this.selectCase = this.selectCase.bind(this)
    this.includeChars = this.includeChars.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.changeDirection = this.changeDirection.bind(this)
    this.changeMethod = this.changeMethod.bind(this)
    this.updateKeyword = this.updateKeyword.bind(this)
    this.plusMinus = this.plusMinus.bind(this)
    this.switchModal = this.switchModal.bind(this)
    this.setReplaceLetters = this.setReplaceLetters.bind(this)
  }

  //Modal
  switchModal() {
    if(this.state.modalVisible === false) {
      this.setState({
        modalVisible: true
      })
    } else {
      this.setState({
        modalVisible: false
      })
    }
  }

  //General

  changeMethod(evt) {
    let val
    const methods = ['caesar', 'skytale', 'affine', 'vigenere', 'playfair', 'morse', 'replace', 'atbash']
    if(methods.indexOf(evt) !== -1) {
      val = evt
    } else {
      val = evt.target.value || evt.target.getAttribute('value')
    }

    this.setState({
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      caseFormat: 'maintain',
      includeChars: 'include',
      method: val
    })

    if(val === 'caesar') {
      this.setState({
        alphabetActive: true,
        methodNameInset: "Caesar's Cipher"
      })
    } 
    else if(val === 'atbash') {
      this.setState({
        alphabetActive: false,
        methodNameInset: 'Atbash Cipher'
      })
    }
    else if(val === 'affine') {
      this.setState({
        alphabetActive: false,
        methodNameInset: 'Affine Cipher'
      })
    } 
    else if(val === 'vigenere') {
      this.setState({
        keyword: 'cipher',
        alphabetActive: false,
        methodNameInset: 'Vigenère Cipher'
      })
    } 
    else if(val === 'playfair') {
      this.setState({
        keyword: 'chonky boii',
        alphabetActive: false,
        methodNameInset: 'Playfair Cipher'
      })
    } 
    else if(val === 'morse') {
      this.setState({
        alphabetActive: false,
        methodNameInset: 'Morse Code'
      })
    } 
    else if(val === 'replace') {
      this.setState({
        alphabetActive: false,
        methodNameInset: 'Replace'
      })
    } 
    else if(val === 'skytale') {
      this.setState({
        alphabetActive: false,
        methodNameInset: 'Skytale'
      })
    }
    this.encrypt()
  }

  updateInput(evt) {
    if(this.state.inputValue === 'The quick brown fox jumps over the lazy dog.') {
      this.setState({
        inputValue: ''
      })
      evt.target.value = ''
    } else {
      this.setState({
        inputValue: evt.target.value
      })      
    }
    this.encrypt()
  }

  includeChars(evt) {
    this.setState({
        includeChars: evt.target.value,
    })
    this.encrypt()
  }
  
  selectCase(evt) {
    this.setState({
        caseFormat: evt.target.value
    })
    this.encrypt()
  }

  alphabetUpdate(evt) {
    this.setState({
      alphabet: evt.target.value
    })
    this.encrypt()
  }

  changeDirection(evt) {
      this.setState({
        direction: evt.target.value
      })
      this.encrypt()
  }

  updateKeyword = (evt) => {
    let keyword = evt.target.value.toLowerCase()
    this.setState({
        keyword: keyword
    })
    this.encrypt()
  }

  //Caesar
  plusMinus = (evt) => {
    if(evt.target.innerText === '+') {
      if(evt.target.id === 'plus_ring') {
        if(this.state.ringLength > 19) {
          this.setState({
            ringLength: 3
          })
        } 
        else {
          this.setState(prevState => {
            return {
              ringLength: prevState.ringLength + 1
            }
          })
        }
      } 
      else if(evt.target.id === 'plus_caesar'){
        if(this.state.cShift > 24) {
          this.setState({
            cShift: 0
          })
        }
        else {
          this.setState(prevState => {
            return {
              cShift: prevState.cShift + 1
            }
          })
        }
      }
    } 
    else if(evt.target.innerText === '-') {
      if(evt.target.id === 'minus_ring') {
        if(this.state.ringLength < 4) {
          this.setState({
            ringLength: 20
          })
        } 
        else {
          this.setState(prevState => {
            return {
              ringLength: prevState.ringLength - 1
            }
          })
        }
      } 
      else if(evt.target.id === 'minus_caesar') {
        if(this.state.cShift < 1) {
          this.setState({
            cShift: 25
          })
        } 
        else {
          this.setState(prevState => {
            return {
              cShift: prevState.cShift - 1
            }
          })
        }  
      }
    }
    this.encrypt()
  }

  async componentDidMount() {
    if(this.state.wordbook === ''){
      const url = 'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json'
      const response = await fetch(url)
      const data = await response.json()
      this.setState({
        wordbook: data
      }) 
    }
  }

  componentWillMount() {
    this.encrypt()
  }

  //Affine
  setAlpha = (evt) => {
    this.setState({
      affineAlpha: evt.target.value
    })
    this.encrypt()
  }

  setBeta = (evt) => {
    this.setState({
      affineBeta: evt.target.value
    })
    this.encrypt()
  }

  // Replace
  setReplaceLetters = (evt) => {
    if(evt.target.id === 'to_replace_letter') {
      this.setState({
        toReplaceLetter: evt.target.value
      })
    } else {
        this.setState({
          replaceLetter: evt.target.value
      })  
    }
    this.encrypt()
  }
  
  // Skytale
  setSkytaleRing(evt) {
    this.setState({
      ringLength: evt.target.value
    })
  }

  //Do the magic!
  encrypt = () => {
    this.setState(prevState => {
      if(prevState.method === 'caesar') {
        Caesar.setUserInput(prevState.inputValue)
        Caesar.setAlphabet(prevState.alphabet)
        Caesar.setSaltInput(prevState.cShift)
        Caesar.setDirection(prevState.direction)
        Caesar.setWordbook(prevState.wordbook)
        Caesar.setCase(prevState.caseFormat)
        Caesar.setForeignChars(prevState.includeChars)
        return {
          outputValue: Caesar.encrypt()
        }
      } 
      else if(prevState.method === 'atbash') {
        if(prevState.direction !== 'crack') {
          Atbash.setUserInput(prevState.inputValue)
          Atbash.setCase(prevState.caseFormat)
          Atbash.setForeignChars(prevState.includeChars)
          return {
            outputValue: Atbash.encrypt()
          }
        }
      }
      else if (prevState.method === 'affine') {
        if(prevState.direction !== 'crack') {
          Affine.setAlphabet(prevState.alphabet)
          Affine.setUserInput(prevState.inputValue)
          Affine.setAlpha(prevState.affineAlpha)
          Affine.setBeta(prevState.affineBeta)
          Affine.setDirection(prevState.direction)
          Affine.setForeignChars(prevState.includeChars)
          Affine.setCase(prevState.caseFormat)
          return {
            outputValue: Affine.encrypt()
          }
        } 
        else {
          return {
            outputValue: ''
          }
        }
      } 
      else if (prevState.method === 'vigenere') {
        if(prevState.direction !== 'crack') {
          Vigenere.setUserInput(prevState.inputValue)
          Vigenere.setAlphabet(prevState.alphabet)
          Vigenere.setDirection(prevState.direction)
          Vigenere.setForeignChars(prevState.includeChars)
          Vigenere.setCase(prevState.caseFormat)
          Vigenere.setKeyword(prevState.keyword)
          return {
            outputValue: Vigenere.encrypt()
          }
        } 
        else {
          return {
              outputValue: ''
          }
        }
      } 
      else if (prevState.method === 'playfair') {
        if(prevState.direction !== 'crack') {
          Playfair.setUserInput(prevState.inputValue)
          Playfair.setAlphabet(prevState.alphabet)
          Playfair.setDirection(prevState.direction)
          Playfair.setForeignChars(prevState.includeChars)
          Playfair.setCase(prevState.caseFormat)
          Playfair.setKeyPhrase(prevState.keyword)
          return {
            outputValue: Playfair.encrypt(),
            playSquare: Playfair.getSquare()
          }
        } 
        else {
          return {
            outputValue: ''
          }
        }
      } 
      else if(prevState.method === 'morse') {
        if(prevState.direction !== 'crack') {
          Morse.setUserInput(prevState.inputValue)
          Morse.setAlphabet(prevState.alphabet)
          Morse.setDirection(prevState.direction)
          Morse.setForeignChars(prevState.includeChars)
          Morse.setCase(prevState.caseFormat)
          return {
            outputValue: Morse.encrypt()
          }
        } 
        else {
          return {
            outputValue: ''
          }
        }
      } 
      else if(prevState.method === 'replace') {
          if(prevState.direction !== 'crack') {
            Replace.setUserInput(prevState.inputValue)
            Replace.setCase(prevState.caseFormat)
            Replace.setToReplaceLetter(prevState.toReplaceLetter)
            Replace.setReplaceLetter(prevState.replaceLetter)
            return {
              outputValue: Replace.encrypt()
            }
          } 
          else {
            return {
              outputValue: ''
            }
          }
      } 
      else if(prevState.method === 'skytale') {
        if(prevState.direction !== 'crack') {
          Skytale.setDirection(prevState.direction)
          Skytale.setCase(prevState.caseFormat)
          Skytale.setUserInput(prevState.inputValue)
          Skytale.setRingLength(prevState.ringLength)
          return {
            outputValue: Skytale.encrypt()[0],
            skytaleLength: Skytale.encrypt()[1],
            skytaleProjectedValue: Skytale.getProjectedValue()
          } 
        }
        else {
          return {
            outputValue: ''
          }
        }
      }
    })
  };

  render() {
    return (
      <>
        <Header />
        <Timeline 
          changeMethod={this.changeMethod}
          method={this.state.method}
        />
        <div id = "block_container">
          <BlockElementInput 
            inputValue={this.state.inputValue}
            updateInput={this.updateInput}
          />
          <BlockConnectorPlus />
          <BlockElementSettings
            updateKeyword={this.updateKeyword}
            keyword = {this.state.keyword}
            changeDirection={this.changeDirection}
            method={this.state.method}
            methodNameInset={this.state.methodNameInset}
            switchModal={this.switchModal}
            alphabet={this.state.alphabet} 
            alphabetUpdate = {this.alphabetUpdate}
            cShift = {this.state.cShift}
            plusMinus = {this.plusMinus}
            selectCase = {this.selectCase}
            includeChars = {this.includeChars}
            direction = {this.state.direction}
            setAlpha = {this.setAlpha}
            setBeta = {this.setBeta}
            playSquare = {this.state.playSquare}
            setReplaceLetters = {this.setReplaceLetters}
            toReplaceLetter = {this.state.toReplaceLetter}
            replaceLetter = {this.state.replaceLetter}
            ringLength = {this.state.ringLength}
            skytaleLength = {this.state.skytaleLength}
            skytaleProjectedValue = {this.state.skytaleProjectedValue}
            alphabetActive = {this.state.alphabetActive}
            inputValue = {this.state.inputValue}
          />
          <BlockConnectorEquals />
          <BlockElementOutput 
            outputValue={this.state.outputValue}
          />
        </div>
        <Footer />
        <Modal 
          switchModal = {this.switchModal}
          changeMethod = {this.changeMethod}
          modalVisible = {this.state.modalVisible}
        />
      </>
    )
  }
}

export default BlockElementsCollector