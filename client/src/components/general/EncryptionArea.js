import React from 'react'
import BlockInput from './BlockInput'
import BlockOutput from './BlockOutput'
import BlockConnectorEquals from './BlockConnectorEquals'
import BlockConnectorPlus from './BlockConnectorPlus'
import BlockSettings from './BlockSettings'
import Modal from '../modal/Modal'
import Caesar from '../caesar/CaesarLogic'
import Affine from '../affine/AffineLogic'
import Vigenere from '../vigenere/VigenereLogic'
import Playfair from '../playfair/PlayfairLogic'
import Morse from '../morse/Morselogic'
import Replace from '../replace/ReplaceLogic'
import Skytale from '../skytale/SkytaleLogic'
import Atbash from '../atbash/AtbashLogic'
import Timeline from '../timeline/Timeline'
import Otp from '../onetimepad/otp'
import Rsa from '../rsa/RSALogic'
import { connect } from 'react-redux'
import setWordbook from '../../actions/wordbook'
import toggleChars from '../../actions/toggleIncludeChars'
import setOutput from '../../actions/setOutput'
import toggleCase from '../../actions/toggleCase'
import updateAlphabet from '../../actions/updateAlphabet'
import setOtpKey from '../../actions/setOtpKey'
import setPlaysquare from '../../actions/setPlaysquare'
import setSkytaleLength from '../../actions/setSkytaleLength'
import setSkytaleProjectedValue from '../../actions/setSkytaleProjectedValue'
import setIocInput from '../../actions/setIocInput'
import setIocOutput from '../../actions/setIocOutput'
import setTimeToCalculate from '../../actions/setTimeToCalculate'
import setRsaPhi from '../../actions/setRsaPhi'
import setRsaN from '../../actions/setRsaN'
import setRsaD from '../../actions/setRsaD'
import setAlphabetActive from '../../actions/setAlphabetActive'
import PresetsModal from '../presetsModal'
import AnalysisModal from '../analysisModal'

class EncryptionArea extends React.PureComponent {
  constructor(props) {
    super(props)

    this.encrypt = this.encrypt.bind(this)
  }

  componentDidMount() {
    this.encrypt()
  }

  componentDidUpdate(prevProps) {
    if(this.props.wordbook === null) {
      this.props.onSetWordbook()
    }

    if (prevProps !== this.props) {
      if (prevProps.method === 'rsa') {
        if(this.props.prime1 === 'Bad input' ||
            this.props.prime2 === 'Bad input' ||
            !this.props.input ||
            !this.props.e) {
              return this.props.setOutput('Bad input')  
            }
        if (prevProps.d !== this.props.d ||
            prevProps.phi !== this.props.phi ||
            prevProps.n !== this.props.n ||
            prevProps.input !== this.props.input ||
            prevProps.e !== this.props.e ||
            prevProps.direction !== this.props.direction ||
            prevProps.method !== this.props.method ||
            prevProps.prime1 !== this.props.prime1 ||
            prevProps.prime2 !== this.props.prime2) {
              this.encrypt()
          }
      }
      else {
        this.encrypt()  
      }
    }
    if(prevProps.input !== this.props.input || prevProps.output !== this.props.output) {
      this.props.setIocInput(this.calcIndexOfCoincidence(true))
      this.props.setIocOutput(this.calcIndexOfCoincidence(false))
    }
    if(prevProps.method !== this.props.method) {
      this.props.updateAlphabet('abcdefghijklmnopqrstuvwxyz')
      if(this.props.method === 'caesar' || 
         this.props.method === 'atbash' ||
         this.props.method === 'rot13') {
        this.props.setAlphabetActive(true)
      } else {
        this.props.setAlphabetActive(false)
      }
    }
  }

  //ioc
  calcIndexOfCoincidence(input) {

    //Check if input or outputfield
    let inputState = this.props.input
    let outputState = this.props.output

    if (input) {
      if (!inputState || inputState.length === 0) return;
    }
    if (!input) {
      if (!outputState || outputState.length === 0) return;
    }

    //calc for input or output -> true = input, false = output
    let inputValue = input
      ? inputState.toString()
      : outputState.toString()

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    //don't use foreign chars
    let cleanedInput = inputValue.split('').filter(character => {
      return alphabet.indexOf(character.toLowerCase()) !== -1;
    });

    //Return if only signs
    if (cleanedInput.length === 0) return;

    // count all the occurences of every letter in the input
    let arrCounts = new Array(26).fill(0);
    for (let character of cleanedInput) {
      let indexOfCharacter = alphabet.indexOf(
        character.toLowerCase()
      );
      arrCounts[indexOfCharacter]++;
    }

    // don't use letters that have a count of one as 1 * (1 - 1) === 0
    let arrCountsCleaned = arrCounts.filter(element => element > 1);

    // calculate count ( count - 1 ) and sum all the results up
    let countCi = arrCountsCleaned
      .map(count => {
        return count * (count - 1);
      })
      .reduce((a, b) => a + b, 0);

    //final calculation with countsum and inputlength
    let ioc = countCi / (cleanedInput.length * (cleanedInput.length - 1))

    return !isNaN(ioc) ? ioc : '0';
  }

  encrypt() {
    let input = this.props.input;
    let alphabet = this.props.alphabet;
    let caseFormat = this.props.caseformat
    let foreignChars = this.props.includeChars;
    let method = this.props.method;
    let direction = this.props.direction

    if (direction === 'crack') {
      if (method === 'caesar' || method === 'rot13') {
        Caesar.setAll(this.props.wordbook, input, alphabet, method === 'rot13' ? 13 : this.props.cShift, direction, caseFormat, foreignChars)
        return this.props.setOutput(Caesar.encrypt())
      } else if (method === 'atbash') {
          Atbash.setAll(input, caseFormat, foreignChars)
          return this.props.setOutput(Atbash.encrypt())
      } else {
        return this.props.setOutput('')
      }
    }

    switch (method) {
      case 'rot13':
        Caesar.setAll(null, input, alphabet, 13, direction, caseFormat, foreignChars)
        this.props.setOutput(Caesar.encrypt())
        break
      case 'caesar':
        Caesar.setAll(null, input, alphabet, this.props.cShift, direction, caseFormat, foreignChars)
        this.props.setOutput(Caesar.encrypt())
        break
      case 'rsa':
        Rsa.setAll(input, this.props.prime1, this.props.prime2, this.props.e)

        this.props.setRsaN(Rsa.calcN())
        this.props.setRsaPhi(Rsa.calcPhi())
        this.props.setRsaD(Rsa.calcD())

        const output = Rsa.calc(direction)
        this.props.setOutput(output[0])
        this.props.setTimeToCalculate(output[1])
        break
      case 'otp':
        Otp.setAll(input, caseFormat, foreignChars, direction, this.props.otpKey, alphabet)
        this.props.setOutput(Otp.encrypt())
        break
      case 'atbash':
        Atbash.setAll(input, caseFormat, foreignChars)
        this.props.setOutput(Atbash.encrypt())
        break
      case 'affine':
        Affine.setAll(alphabet, input, this.props.affine_alpha, this.props.affine_beta, direction, foreignChars, caseFormat)
        this.props.setOutput(Affine.encrypt())
        break
      case 'vigenere':
        Vigenere.setAll(input, alphabet, direction, foreignChars, caseFormat, this.props.keywordVigenere)
        this.props.setOutput(Vigenere.encrypt())
        break
      case 'playfair':
        Playfair.setAll(input, alphabet, direction, this.props.keywordPlayfair)
        this.props.setOutput(Playfair.encrypt())
        this.props.setPlaysquare(Playfair.getSquare())
        break
      case 'morse':
        Morse.setAll(input, direction)
        this.props.setOutput(Morse.encrypt())
        break
      case 'replace':
        Replace.setAll(input, this.props.toReplaceLetter, this.props.replaceLetter)
        this.props.setOutput(Replace.encrypt())
        break
      case 'skytale':
        Skytale.setAll(direction, caseFormat, input, this.props.ringLength, foreignChars)
        let skytale = Skytale.encrypt()
        let projected = Skytale.getProjectedValue()
        this.props.setSkytaleProjectedValue(projected)
        this.props.setOutput(skytale[0])
        this.props.setSkytaleLength(skytale[1])
        break
      default:
        return null
    }
  }

  render() {
    return (
      <div id='converter'>
        <Timeline />
        <div id='block_container'>
          <BlockInput />
          <BlockConnectorPlus />
          <BlockSettings />
          <BlockConnectorEquals />
          <BlockOutput />
        </div>
        <Modal />
        <PresetsModal />
        <AnalysisModal />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toReplaceLetter: state.replace.toReplaceLetter,
  replaceLetter: state.replace.replaceLetter,
  wordbook: state.wordbook,
  cShift: state.cShift,
  direction: state.direction,
  input: state.input,
  output: state.output,
  method: state.method,
  includeChars: state.includeChars,
  caseformat: state.caseformat,
  prime1: state.rsa.prime1,
  prime2: state.rsa.prime2,
  alphabet: state.alphabet.alphabet,
  alphabetActive: state.alphabet.active,
  keywordVigenere: state.keywordVigenere,
  keywordPlayfair: state.keywordPlayfair,
  affine_alpha: state.affine.affine_alpha,
  affine_beta: state.affine.affine_beta,
  otpKey: state.otpKey,
  playSquare: state.playSquare,
  ringLength: state.skytale.ringLength,
  skytaleLength: state.skytale.length,
  skytaleProjectedValue: state.projectedValue,
  iocInput: state.ioc.input,
  iocOutput: state.ioc.output,
  timeToCalculate: state.rsa.timeToCalculate,
  phi: state.rsa.phi,
  n: state.rsa.n,
  d: state.rsa.d,
  e: state.rsa.e
})

const mapActionsToProps = {
  onSetWordbook: setWordbook,
  toggleChars: toggleChars,
  setOutput: setOutput,
  toggleCase: toggleCase,
  updateAlphabet: updateAlphabet,
  setOtpKey: setOtpKey,
  setPlaysquare: setPlaysquare,
  setSkytaleLength: setSkytaleLength,
  setSkytaleProjectedValue: setSkytaleProjectedValue,
  setIocInput: setIocInput,
  setIocOutput: setIocOutput,
  setTimeToCalculate: setTimeToCalculate,
  setRsaPhi: setRsaPhi,
  setRsaN: setRsaN,
  setRsaD: setRsaD,
  setAlphabetActive: setAlphabetActive
}


export default connect(mapStateToProps, mapActionsToProps)(EncryptionArea)
