import React from 'react'
import BlockElementInput from '../input/BlockElementInput'
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
import Otp from '../onetimepad/otp'
import Rsa from '../rsa/RSALogic'


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
      otpKey: '',
      iocInput: 0,
      iocOutput: 0,
      prime_one: '250556952327646214427246777488032351712139094643988394726193347352092526616305469220133287929222242315761834129196430398011844978805263868522770723615504744438638381670321613949280530254014602887707960375752016807510602846590492724216092721283154099469988532068424757856392563537802339735359978831013',
      prime_two: '290245329165570025116016487217740287508837913295571609463914348778319654489118435855243301969001872061575755804802874062021927719647357060447135321577028929269578574760547268310055056867386875959045119093967972205124270441648450825188877095173754196346551952542599226295413057787340278528252358809329',
      e: 17,
      phi: 0,
      d: 0,
      n: 0,
      timeToCalculate: '0s'
    }

    this.encrypt = this.encrypt.bind(this)
    this.alphabetUpdate = this.alphabetUpdate.bind(this)
    this.selectCase = this.selectCase.bind(this)
    this.includeChars = this.includeChars.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.changeDirection = this.changeDirection.bind(this)
    this.changeMethod = this.changeMethod.bind(this)
    this.updateKeyword = this.updateKeyword.bind(this)
    this.caesarPlusMinus = this.caesarPlusMinus.bind(this)
    this.skytalePlusMinus = this.skytalePlusMinus.bind(this)
    this.switchModal = this.switchModal.bind(this)
    this.setReplaceLetters = this.setReplaceLetters.bind(this)
    this.genRandomKey = this.genRandomKey.bind(this)
    this.indexOfCoincidenceInputOutput = this.indexOfCoincidenceInputOutput.bind(this)
    this.setE = this.setE.bind(this)
    this.setPrimeTwo = this.setPrimeTwo.bind(this)
    this.setPrimeOne = this.setPrimeOne.bind(this)
  }

  //Modal
  switchModal () {
    if (!this.state.modalVisible) {
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
  changeMethod (evt) {
    let val
    const methods = ['caesar', 'skytale', 'affine', 'vigenere', 'playfair', 'morse', 'replace', 'atbash', 'otp', 'rsa']
    if (methods.indexOf(evt) !== -1) {
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

    switch(val) {
      case 'caesar':
        this.setState({
          alphabetActive: true,
          methodNameInset: "Caesar's Cipher"
        })
        break
      case 'otp':
        this.genRandomKey()
        this.setState({
          alphabetActive: false,
          methodNameInset: 'One Time Pad'
        })
        break
      case 'atbash':
        this.setState({
          alphabetActive: false,
          methodNameInset: 'Atbash Cipher'
        })
        break
      case 'affine':
        this.setState({
          alphabetActive: false,
          methodNameInset: 'Atbash Cipher'
        })
        break
      case 'vigenere':
        this.setState({
          keyword: 'cipher',
          alphabetActive: false,
          methodNameInset: 'Vigenère Cipher'
        })
        break
      case 'playfair':
        this.setState({
          keyword: 'cipher',
          alphabetActive: false,
          methodNameInset: 'Playfair Cipher'
        })
        break
      case 'morse':
        this.setState({
          alphabetActive: false,
          methodNameInset: 'Morse Code'
        })
        break
      case 'replace':
        this.setState({
          alphabetActive: false,
          methodNameInset: 'Replace'
        })
        break
      case 'skytale':
        this.setState({
          alphabetActive: false,
          methodNameInset: 'Skytale'
        })
        break
      case 'rsa':
        this.setState({
          methodNameInset: 'RSA',
          alphabetActive: false
        })
        break
      default:
         return null
    }

    this.encrypt()
  }
  
  async updateInput(evt) {
    if (this.state.inputValue === 'The quick brown fox jumps over the lazy dog.') {
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

  caesarPlusMinus = (evt) => {
    if (evt.target.innerText === '+') {
      if (this.state.cShift > 24) {
        this.setState({
          cShift: 0
        })
      } else {
        this.setState(prevState => {
          return {
            cShift: prevState.cShift + 1
          }
        })
      }
    } else {
      if (this.state.cShift < 1) {
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
  }

  skytalePlusMinus = (evt) => {
    if (evt.target.innerText === '+') {
      if (this.state.ringLength > 19) {
        this.setState({
          ringLength: 3
        })
      } else {
        this.setState(prevState => {
          return {
            ringLength: prevState.ringLength + 1
          }
        })
      }
    } else if (evt.target.innerText === '-') {
      if (this.state.ringLength < 4) {
        this.setState({
          ringLength: 20
        })
      } else {
        this.setState(prevState => {
          return {
            ringLength: prevState.ringLength - 1
          }
        })
      }
    }
    this.encrypt()
  }

  async componentDidMount() {
    if (this.state.wordbook === '') {
      const url = 'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json'
      const response = await fetch(url)
      const data = await response.json()
      this.setState({
        wordbook: data
      })
    }
  }
  
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.outputValue !== this.state.outputValue) {
      this.indexOfCoincidenceInputOutput()
    }
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
    if (evt.target.id === 'to_replace_letter') {
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
  
  // otp 
  genRandomKey = () => {
    let randomArr = []
    let letters = this.state.alphabet.split('')
  
    let input = []
    for (let i = 0; i < this.state.inputValue.length; i++) {
      if (this.state.alphabet.indexOf(this.state.inputValue[i] !== -1)) {
        input.push(this.state.inputValue[i])
      }
    }
  
    let userInputLength = input.length;
  
    for (let i = 0; i < userInputLength; i++) {
      randomArr.push(letters[Math.floor(Math.random() * 26)])
    }
  
    this.setState({
      otpKey: randomArr.join('')
    })
  
    this.encrypt()
  }

  //ioc
  calcIndexOfCoincidence = (input) => {
    if (input) {
      if (!this.state.inputValue) return
      if (this.state.inputValue.length === 0) return
    }
    if (!input) {
      if (!this.state.outputValue) return
      if (this.state.outputValue.length === 0) return
    }
  
    //calc for input or output -> true = input, false = output
    let inputValue = input ? this.state.inputValue.toString() : this.state.outputValue.toString()
  
  
    //don't use foreign chars
    let cleanedInput = inputValue.split('').filter(character => {
      return this.state.alphabet.indexOf(character.toLowerCase()) !== -1
    })
  
    //Return if only signs
    if (cleanedInput.length === 0) return
  
    // count all the occurences of every letter in the input
    let arrCounts = new Array(26).fill(0)
    for (let character of cleanedInput) {
      let indexOfCharacter = this.state.alphabet.indexOf(character.toLowerCase())
      arrCounts[indexOfCharacter]++
    }
  
    // don't use letters that have a count of one as 1 * (1 - 1) === 0
    let arrCountsCleaned = arrCounts.filter(element => element > 1)
  
    // calculate count ( count - 1 ) and sum all the results up
    let countCi = arrCountsCleaned.map(count => {
      return count * (count - 1)
    }).reduce((a, b) => a + b, 0)
  
    //final calculation with countsum and inputlength
    let ioc = countCi / (cleanedInput.length * (cleanedInput.length - 1))
  
    return !isNaN(ioc) ? ioc : '0'
  }
  
  indexOfCoincidenceInputOutput = () => {
    this.setState({
      iocInput: this.calcIndexOfCoincidence(true),
      iocOutput: this.calcIndexOfCoincidence(false)
    })
  }
  
  //rsa
  setPrimeOne(val) {
    if (!isNaN(val)) {
      this.setState({
        prime_one: val
      })
    }
    this.encrypt()
  }
  
  setPrimeTwo(val) {
    if (!isNaN(val)) {
      this.setState(prevState => {
        return {
          prime_two: val
        }
      })
    }
    this.encrypt()
  }
  
  setE(val) {
    let tVal = val.target.value
    if (!isNaN(tVal) && tVal !== null) {
      this.setState(prevState => {
        return {
          e: tVal
        }
      })
    }
    this.encrypt()
  }

  async encrypt () {
    this.setState(prevState => {
      let input = prevState.inputValue
      let alphabet = prevState.alphabet
      let direction = prevState.direction
      let caseFormat = prevState.caseFormat
      let foreignChars = prevState.includeChars
      let method = prevState.method
      
      if (direction === 'crack') {
        if(method === 'caesar') {
          return {
            outputValue: Caesar.encrypt()
          }
        }
        else if (method === 'atbash') {
          return {
            outputValue: Atbash.encrypt()
          }
        }
        else {
          return {
            outputValue: ''
          }
        }
      }

      switch (method) {
        case 'caesar':
          Caesar.setUserInput(input)
          Caesar.setAlphabet(alphabet)
          Caesar.setSaltInput(prevState.cShift)
          Caesar.setDirection(direction)
          Caesar.setWordbook(prevState.wordbook)
          Caesar.setCase(caseFormat)
          Caesar.setForeignChars(foreignChars)
          console.log(input, alphabet, direction, caseFormat, foreignChars)
          return {
            outputValue: Caesar.encrypt()
          }
        case 'rsa':
          if (!prevState.prime_one || !prevState.prime_two || !prevState.e || !input) return
      
          Rsa.setUserInput(input)
          Rsa.setPrimeOne(prevState.prime_one)
          Rsa.setPrimeTwo(prevState.prime_two)
          Rsa.setE(prevState.e)
      
          if (direction === 'encrypt') {
            return {
              n: Rsa.calcN(),
              phi: Rsa.calcPhi(),
              d: Rsa.calcD(),
              outputValue: Rsa.encrypt()[0] !== '!' ? Rsa.encrypt()[0] : Rsa.encrypt(),
              timeToCalculate: Rsa.encrypt()[1] !== '!' ? Rsa.encrypt()[1] : 'something went wrong here'
            }
          } else if (direction === 'decrypt') {
            let decrypted = Rsa.decrypt()
            return {
              outputValue: decrypted[0],
              timeToCalculate: decrypted[1]
            }
          }
          break
        case 'otp':
          Otp.setUserInput(input)
          Otp.setCase(caseFormat)
          Otp.setForeignChars(foreignChars)
          Otp.setDirection(direction)
          Otp.setKey(prevState.otpKey)
          Otp.setAlphabet(alphabet)
          return {
            outputValue: Otp.encrypt()
          }
        case 'atbash':
          Atbash.setUserInput(input)
          Atbash.setCase(caseFormat)
          Atbash.setForeignChars(foreignChars)
          return {
            outputValue: Atbash.encrypt()
          }
        case 'affine':
          Affine.setAlphabet(alphabet)
          Affine.setUserInput(input)
          Affine.setAlpha(prevState.affineAlpha)
          Affine.setBeta(prevState.affineBeta)
          Affine.setDirection(direction)
          Affine.setForeignChars(foreignChars)
          Affine.setCase(caseFormat)
          return {
            outputValue: Affine.encrypt()
          }
        case 'vigenere':
          Vigenere.setUserInput(input)
          Vigenere.setAlphabet(alphabet)
          Vigenere.setDirection(direction)
          Vigenere.setForeignChars(foreignChars)
          Vigenere.setCase(caseFormat)
          Vigenere.setKeyword(prevState.keyword)
          return {
            outputValue: Vigenere.encrypt()
          }
        case 'playfair':
          Playfair.setUserInput(input)
          Playfair.setAlphabet(alphabet)
          Playfair.setDirection(direction)
          Playfair.setKeyPhrase(prevState.keyword)
          return {
            outputValue: Playfair.encrypt(),
            playSquare: Playfair.getSquare()
          }
        case 'morse':
          Morse.setUserInput(input)
          Morse.setDirection(direction)
          return {
            outputValue: Morse.encrypt()
          }
        case 'replace':
          Replace.setUserInput(input)
          Replace.setToReplaceLetter(prevState.toReplaceLetter)
          Replace.setReplaceLetter(prevState.replaceLetter)
          return {
            outputValue: Replace.encrypt()
          }
        case 'skytale':
          Skytale.setDirection(direction)
          Skytale.setCase(caseFormat)
          Skytale.setUserInput(input)
          Skytale.setRingLength(prevState.ringLength)
          return {
            outputValue: Skytale.encrypt()[0],
            skytaleLength: Skytale.encrypt()[1],
            skytaleProjectedValue: Skytale.getProjectedValue()
          }
        default:
          return null
      }
    })
  }

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
            ioc = {this.state.iocInput}
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
            genRandomKey = {this.genRandomKey}
            otpKey = {this.state.otpKey}
            setPrimeOne = {this.setPrimeOne}
            setPrimeTwo = {this.setPrimeTwo}
            setE = {this.setE}
            e = {this.state.e}
            prime_one = {this.state.prime_one}
            prime_two = {this.state.prime_two}
            phi = {this.state.phi}
            n = {this.state.n}
            d = {this.state.d}
            timeToCalculate = {this.state.timeToCalculate}
            caesarPlusMinus = {this.caesarPlusMinus}
            skytalePlusMinus = {this.skytalePlusMinus}
          />
          <BlockConnectorEquals />
          <BlockElementOutput 
            outputValue={this.state.outputValue}
            ioc = {this.state.iocOutput}
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