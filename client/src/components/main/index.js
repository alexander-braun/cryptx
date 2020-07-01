import React, { Suspense } from 'react';
import { connect } from 'react-redux';

//SCSS
import './main.scss';

//Components
import Input from './BlockInputOutput/Input';
import Output from './BlockInputOutput/Output';
import BlockConnector from './BlockOther/BlockConnector';
import BlockSettings from './BlockCenter';
import Timeline from '../timeline/Timeline';

//Logic
import Caesar from '../encryption_methods/caesar/caesar-logic';
import Affine from '../encryption_methods/affine/affine-logic';
import Nihilist from '../encryption_methods/nihilist/nihilist-logic';
import Vigenere from '../encryption_methods/vigenere/vigenere-logic';
import Playfair from '../encryption_methods/playfair/playfair-logic';
import Morse from '../encryption_methods/morse/morse-logic';
import Replace from '../encryption_methods/replace/replace-logic';
import Skytale from '../encryption_methods/skytale/skytale-logic';
import Atbash from '../encryption_methods/atbash/atbash-logic';
import Rsa from '../encryption_methods/rsa/rsa-logic';
import Reverse from '../encryption_methods/reverse/reverse-logic';
import CaseTransform from '../encryption_methods/caseTransform/case-transform-logic';
import Substitute from '../encryption_methods/substitutionAlphabet/substitution-logic';
import Trifid from '../encryption_methods/trifid/trifid-logic';
import Otp from '../encryption_methods/onetimepad/otp-logic';

// Actions
import setWordbook from '../../actions/wordbook';
import setOutput from '../../actions/setOutput';
import updateAlphabet from '../../actions/updateAlphabet';
import setPlaysquare from '../../actions/setPlaysquare';
import setSkytaleLength from '../../actions/setSkytaleLength';
import setSkytaleProjectedValue from '../../actions/setSkytaleProjectedValue';
import setTimeToCalculate from '../../actions/setTimeToCalculate';
import setRsaPhi from '../../actions/setRsaPhi';
import setRsaN from '../../actions/setRsaN';
import setRsaD from '../../actions/setRsaD';
import setAlphabetActive from '../../actions/setAlphabetActive';
import setNihilistSquare from '../../actions/setNihilistSquare';
import setNihilistRunningKey from '../../actions/setNihilistRunningKey';
import setNihilistPlainNumbers from '../../actions/setNihilistPlainNumbers';
import { setTrifidLayers, setTrifidGroups } from '../../actions/setTrifid';

// Modals
import PresetsModal from '../modals/save_&_load_presets';
import AnalysisModal from '../modals/add_analysis_method';

const Modal = React.lazy(() => import('../modals/choose_encryption_method'));

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.encrypt = this.encrypt.bind(this);
  }

  /**
   * Encrypt directly when the component is renderd.
   * Get the english dictionary from github.
   */
  componentDidMount() {
    this.encrypt();
    if (this.props.wordbook === null) {
      this.props.setWordbook();
    }
  }

  componentDidUpdate(prevProps) {
    /**
     * In some cases the alphabet is editable.
     * It needs to be reset for the other methods
     * to work. Also sets the status of the alphabet
     * editability.
     */
    if (prevProps.method !== this.props.method) {
      this.props.updateAlphabet('abcdefghijklmnopqrstuvwxyz');
      if (this.props.method === 'caesar' || this.props.method === 'rot13') {
        this.props.setAlphabetActive(true);
      } else {
        this.props.setAlphabetActive(false);
      }
    }

    /**
     * If props update recalculate.
     */
    this.encrypt();
  }

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

    let encrypted;
    switch (method) {
      case 'trifid':
        encrypted = Trifid.encrypt(
          input,
          this.props.trifidKey,
          this.props.trifidGroupSize,
          this.props.trifid27thLetter,
          alphabet,
          direction
        );
        this.props.setOutput(encrypted[0]);
        this.props.setTrifidLayers(encrypted[1]);
        this.props.setTrifidGroups(encrypted[2]);
        break;
      case 'substitution':
        encrypted = Substitute.encrypt(
          input,
          this.props.substitutionAlphabet,
          direction
        );
        this.props.setOutput(encrypted);
        break;
      case 'rot13':
        encrypted = Caesar.encrypt(
          null,
          input,
          alphabet,
          13,
          direction,
          caseFormat,
          foreignChars
        );
        this.props.setOutput(encrypted);
        break;
      case 'caesar':
        encrypted = Caesar.encrypt(
          null,
          input,
          alphabet,
          this.props.cShift,
          direction,
          caseFormat,
          foreignChars
        );
        this.props.setOutput(encrypted);
        break;
      case 'rsa':
        encrypted = Rsa.calc(
          input,
          this.props.prime1,
          this.props.prime2,
          this.props.e,
          direction
        );
        const output = encrypted;
        if (output === undefined || output[0] === undefined) return '';
        if (this.props.timeToCalculate !== output[1]) {
          this.props.setTimeToCalculate(output[1]);
        }
        this.props.setOutput(output[0]);
        this.props.setRsaPhi(output[2]);
        this.props.setRsaD(output[3]);
        this.props.setRsaN(output[4]);

        break;
      case 'otp':
        encrypted = Otp.encrypt(
          input,
          caseFormat,
          foreignChars,
          direction,
          this.props.otpKey,
          alphabet
        );
        this.props.setOutput(encrypted);
        break;
      case 'reverse':
        encrypted = Reverse.encrypt(input, caseFormat, foreignChars, alphabet);
        this.props.setOutput(encrypted);
        break;
      case 'casetransform':
        encrypted = CaseTransform.encrypt(
          input,
          this.props.caseTransformChoice
        );
        this.props.setOutput(encrypted);
        break;
      case 'atbash':
        encrypted = Atbash.encrypt(input, caseFormat, foreignChars);
        this.props.setOutput(encrypted);
        break;
      case 'affine':
        encrypted = Affine.encrypt(
          alphabet,
          input,
          this.props.affine_alpha,
          this.props.affine_beta,
          direction,
          foreignChars,
          caseFormat
        );
        this.props.setOutput(encrypted);
        break;
      case 'vigenere':
        encrypted = Vigenere.encrypt(
          input,
          alphabet,
          direction,
          foreignChars,
          caseFormat,
          this.props.keywordVigenere
        );
        this.props.setOutput(encrypted);
        break;
      case 'playfair':
        encrypted = Playfair.encrypt(
          input,
          alphabet,
          direction,
          this.props.keywordPlayfair
        );
        this.props.setOutput(encrypted[0]);
        this.props.setPlaysquare(encrypted[1]);
        break;
      case 'morse':
        encrypted = Morse.encrypt(input, direction);
        this.props.setOutput(encrypted);
        break;
      case 'replace':
        encrypted = Replace.encrypt(
          input,
          this.props.toReplaceLetter,
          this.props.replaceLetter
        );
        this.props.setOutput(encrypted);
        break;
      case 'nihilist':
        encrypted = Nihilist.encrypt(
          input,
          alphabet,
          direction,
          this.props.keyNihilist,
          this.props.cipherNihilist
        );
        if (encrypted[0] === '') return;
        this.props.setOutput(encrypted[0]);
        this.props.setNihilistSquare(encrypted[1]);
        this.props.setNihilistRunningKey(encrypted[2]);
        this.props.setNihilistPlainNumbers(encrypted[3]);
        break;
      case 'skytale':
        encrypted = Skytale.encrypt(
          direction,
          caseFormat,
          input,
          this.props.ringLength,
          foreignChars
        );
        this.props.setSkytaleProjectedValue(encrypted[2]);
        this.props.setOutput(encrypted[0]);
        this.props.setSkytaleLength(encrypted[1]);
        break;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className='main'>
        <Timeline />
        <div className='block-container'>
          <Input />
          <BlockConnector sign={'+'} />
          <BlockSettings />
          <BlockConnector sign={'='} />
          <Output />
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
  setOutput,
  updateAlphabet,
  setPlaysquare,
  setSkytaleLength,
  setSkytaleProjectedValue,
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

export default connect(mapStateToProps, mapActionsToProps)(Main);
