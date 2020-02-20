import React from 'react'

import BlockElementInput from './BlockElementInput'
import BlockElementOutput from './BlockElementOutput'
import BlockConnectorEquals from './BlockConnectorEquals'
import BlockConnectorPlus from './BlockConnectorPlus'
import BlockElementSettings from './BlockElementSettings'
import Header from '../general/Header'
import Modal from '../modal/Modal'
import caesar from '../caesar/CaesarLogic'
import affine from '../affine/AffineLogic'
import vigenere from '../vigenere/VigenereLogic'
import playfair from '../playfair/PlayfairLogic'
import morse from '../morse/Morselogic'

class BlockElementsCollector extends React.Component  {
  constructor(props) {
    super()
    this.state = {
      modalVisible: false,
      method: 'caesar',
      methodNameInset: "Caesar's Cipher",
      inputValue: 'Write Something...',
      outputValue: 'Zulwh Vrphwklqj...',
      direction: 'encrypt',
      caseFormat: 'maintain',
      includeChars: 'include',
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      cShift: 3,
      wordbook: '',
      affineAlpha: 5,
      affineBeta: 1,
      keyword: 'cipher',
      playSquare: ''
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
    let val = evt.target.value
    this.setState({
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      caseFormat: 'maintain',
      includeChars: 'include'
    })
    if(val === 'caesar') {
        this.setState({
            methodNameInset: "Caesar's Cipher"
        })
    } else if(val === 'affine') {
        this.setState({
            methodNameInset: 'Affine Cipher'
        })
    } else if(val === 'vigenere') {
        this.setState({
            keyword: 'cipher',
            methodNameInset: 'Vigenère Cipher'
        })
    } else if(val === 'playfair') {
        this.setState({
            keyword: 'playfair example',
            methodNameInset: 'Playfair Cipher'
        })
    } else if(val === 'morse') {
        this.setState({
          methodNameInset: 'Morse Code'
        })
    }
    this.setState({
          method: val
    })
    this.encrypt()
  }

  updateInput(evt) {
    if(this.state.inputValue === 'Write Something...') {
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

  //Caesar
  plusMinus = (evt) => {

    if(evt.target.innerText === '+') {
      if(this.state.cShift > 24) {
        this.setState({
          cShift: 1
        })
      } else {
        this.setState(prevState => {
          return {
            cShift: prevState.cShift + 1
          }
        })
      }
      this.encrypt()
    } else if(evt.target.innerText === '-') {
      if(this.state.cShift < 2) {
        this.setState({
          cShift: 25
        })
      } else {
        this.setState(prevState => {
          return {
            cShift: prevState.cShift - 1
          }
        })
      }
      this.encrypt()
    }
  }

  //Async load the wordbook for caesar crack
  
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

  updateKeyword = (evt) => {
    this.setState({
        keyword: evt.target.value  
    })
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

  //Do the magic!

  encrypt = () => {
    this.setState(prevState => {
      if(prevState.method === 'caesar') {
        caesar.setUserInput(prevState.inputValue)
        caesar.setAlphabet(prevState.alphabet)
        caesar.setSaltInput(prevState.cShift)
        caesar.setDirection(prevState.direction)
        caesar.setWordbook(prevState.wordbook)
        caesar.setCase(prevState.caseFormat)
        caesar.setForeignChars(prevState.includeChars)
        return {
          outputValue: caesar.encrypt()
        }
      } else if (prevState.method === 'affine') {
        if(prevState.direction !== 'crack') {
          affine.setUserInput(prevState.inputValue)
          affine.setAlpha(prevState.affineAlpha)
          affine.setBeta(prevState.affineBeta)
          affine.setAlphabet(prevState.alphabet)
          affine.setDirection(prevState.direction)
          affine.setForeignChars(prevState.includeChars)
          affine.setCase(prevState.caseFormat)
          return {
            outputValue: affine.encrypt()
          }
        } else {
          return {
            outputValue: ''
          }
        }
      } else if (prevState.method === 'vigenere') {
        if(prevState.direction !== 'crack') {
          vigenere.setUserInput(prevState.inputValue)
          vigenere.setAlphabet(prevState.alphabet)
          vigenere.setDirection(prevState.direction)
          vigenere.setForeignChars(prevState.includeChars)
          vigenere.setCase(prevState.caseFormat)
          vigenere.setKeyword(prevState.keyword)
          return {
            outputValue: vigenere.encrypt()
          }
        } else {
            return {
              outputValue: ''
            }
        }
      } else if (prevState.method === 'playfair') {
        if(prevState.direction !== 'crack') {
          playfair.setUserInput(prevState.inputValue)
          playfair.setAlphabet(prevState.alphabet)
          playfair.setDirection(prevState.direction)
          playfair.setForeignChars(prevState.includeChars)
          playfair.setCase(prevState.caseFormat)
          playfair.setKeyPhrase(prevState.keyword)
          return {
            outputValue: playfair.encrypt(),
            playSquare: playfair.getSquare()
          }
        } else {
          return {
            outputValue: ''
          }
        }
      } else if(prevState.method === 'morse') {
        if(prevState.direction !== 'crack') {
          morse.setUserInput(prevState.inputValue)
          morse.setAlphabet(prevState.alphabet)
          morse.setDirection(prevState.direction)
          morse.setForeignChars(prevState.includeChars)
          morse.setCase(prevState.caseFormat)
          return {
            outputValue: morse.encrypt()
          }
        } else {
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
          />
          <BlockConnectorEquals />
          <BlockElementOutput 
            outputValue={this.state.outputValue}
          />
        </div>
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