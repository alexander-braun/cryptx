import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import encryptionProps from './encryption-props';
import PropTypes from 'prop-types';

//Assets
import './main.scss';

//Components
import Input from './BlockInputOutput/Input';
import Output from './BlockInputOutput/Output';
import BlockConnector from './BlockOther/BlockConnector';
import BlockSettings from './BlockCenter';
import Timeline from '../timeline/Timeline';
import LoadPreset from '../modals/save_&_load_presets/LoadPreset';
import SavePreset from '../modals/save_&_load_presets/SavePreset';

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
import setOutput from '../../actions/setOutput';
import { updateAlphabet, setAlphabetActive } from '../../actions/alphabet';
import { setPlaysquare } from '../../actions/playfair';
import { setSkytaleLength } from '../../actions/skytale';
import {
  setRsaPhi,
  setRsaN,
  setRsaD,
  setTimeToCalculate,
} from '../../actions/rsa';
import {
  setNihilistSquare,
  setNihilistRunningKey,
  setNihilistPlainNumbers,
} from '../../actions/nihilist';
import { setTrifidLayers, setTrifidGroups } from '../../actions/trifid';

// Modals
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

    if (this.props.timeToCalculate !== prevProps.timeToCalculate) return;
    else this.encrypt();
  }

  /**
   * The method uses pre-defined encryption props wich
   * return the right props for the belonging method.
   */
  encrypt() {
    const { method } = this.props;

    let encrypted;

    switch (method) {
      case 'trifid':
        encrypted = Trifid.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted[0]);
        this.props.setTrifidLayers(encrypted[1]);
        this.props.setTrifidGroups(encrypted[2]);
        break;
      case 'substitution':
        encrypted = Substitute.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted);
        break;
      case 'rot13':
        encrypted = Caesar.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted);
        break;
      case 'caesar':
        encrypted = Caesar.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted);
        break;
      case 'rsa':
        encrypted = Rsa.calc(...encryptionProps(this.props));
        if (encrypted === undefined || encrypted[0] === undefined) return '';
        this.props.setTimeToCalculate(encrypted[1]);
        this.props.setOutput(encrypted[0]);
        this.props.setRsaPhi(encrypted[2]);
        this.props.setRsaD(encrypted[3]);
        this.props.setRsaN(encrypted[4]);
        break;
      case 'otp':
        encrypted = Otp.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted);
        break;
      case 'reverse':
        encrypted = Reverse.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted);
        break;
      case 'casetransform':
        encrypted = CaseTransform.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted);
        break;
      case 'atbash':
        encrypted = Atbash.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted);
        break;
      case 'affine':
        encrypted = Affine.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted);
        break;
      case 'vigenere':
        encrypted = Vigenere.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted);
        break;
      case 'playfair':
        encrypted = Playfair.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted[0]);
        this.props.setPlaysquare(encrypted[1]);
        break;
      case 'morse':
        encrypted = Morse.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted);
        break;
      case 'replace':
        encrypted = Replace.encrypt(...encryptionProps(this.props));
        this.props.setOutput(encrypted);
        break;
      case 'nihilist':
        encrypted = Nihilist.encrypt(...encryptionProps(this.props));
        if (typeof encrypted === 'string') {
          this.props.setOutput(encrypted);
          return;
        }
        this.props.setOutput(encrypted[0]);
        this.props.setNihilistSquare(encrypted[1]);
        this.props.setNihilistRunningKey(encrypted[2]);
        this.props.setNihilistPlainNumbers(encrypted[3]);
        break;
      case 'skytale':
        encrypted = Skytale.encrypt(...encryptionProps(this.props));
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
        <LoadPreset />
        <SavePreset />
        <AnalysisModal />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  toReplaceLetter: state.replace.toReplaceLetter,
  replaceLetter: state.replace.replaceLetter,
  cShift: state.cShift,
  direction: state.direction,
  input: state.input,
  method: state.method,
  foreignChars: state.foreignChars,
  caseformat: state.caseformat,
  alphabet: state.alphabet.alphabet,
  output: state.output,
  prime1: state.rsa.prime1,
  prime2: state.rsa.prime2,
  phi: state.rsa.phi,
  n: state.rsa.n,
  d: state.rsa.d,
  e: state.rsa.e,
  alphabetActive: state.alphabet.active,
  keywordVigenere: state.keywordVigenere,
  keywordPlayfair: state.playfair.keywordPlayfair,
  affine_alpha: state.affine.affine_alpha,
  affine_beta: state.affine.affine_beta,
  otpKey: state.otpKey,
  playSquare: state.playSquare,
  ringLength: state.skytale.ringLength,
  skytaleLength: state.skytale.length,
  timeToCalculate: state.rsa.timeToCalculate,
  caseTransformChoice: state.caseTransformChoice,
  keywordNihilist: state.nihilist.keywordNihilist,
  cipherNihilist: state.nihilist.cipherNihilist,
  substitutionAlphabet: state.substitutionAlphabet,
  trifidKey: state.trifid.trifidKey,
  trifid27thLetter: state.trifid.trifid27thLetter,
  trifidGroupSize: state.trifid.trifidGroupSize,
});

const mapActionsToProps = {
  setOutput,
  updateAlphabet,
  setPlaysquare,
  setSkytaleLength,
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

Main.propTypes = {
  setOutput: PropTypes.func.isRequired,
  updateAlphabet: PropTypes.func.isRequired,
  setPlaysquare: PropTypes.func.isRequired,
  setSkytaleLength: PropTypes.func.isRequired,
  setTimeToCalculate: PropTypes.func.isRequired,
  setRsaPhi: PropTypes.func.isRequired,
  setRsaN: PropTypes.func.isRequired,
  setRsaD: PropTypes.func.isRequired,
  setAlphabetActive: PropTypes.func.isRequired,
  setNihilistSquare: PropTypes.func.isRequired,
  setNihilistRunningKey: PropTypes.func.isRequired,
  setNihilistPlainNumbers: PropTypes.func.isRequired,
  setTrifidLayers: PropTypes.func.isRequired,
  setTrifidGroups: PropTypes.func.isRequired,
  toReplaceLetter: PropTypes.string.isRequired,
  replaceLetter: PropTypes.string.isRequired,
  cShift: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  foreignChars: PropTypes.string.isRequired,
  caseformat: PropTypes.string.isRequired,
  alphabet: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
  prime1: PropTypes.string.isRequired,
  prime2: PropTypes.string.isRequired,
  alphabetActive: PropTypes.bool.isRequired,
  keywordVigenere: PropTypes.string.isRequired,
  keywordPlayfair: PropTypes.string.isRequired,
  affine_alpha: PropTypes.number.isRequired,
  affine_beta: PropTypes.number.isRequired,
  otpKey: PropTypes.string.isRequired,
  playSquare: PropTypes.arrayOf(PropTypes.string),
  ringLength: PropTypes.number.isRequired,
  skytaleLength: PropTypes.number.isRequired,
  timeToCalculate: PropTypes.string,
  phi: PropTypes.string,
  n: PropTypes.string,
  d: PropTypes.string,
  e: PropTypes.string.isRequired,
  caseTransformChoice: PropTypes.string.isRequired,
  keywordNihilist: PropTypes.string.isRequired,
  cipherNihilist: PropTypes.string.isRequired,
  substitutionAlphabet: PropTypes.object.isRequired,
  trifidKey: PropTypes.string.isRequired,
  trifid27thLetter: PropTypes.string.isRequired,
  trifidGroupSize: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Main);
