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
import methodNamesAll from './MethodNames'
import { connect } from 'react-redux'
import setWordbook from '../../actions/wordbook'

class EncryptionArea extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      method: 'skytale',
      methodNameInset: 'Skytale',
      inputValue: 'The quick brown fox jumps over the lazy dog.',
      outputValue: 'Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt.',
      direction: 'encrypt',
      caseFormat: 'maintain',
      includeChars: 'include',
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      affineAlpha: 5,
      affineBeta: 1,
      keyword: 'cipher',
      playSquare: '',
      ringLength: 8,
      skytaleLength: 1,
      skytaleProjectedValue: '',
      alphabetActive: false,
      otpKey: '',
      iocInput: 0,
      iocOutput: 0,
      prime_one:
        '250556952327646214427246777488032351712139094643988394726193347352092526616305469220133287929222242315761834129196430398011844978805263868522770723615504744438638381670321613949280530254014602887707960375752016807510602846590492724216092721283154099469988532068424757856392563537802339735359978831013',
      prime_two:
        '290245329165570025116016487217740287508837913295571609463914348778319654489118435855243301969001872061575755804802874062021927719647357060447135321577028929269578574760547268310055056867386875959045119093967972205124270441648450825188877095173754196346551952542599226295413057787340278528252358809329',
      e: 17,
      phi: 0,
      d: 0,
      n: 0,
      timeToCalculate: '0s',
      freqAnal1Open: false,
      freqAnal2Open: false
    };

    this.encrypt = this.encrypt.bind(this);
    this.alphabetUpdate = this.alphabetUpdate.bind(this);
    this.selectCase = this.selectCase.bind(this);
    this.includeChars = this.includeChars.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.changeDirection = this.changeDirection.bind(this);
    this.changeMethod = this.changeMethod.bind(this);
    this.updateKeyword = this.updateKeyword.bind(this);
    this.skytalePlusMinus = this.skytalePlusMinus.bind(this);
    this.genRandomKey = this.genRandomKey.bind(this);
    this.indexOfCoincidence = this.indexOfCoincidence.bind(this);
    this.setAlpha = this.setAlpha.bind(this)
    this.setBeta = this.setBeta.bind(this)
    this.setE = this.setE.bind(this);
    this.setPrimeTwo = this.setPrimeTwo.bind(this);
    this.setPrimeOne = this.setPrimeOne.bind(this);
  }

  //General
  changeMethod(evt) {
    let val;
    if (Object.keys(methodNamesAll).indexOf(evt) !== -1) {
      val = evt;
    } else {
      val = evt.target.value || evt.target.getAttribute('value');
    }

    this.setState({
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      caseFormat: 'maintain',
      includeChars: 'include',
      method: val
    });

    if(val === 'caesar') {
      this.setState({
        alphabetActive: true
      })
    }

    if(val === 'otp') {
      this.genRandomKey()
    }

    this.setState({
      methodNameInset: methodNamesAll[val]
    })
    
    this.encrypt();
  }

  async updateInput(evt) {
    if (
      this.state.inputValue === 'The quick brown fox jumps over the lazy dog.'
    ) {
      this.setState({
        inputValue: ''
      })
    } else {
      this.setState({
        inputValue: evt.target.value
      });
    }
    this.encrypt();
  }

  includeChars(evt) {
    this.setState({
      includeChars: evt.target.value
    });
    this.encrypt();
  }

  selectCase(evt) {
    this.setState({
      caseFormat: evt.target.value
    });
    this.encrypt();
  }

  alphabetUpdate(evt) {
    this.setState({
      alphabet: evt.target.value
    });
    this.encrypt();
  }

  changeDirection(evt) {
    this.setState({
      direction: evt.target.value
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

  skytalePlusMinus(evt) {
    if (evt.target.innerText === '+') {
      if (this.state.ringLength > 19) {
        this.setState({
          ringLength: 3
        });
      } else {
        this.setState(prevState => {
          return {
            ringLength: prevState.ringLength + 1
          };
        });
      }
    } else if (evt.target.innerText === '-') {
      if (this.state.ringLength < 4) {
        this.setState({
          ringLength: 20
        });
      } else {
        this.setState(prevState => {
          return {
            ringLength: prevState.ringLength - 1
          };
        });
      }
    }
    this.encrypt();
  }

  async componentDidMount() {
    this.encrypt()
    if(this.props.wordbook === null) {
      this.props.onSetWordbook()
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.outputValue !== this.state.outputValue) {
      this.indexOfCoincidence();
    }
    if(prevProps !== this.props) {
      this.encrypt()
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

  // Skytale
  setSkytaleRing(evt) {
    this.setState({
      ringLength: evt.target.value
    });
  }

  // otp
  genRandomKey() {
    let randomArr = [];
    let letters = this.state.alphabet.split('');

    let input = [];
    for (let i = 0; i < this.state.inputValue.length; i++) {
      if (this.state.alphabet.indexOf(this.state.inputValue[i] !== -1)) {
        input.push(this.state.inputValue[i]);
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
    let inputState = this.state.inputValue
    let outputState = this.state.outputValue

    if (input) {
      if (!inputState || inputState.length === 0) return;
    }
    if (!input) {
      if (!outputState || outputState.length === 0) return;
    }

    //calc for input or output -> true = input, false = output
    let inputValue = input
      ? inputState.toString()
      : outputState.toString();

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
    let ioc = countCi / (cleanedInput.length * (cleanedInput.length - 1));

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
      let input = prevState.inputValue;
      let alphabet = prevState.alphabet;
      let direction = prevState.direction;
      let caseFormat = prevState.caseFormat;
      let foreignChars = prevState.includeChars;
      let method = prevState.method;

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
          return {
            outputValue: Caesar.encrypt()
          }
        } else if (method === 'atbash') {
          return {
            outputValue: Atbash.encrypt()
          }
        } else if (method === 'rot13') {
          Caesar.setAll(this.props.wordbook, input, alphabet, 13, 'decrypt', caseFormat, foreignChars)
          return {
            outputValue: Caesar.encrypt()
          }
        } else {
          return {
            outputValue: ''
          }
        }
      }

      // IF DIR = ENC OR DEC
      switch (method) {
        case 'rot13':
          Caesar.setAll(null, input, alphabet, 13, direction, caseFormat, foreignChars)
          return {
            outputValue: Caesar.encrypt()
          };
        case 'caesar':
          Caesar.setAll(null, input, alphabet, this.props.cShift, direction, caseFormat, foreignChars)
          return {
            outputValue: Caesar.encrypt()
          };
        case 'rsa':
          if (
            !prevState.prime_one ||
            !prevState.prime_two ||
            !prevState.e ||
            !input ||
            prevState.prime_one === '1' ||
            prevState.prime_two === '1'
          ) return null

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
          Otp.setAll(input, caseFormat, foreignChars, direction, prevState.otpKey, alphabet)
          return {
            outputValue: Otp.encrypt()
          }
        case 'atbash':
          Atbash.setAll(input, caseFormat, foreignChars)
          return {
            outputValue: Atbash.encrypt()
          }
        case 'affine':
          Affine.setAll(alphabet, input, prevState.affineAlpha, prevState.affineBeta, direction, foreignChars, caseFormat)
          return {
            outputValue: Affine.encrypt()
          }
        case 'vigenere':
          Vigenere.setAll(input, alphabet, direction, foreignChars, caseFormat, prevState.keyword)
          return {
            outputValue: Vigenere.encrypt()
          }
        case 'playfair':
          Playfair.setAll(input, alphabet, direction, prevState.keyword)
          return {
            outputValue: Playfair.encrypt(),
            playSquare: Playfair.getSquare()
          }
        case 'morse':
          Morse.setAll(input, direction)
          return {
            outputValue: Morse.encrypt()
          }
        case 'replace':
          Replace.setAll(input, this.props.toReplaceLetter, this.props.replaceLetter)
          return {
            outputValue: Replace.encrypt()
          }
        case 'skytale':
          Skytale.setAll(direction, caseFormat, input, prevState.ringLength)
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
      <div id='converter'>
        <Timeline changeMethod={this.changeMethod} method={this.state.method} />
        <div id='block_container'>
          <BlockInput
            inputValue={this.state.inputValue}
            updateInput={this.updateInput}
            ioc={this.state.iocInput}
          />
          <BlockConnectorPlus />
          <BlockSettings
            updateKeyword={this.updateKeyword}
            keyword={this.state.keyword}
            changeDirection={this.changeDirection}
            method={this.state.method}
            methodNameInset={this.state.methodNameInset}
            alphabet={this.state.alphabet}
            alphabetUpdate={this.alphabetUpdate}
            selectCase={this.selectCase}
            includeChars={this.includeChars}
            direction={this.state.direction}
            setAlpha={this.setAlpha}
            setBeta={this.setBeta}
            playSquare={this.state.playSquare}
            ringLength={this.state.ringLength}
            skytaleLength={this.state.skytaleLength}
            skytaleProjectedValue={this.state.skytaleProjectedValue}
            alphabetActive={this.state.alphabetActive}
            inputValue={this.state.inputValue}
            genRandomKey={this.genRandomKey}
            otpKey={this.state.otpKey}
            setPrimeOne={this.setPrimeOne}
            setPrimeTwo={this.setPrimeTwo}
            setE={this.setE}
            e={this.state.e}
            prime_one={this.state.prime_one}
            prime_two={this.state.prime_two}
            phi={this.state.phi}
            n={this.state.n}
            d={this.state.d}
            timeToCalculate={this.state.timeToCalculate}
            caesarPlusMinus={this.caesarPlusMinus}
            skytalePlusMinus={this.skytalePlusMinus}
          />
          <BlockConnectorEquals />
          <BlockOutput
            outputValue={this.state.outputValue}
            ioc={this.state.iocOutput}
          />
        </div>
        <Modal
          changeMethod={this.changeMethod}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toReplaceLetter: state.replace.toReplaceLetter,
  replaceLetter: state.replace.replaceLetter,
  wordbook: state.wordbook,
  cShift: state.cShift
})

const mapActionsToProps = {
  onSetWordbook: setWordbook
}


export default connect(mapStateToProps, mapActionsToProps)(EncryptionArea)
