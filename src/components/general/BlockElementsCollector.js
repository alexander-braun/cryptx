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

class BlockElementsCollector extends React.Component  {
  constructor(props) {
    super()
    this.state = {
      modalClassName: '',
      modalVisible: false,
      method: 'caesar',
      methodNameInset: "Caesar's Cipher",
      inputValue: 'Write Something...',
      outputValue: 'Zulwh Vrphwklqj...',
      inputValueChanged: false,
      direction: 'encrypt',
      caseFormat: 'maintain',
      includeChars: 'include',
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      cShift: 3,
      wordbook: '',
      affineAlpha: 5,
      affineBeta: 1,
      keywordVigenere: 'cipher',
      keywordPlayfair: 'playfair example',
      playSquare: ''
    }
    
    this.minus = this.minus.bind(this)
    this.plus = this.plus.bind(this)
    this.encrypt = this.encrypt.bind(this)
    this.alphabetUpdate = this.alphabetUpdate.bind(this)
    this.selectCase = this.selectCase.bind(this)
    this.includeChars = this.includeChars.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.clearTextareaInput = this.clearTextareaInput.bind(this)
    this.changeDirection = this.changeDirection.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.changeMethod = this.changeMethod.bind(this)
    this.updateKeyword = this.updateKeyword.bind(this)
    this.updateKeywordPlayfair = this.updateKeywordPlayfair.bind(this)
  }

  //Modal

  openModal() {
    this.setState({
        modalVisible: true,
        modalClassName: 'modal_open'
    })
  }

  closeModal() {
      this.setState({
          modalVisible: false,
          modalClassName: ''
      })
  }

  //General

  changeMethod(evt) {
    let val = evt.target.value
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
            methodNameInset: 'Vigenère Cipher'
        })
    } else if(val === 'playfair') {
        this.setState({
            methodNameInset: 'Playfair Cipher'
        })
    }
    this.setState({
          method: val
    })
}

  clearTextareaInput(evt) {
    if(this.state.inputValue === 'Write Something...' && this.state.inputValueChanged === false) {
      this.setState({
        inputValue: '',
        inputValueChanged: true
      })
      evt.target.value = ''
    } 
  }

  updateInput(evt) {
    this.setState({
      inputValue: evt.target.value
    })
  }

  includeChars(evt) {
    this.setState({
        includeChars: evt.target.value,
    })
  }

  selectCase(evt) {
    this.setState({
        caseFormat: evt.target.value
    })
  }

  alphabetUpdate(evt) {
    this.setState({
      alphabet: evt.target.value
    })
  }

  changeDirection(evt) {
      this.setState({
        direction: evt.target.value
      })
  }

  //Caesar

  minus = () => {
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
  }
  
  plus = () => {
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

  //Vigenere

  updateKeyword = (evt) => {
    this.setState({
        keywordVigenere: evt.target.value  
    })
  }

  updateKeywordPlayfair = (evt) => {
    this.setState({
      keywordPlayfair: evt.target.value
    })
  }

  //Affine

  setAlpha = (evt) => {
    this.setState({
      affineAlpha: evt.target.value
    })
  }

  setBeta = (evt) => {
    this.setState({
      affineBeta: evt.target.value
    })
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
          vigenere.setKeyword(prevState.keywordVigenere)
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
          playfair.setKeyPhrase(prevState.keywordPlayfair)
          return {
            outputValue: playfair.encrypt(),
            playSquare: playfair.getSquare()
          }
        }
      }
    })
  };

  render() {
    return (
      <div className={this.state.modalClassName}>
        <Header />
        <div id = "block_container">
          <BlockElementInput 
            inputValue={this.state.inputValue}
            updateInput={this.updateInput}
            clearTextareaInput={this.clearTextareaInput}
            encrypt={this.encrypt}
          />
          <BlockConnectorPlus />
          <BlockElementSettings
            updateKeyword={this.updateKeyword}
            keywordVigenere={this.state.keywordVigenere}
            changeDirection={this.changeDirection}
            method={this.state.method}
            methodNameInset={this.state.methodNameInset}
            openModal={this.openModal}
            alphabet={this.state.alphabet} 
            alphabetUpdate = {this.alphabetUpdate}
            cShift = {this.state.cShift}
            minus = {this.minus}
            plus = {this.plus}
            selectCase = {this.selectCase}
            includeChars = {this.includeChars}
            encrypt = {this.encrypt}
            direction = {this.state.direction}
            setAlpha = {this.setAlpha}
            setBeta = {this.setBeta}
            keywordPlayfair = {this.state.keywordPlayfair}
            updateKeywordPlayfair = {this.updateKeywordPlayfair}
            playSquare = {this.state.playSquare}
          />
          <BlockConnectorEquals />
          <BlockElementOutput 
            outputValue={this.state.outputValue}
          />
        </div>
        <Modal 
          className 
          method = {this.state.method}
          modalVisible = {this.state.modalVisible}
          closeModal = {this.closeModal}
          changeMethod = {this.changeMethod}
          encrypt = {this.encrypt}
        />
      </div>

    )
  }
}

export default BlockElementsCollector