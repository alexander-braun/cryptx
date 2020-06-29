import React, { Suspense } from 'react';
import BlockInput from './BlockInputOutput/Input';
import BlockOutput from './BlockInputOutput/Output';
import BlockConnectorEquals from './BlockOther/ConnectorEquals';
import BlockConnectorPlus from './BlockOther/ConnectorPlus';
import BlockSettings from './BlockCenter';
//import Modal from '../modal/Modal'

//Logic
import Caesar from '../encryption_methods/caesar/CaesarLogic';
import Affine from '../encryption_methods/affine/AffineLogic';
import Nihilist from '../encryption_methods/nihilist/nihilistLogic';
import Vigenere from '../encryption_methods/vigenere/VigenereLogic';
import Playfair from '../encryption_methods/playfair/PlayfairLogic';
import Morse from '../encryption_methods/morse/Morselogic';
import Replace from '../encryption_methods/replace/ReplaceLogic';
import Skytale from '../encryption_methods/skytale/SkytaleLogic';
import Atbash from '../encryption_methods/atbash/AtbashLogic';
import Rsa from '../encryption_methods/rsa/RSALogic';
import Reverse from '../encryption_methods/reverse/reverseLogic';
import CaseTransform from '../encryption_methods/caseTransform/caseTransformLogic';
import Substitute from '../encryption_methods/substitutionAlphabet/substitutionLogic';
import Trifid from '../encryption_methods/trifid/trifidLogic';
import Otp from '../encryption_methods/onetimepad/otpLogic';

import Timeline from '../timeline/Timeline';
import { connect } from 'react-redux';
import setWordbook from '../../actions/wordbook';
import toggleChars from '../../actions/toggleIncludeChars';
import setOutput from '../../actions/setOutput';
import toggleCase from '../../actions/toggleCase';
import updateAlphabet from '../../actions/updateAlphabet';
import setOtpKey from '../../actions/setOtpKey';
import setPlaysquare from '../../actions/setPlaysquare';
import setSkytaleLength from '../../actions/setSkytaleLength';
import setSkytaleProjectedValue from '../../actions/setSkytaleProjectedValue';
import setIocInput from '../../actions/setIocInput';
import setIocOutput from '../../actions/setIocOutput';
import setTimeToCalculate from '../../actions/setTimeToCalculate';
import setRsaPhi from '../../actions/setRsaPhi';
import setRsaN from '../../actions/setRsaN';
import setRsaD from '../../actions/setRsaD';
import setAlphabetActive from '../../actions/setAlphabetActive';

// Modals
import PresetsModal from '../modals/save_&_load_presets';
import AnalysisModal from '../modals/add_analysis_method';

import setNihilistSquare from '../../actions/setNihilistSquare';
import setNihilistRunningKey from '../../actions/setNihilistRunningKey';
import setNihilistPlainNumbers from '../../actions/setNihilistPlainNumbers';
import { setTrifidLayers, setTrifidGroups } from '../../actions/setTrifid';

const Modal = React.lazy(() => import('../modals/choos_encryption_method'));

class EncryptionArea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.encrypt = this.encrypt.bind(this);
  }

  componentDidMount() {
    this.encrypt();
  }

  componentDidUpdate(prevProps) {
    if (this.props.wordbook === null) {
      this.props.setWordbook();
    }

    if (prevProps !== this.props) {
      //Time to Calculate is always a bit different, leading into maximum update depth nirvana
      //Only encrypt when something else then ttc has changed
      if (prevProps.timeToCalculate !== this.props.timeToCalculate) {
        return;
      } else this.encrypt();
    }

    if (
      prevProps.input !== this.props.input ||
      prevProps.output !== this.props.output
    ) {
      this.props.setIocInput(this.calcIndexOfCoincidence(true));
      this.props.setIocOutput(this.calcIndexOfCoincidence(false));
    }

    if (prevProps.method !== this.props.method) {
      this.props.updateAlphabet('abcdefghijklmnopqrstuvwxyz');
      if (
        this.props.method === 'caesar' ||
        this.props.method === 'atbash' ||
        this.props.method === 'rot13'
      ) {
        this.props.setAlphabetActive(true);
      } else {
        this.props.setAlphabetActive(false);
      }
    }
  }

  //ioc
  calcIndexOfCoincidence(input) {
    //Check if input or outputfield
    let inputState = this.props.input;
    let outputState = this.props.output;

    if (input) {
      if (!inputState || inputState.length === 0) return;
    }
    if (!input) {
      if (!outputState || outputState.length === 0) return;
    }

    //calc for input or output -> true = input, false = output
    let inputValue = input ? inputState.toString() : outputState.toString();

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    //don't use foreign chars
    let cleanedInput = inputValue.split('').filter((character) => {
      return alphabet.indexOf(character.toLowerCase()) !== -1;
    });

    //Return if only signs
    if (cleanedInput.length === 0) return;

    // count all the occurences of every letter in the input
    let arrCounts = new Array(26).fill(0);
    for (let character of cleanedInput) {
      let indexOfCharacter = alphabet.indexOf(character.toLowerCase());
      arrCounts[indexOfCharacter]++;
    }

    // don't use letters that have a count of one as 1 * (1 - 1) === 0
    let arrCountsCleaned = arrCounts.filter((element) => element > 1);

    // calculate count ( count - 1 ) and sum all the results up
    let countCi = arrCountsCleaned
      .map((count) => {
        return count * (count - 1);
      })
      .reduce((a, b) => a + b, 0);

    //final calculation with countsum and inputlength
    let ioc = countCi / (cleanedInput.length * (cleanedInput.length - 1));

    return !isNaN(ioc) ? ioc : '0';
  }

  setRsaOutputs = (output) => {
    if (this.props.output !== output[0]) {
      this.props.setOutput(output[0]);
    }
    if (this.props.phi !== output[2]) {
      this.props.setRsaPhi(output[2]);
    }
    if (this.props.d !== output[3]) {
      this.props.setRsaD(output[3]);
    }
    if (this.props.n !== output[4]) {
      this.props.setRsaN(output[4]);
    }
  };

  encrypt() {
    let input = this.props.input;
    let alphabet = this.props.alphabet;
    let caseFormat = this.props.caseformat;
    let foreignChars = this.props.includeChars;
    let method = this.props.method;
    let direction = this.props.direction;

    if (direction === 'crack') {
      if (method === 'caesar' || method === 'rot13') {
        Caesar.setAll(
          this.props.wordbook,
          input,
          alphabet,
          method === 'rot13' ? 13 : this.props.cShift,
          direction,
          caseFormat,
          foreignChars
        );
        return this.props.setOutput(Caesar.encrypt());
      } else if (method === 'atbash') {
        Atbash.setAll(input, caseFormat, foreignChars);
        return this.props.setOutput(Atbash.encrypt());
      } else {
        return this.props.setOutput('');
      }
    }

    switch (method) {
      case 'trifid':
        Trifid.setAll(
          input,
          this.props.trifidKey,
          this.props.trifidGroupSize,
          this.props.trifid27thLetter,
          alphabet,
          direction
        );
        const encrypted = Trifid.encrypt();
        this.props.setOutput(encrypted[0]);
        this.props.setTrifidLayers(encrypted[1]);
        this.props.setTrifidGroups(encrypted[2]);
        break;
      case 'substitution':
        Substitute.setAll(input, this.props.substitutionAlphabet, direction);
        this.props.setOutput(Substitute.encrypt());
        break;
      case 'rot13':
        Caesar.setAll(
          null,
          input,
          alphabet,
          13,
          direction,
          caseFormat,
          foreignChars
        );
        this.props.setOutput(Caesar.encrypt());
        break;
      case 'caesar':
        Caesar.setAll(
          null,
          input,
          alphabet,
          this.props.cShift,
          direction,
          caseFormat,
          foreignChars
        );
        this.props.setOutput(Caesar.encrypt());
        break;
      case 'rsa':
        Rsa.setAll(input, this.props.prime1, this.props.prime2, this.props.e);
        const output = Rsa.calc(direction);
        if (output === undefined || output[0] === undefined) return '';
        this.props.setTimeToCalculate(output[1]);
        this.setRsaOutputs(output);
        break;
      case 'otp':
        Otp.setAll(
          input,
          caseFormat,
          foreignChars,
          direction,
          this.props.otpKey,
          alphabet
        );
        this.props.setOutput(Otp.encrypt());
        break;
      case 'reverse':
        Reverse.setAll(input, caseFormat, foreignChars, alphabet);
        this.props.setOutput(Reverse.encrypt());
        break;
      case 'casetransform':
        CaseTransform.setAll(input, this.props.caseTransformChoice);
        this.props.setOutput(CaseTransform.encrypt());
        break;
      case 'atbash':
        Atbash.setAll(input, caseFormat, foreignChars);
        this.props.setOutput(Atbash.encrypt());
        break;
      case 'affine':
        Affine.setAll(
          alphabet,
          input,
          this.props.affine_alpha,
          this.props.affine_beta,
          direction,
          foreignChars,
          caseFormat
        );
        this.props.setOutput(Affine.encrypt());
        break;
      case 'vigenere':
        Vigenere.setAll(
          input,
          alphabet,
          direction,
          foreignChars,
          caseFormat,
          this.props.keywordVigenere
        );
        this.props.setOutput(Vigenere.encrypt());
        break;
      case 'playfair':
        Playfair.setAll(input, alphabet, direction, this.props.keywordPlayfair);
        this.props.setOutput(Playfair.encrypt());
        this.props.setPlaysquare(Playfair.getSquare());
        break;
      case 'morse':
        Morse.setAll(input, direction);
        this.props.setOutput(Morse.encrypt());
        break;
      case 'replace':
        Replace.setAll(
          input,
          this.props.toReplaceLetter,
          this.props.replaceLetter
        );
        this.props.setOutput(Replace.encrypt());
        break;
      case 'nihilist':
        Nihilist.setAll(
          input,
          alphabet,
          direction,
          this.props.keyNihilist,
          this.props.cipherNihilist
        );
        const outputNihilist = Nihilist.transformText();
        if (outputNihilist === '') return;
        this.props.setOutput(outputNihilist);
        this.props.setNihilistSquare(Nihilist.getSquare());
        this.props.setNihilistRunningKey(Nihilist.getNihilistRunningKey());
        this.props.setNihilistPlainNumbers(Nihilist.getNihilistPlainNumbers());
        break;
      case 'skytale':
        Skytale.setAll(
          direction,
          caseFormat,
          input,
          this.props.ringLength,
          foreignChars
        );
        let skytale = Skytale.encrypt();
        let projected = Skytale.getProjectedValue();
        this.props.setSkytaleProjectedValue(projected);
        this.props.setOutput(skytale[0]);
        this.props.setSkytaleLength(skytale[1]);
        Skytale.generateOutputs();
        break;
      default:
        return null;
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
        <Suspense fallback={<div>...Loading</div>}>
          <Modal />
        </Suspense>
        <PresetsModal />
        <AnalysisModal />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  toReplaceLetter: state.replace.toReplaceLetter,
  replaceLetter: state.replace.replaceLetter,
  wordbook: state.wordbook,
  cShift: state.cShift,
  direction: state.direction,
  input: state.input,
  method: state.method,
  includeChars: state.includeChars,
  caseformat: state.caseformat,
  alphabet: state.alphabet.alphabet,
  output: state.output,
  prime1: state.rsa.prime1,
  prime2: state.rsa.prime2,
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
  e: state.rsa.e,
  caseTransformChoice: state.caseTransformChoice,
  keyNihilist: state.keyNihilist,
  cipherNihilist: state.cipherNihilist,
  substitutionAlphabet: state.substitutionAlphabet,
  trifidKey: state.trifid.trifidKey,
  trifid27thLetter: state.trifid.trifid27thLetter,
  trifidGroupSize: state.trifid.trifidGroupSize,
});

const mapActionsToProps = {
  setWordbook,
  toggleChars,
  setOutput,
  toggleCase,
  updateAlphabet,
  setOtpKey,
  setPlaysquare,
  setSkytaleLength,
  setSkytaleProjectedValue,
  setIocInput,
  setIocOutput,
  setTimeToCalculate,
  setRsaPhi,
  setRsaN,
  setRsaD,
  setAlphabetActive,
  setNihilistSquare,
  setNihilistRunningKey,
  setNihilistPlainNumbers,
  setTrifidLayers,
  setTrifidGroups,
};

export default connect(mapStateToProps, mapActionsToProps)(EncryptionArea);
