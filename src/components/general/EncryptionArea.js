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

class EncryptionArea extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      affineAlpha: 5,
      affineBeta: 1,
      keyword: 'cipher',
      playSquare: '',
      skytaleLength: 1,
      skytaleProjectedValue: '',
      alphabetActive: false,
      otpKey: '',
      iocInput: 0,
      iocOutput: 0,
      prime_two:
        '290245329165570025116016487217740287508837913295571609463914348778319654489118435855243301969001872061575755804802874062021927719647357060447135321577028929269578574760547268310055056867386875959045119093967972205124270441648450825188877095173754196346551952542599226295413057787340278528252358809329',
      e: 17,
      phi: 0,
      d: 0,
      n: 0,
      timeToCalculate: '0s',
      freqAnal1Open: false,
      freqAnal2Open: false
    }

    this.encrypt = this.encrypt.bind(this)
    this.alphabetUpdate = this.alphabetUpdate.bind(this)
    this.updateKeyword = this.updateKeyword.bind(this)
    this.genRandomKey = this.genRandomKey.bind(this)
    this.indexOfCoincidence = this.indexOfCoincidence.bind(this)
    this.setAlpha = this.setAlpha.bind(this)
    this.setBeta = this.setBeta.bind(this)
    this.setE = this.setE.bind(this);
    this.setPrimeTwo = this.setPrimeTwo.bind(this)
    this.setPrimeOne = this.setPrimeOne.bind(this)
  }

  //General

  alphabetUpdate(evt) {
    this.setState({
      alphabet: evt.target.value
    });
    this.encrypt();
  }

  updateKeyword(evt) {
    let keyword = evt.target.value.toLowerCase();
    this.setState({
      keyword: keyword
    });
    this.encrypt();
  }

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
      }
  
      if(this.props.method === 'otp') {
        this.genRandomKey()
      }

      this.setState({
        alphabet: 'abcdefghijklmnopqrstuvwxyz'
      })

      this.encrypt();
    }
  }

  //Affine
  setAlpha(evt) {
    this.setState({
      affineAlpha: evt.target.value
    });
    this.encrypt();
  }

  setBeta(evt) {
    this.setState({
      affineBeta: evt.target.value
    });
    this.encrypt();
  }

  // otp
  genRandomKey() {
    let randomArr = [];
    let letters = this.state.alphabet.split('');

    let input = [];
    for (let i = 0; i < this.props.input.length; i++) {
      if (this.state.alphabet.indexOf(this.props.input[i] !== -1)) {
        input.push(this.props.input[i]);
      }
    }

    let userInputLength = input.length;

    for (let i = 0; i < userInputLength; i++) {
      randomArr.push(letters[Math.floor(Math.random() * 26)]);
    }

    this.setState({
      otpKey: randomArr.join('')
    });

    this.encrypt();
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

    //don't use foreign chars
    let cleanedInput = inputValue.split('').filter(character => {
      return this.state.alphabet.indexOf(character.toLowerCase()) !== -1;
    });

    //Return if only signs
    if (cleanedInput.length === 0) return;

    // count all the occurences of every letter in the input
    let arrCounts = new Array(26).fill(0);
    for (let character of cleanedInput) {
      let indexOfCharacter = this.state.alphabet.indexOf(
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
  setPrimeOne(val) {
    if (!isNaN(val)) {
      this.setState({
        prime_one: val
      });
    }
    if (val !== '1') {
      this.encrypt();
    }
  }

  setPrimeTwo(val) {
    if (!isNaN(val)) {
      this.setState(prevState => {
        return {
          prime_two: val
        };
      });
    }
    if (val !== '1') {
      this.encrypt();
    }
  }

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
      let alphabet = prevState.alphabet;
      let caseFormat = this.props.caseformat
      let foreignChars = this.props.includeChars;
      let method = this.props.method;
      let direction = this.props.direction

      // IF DIR = CRACK
      if (direction === 'crack') {
        if (method === 'caesar') {
          Caesar.setAll(
            this.props.wordbook, 
            input, 
            alphabet, 
            this.props.cShift, 
            direction, 
            caseFormat, 
            foreignChars)
            this.props.setOutput(Caesar.encrypt())
        } else if (method === 'atbash') {
            this.props.setOutput(Atbash.encrypt())
        } else if (method === 'rot13') {
          Caesar.setAll(this.props.wordbook, input, alphabet, 13, 'decrypt', caseFormat, foreignChars)
          this.props.setOutput(Caesar.encrypt())
        } else {
          this.props.setOutput('')
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
          if (
            !this.props.prime1 ||
            !prevState.prime_two ||
            !prevState.e ||
            this.props.prime1 === '1' ||
            prevState.prime_two === '1'
          ) return null

          Rsa.setUserInput(input)
          Rsa.setPrimeOne(this.props.prime1)
          Rsa.setPrimeTwo(prevState.prime_two)
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
          Otp.setAll(input, caseFormat, foreignChars, direction, prevState.otpKey, alphabet)
          this.props.setOutput(Otp.encrypt())
          break
        case 'atbash':
          Atbash.setAll(input, caseFormat, foreignChars)
          this.props.setOutput(Atbash.encrypt())
          break
        case 'affine':
          Affine.setAll(alphabet, input, prevState.affineAlpha, prevState.affineBeta, direction, foreignChars, caseFormat)
          this.props.setOutput(Affine.encrypt())
          break
        case 'vigenere':
          Vigenere.setAll(input, alphabet, direction, foreignChars, caseFormat, prevState.keyword)
          this.props.setOutput(Vigenere.encrypt())
          break
        case 'playfair':
          Playfair.setAll(input, alphabet, direction, prevState.keyword)
          this.props.setOutput(Playfair.encrypt())
          return {
            playSquare: Playfair.getSquare()
          }
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
            updateKeyword={this.updateKeyword}
            keyword={this.state.keyword}
            alphabet={this.state.alphabet}
            alphabetUpdate={this.alphabetUpdate}
            setAlpha={this.setAlpha}
            setBeta={this.setBeta}
            playSquare={this.state.playSquare}
            skytaleLength={this.state.skytaleLength}
            skytaleProjectedValue={this.state.skytaleProjectedValue}
            alphabetActive={this.state.alphabetActive}
            genRandomKey={this.genRandomKey}
            otpKey={this.state.otpKey}
            setPrimeOne={this.setPrimeOne}
            setPrimeTwo={this.setPrimeTwo}
            setE={this.setE}
            e={this.state.e}
            prime_two={this.state.prime_two}
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
  prime1: state.prime1
})

const mapActionsToProps = {
  onSetWordbook: setWordbook,
  toggleChars: toggleChars,
  setOutput: setOutput,
  toggleCase: toggleCase
}


export default connect(mapStateToProps, mapActionsToProps)(EncryptionArea)
