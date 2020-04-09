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
import toggleChars from '../../actions/includeChars'
import setOutput from '../../actions/setOutput'
import toggleCase from '../../actions/toggleCase'
import updateAlphabet from '../../actions/updateAlphabet'
import setOtpKey from '../../actions/setOtpKey'
import setPlaysquare from '../../actions/setPlaysquare'

class EncryptionArea extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      skytaleLength: 1,
      skytaleProjectedValue: '',
      alphabetActive: false,
      iocInput: 0,
      iocOutput: 0,
      e: 17,
      phi: 0,
      d: 0,
      n: 0,
      timeToCalculate: '0s',
      freqAnal1Open: false,
      freqAnal2Open: false
    }

    this.encrypt = this.encrypt.bind(this)
    this.indexOfCoincidence = this.indexOfCoincidence.bind(this)
    this.setE = this.setE.bind(this)
  }

  //General

  async componentDidMount() {
    this.encrypt()
    if(this.props.wordbook === null) {
      this.props.onSetWordbook()
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps !== this.props) {
      this.indexOfCoincidence()
      this.encrypt()
    }
    if(prevProps.method !== this.props.method) {
      if(this.props.method === 'caesar') {
        this.setState({
          alphabetActive: true
        })
      } else {
        this.setState({
          alphabetActive: false
        })
      }
      
      this.props.updateAlphabet('abcdefghijklmnopqrstuvwxyz')

      this.encrypt();
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

  indexOfCoincidence() {
    this.setState({
      iocInput: this.calcIndexOfCoincidence(true),
      iocOutput: this.calcIndexOfCoincidence(false)
    });
  }

  //rsa

  setE(val) {
    let tVal = val.target.value;
    if (!isNaN(tVal) && tVal !== null) {
      this.setState(prevState => {
        return {
          e: tVal
        };
      });
    }
    this.encrypt();
  }

  async encrypt() {
    this.setState(prevState => {
      let input = this.props.input;
      let alphabet = this.props.alphabet;
      let caseFormat = this.props.caseformat
      let foreignChars = this.props.includeChars;
      let method = this.props.method;
      let direction = this.props.direction

      // IF DIR = CRACK
      if (direction === 'crack') {
        if (method === 'caesar' || method === 'rot13') {
          Caesar.setAll(this.props.wordbook, input, alphabet, method === 'rot13' ? 13 : this.props.cShift, direction, caseFormat, foreignChars)
          return this.props.setOutput(Caesar.encrypt())
        } else if (method === 'atbash') {
            return this.props.setOutput(Atbash.encrypt())
        } else {
          return this.props.setOutput('')
        }
      }

      // IF DIR = ENC OR DEC
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
          if (this.props.prime1 === 'bad input' ||
              this.props.prime2 === 'bad input' ||
              !prevState.e
              ) {
            return this.props.setOutput('bad input')  
          } 

          Rsa.setUserInput(input)
          Rsa.setPrimeOne(this.props.prime1)
          Rsa.setPrimeTwo(this.props.prime2)
          Rsa.setE(prevState.e)

          if (direction === 'encrypt') {
            let n = Rsa.calcN()
            let phi = Rsa.calcPhi()
            let d = Rsa.calcD()
            let timeToCalculate
            if(input.length > 0) {
              let output = Rsa.encrypt()[0] !== '!' ? Rsa.encrypt()[0] : Rsa.encrypt()
              timeToCalculate = Rsa.encrypt()[1] !== '!' ? Rsa.encrypt()[1] : 'something went wrong here'
              this.props.setOutput(output)  
            }
            return {
              n,
              phi,
              d,
              timeToCalculate
            }
          } else if (direction === 'decrypt') {
            let decrypted = Rsa.decrypt()
            this.props.setOutput(decrypted[0])
            return {
              timeToCalculate: decrypted[1]
            }
          }
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
          this.props.setOutput(Skytale.encrypt()[0])
          return {
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
      <div id='converter'>
        <Timeline />
        <div id='block_container'>
          <BlockInput
            ioc={this.state.iocInput}
          />
          <BlockConnectorPlus />
          <BlockSettings
            skytaleLength={this.state.skytaleLength}
            skytaleProjectedValue={this.state.skytaleProjectedValue}
            alphabetActive={this.state.alphabetActive}
            setE={this.setE}
            e={this.state.e}
            phi={this.state.phi}
            n={this.state.n}
            d={this.state.d}
            timeToCalculate={this.state.timeToCalculate}
          />
          <BlockConnectorEquals />
          <BlockOutput
            ioc={this.state.iocOutput}
          />
        </div>
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toReplaceLetter: state.replace.toReplaceLetter,
  replaceLetter: state.replace.replaceLetter,
  wordbook: state.wordbook,
  cShift: state.cShift,
  ringLength: state.ringLength,
  direction: state.direction,
  input: state.input,
  output: state.output,
  method: state.method,
  includeChars: state.includeChars,
  caseformat: state.caseformat,
  prime1: state.prime1,
  prime2: state.prime2,
  alphabet: state.alphabet,
  keywordVigenere: state.keywordVigenere,
  keywordPlayfair: state.keywordPlayfair,
  affine_alpha: state.affine.affine_alpha,
  affine_beta: state.affine.affine_beta,
  otpKey: state.otpKey,
  playSquare: state.playSquare
})

const mapActionsToProps = {
  onSetWordbook: setWordbook,
  toggleChars: toggleChars,
  setOutput: setOutput,
  toggleCase: toggleCase,
  updateAlphabet: updateAlphabet,
  setOtpKey: setOtpKey,
  setPlaysquare: setPlaysquare
}


export default connect(mapStateToProps, mapActionsToProps)(EncryptionArea)
