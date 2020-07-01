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
     * Encrypt when the component updates BUT
     * don't encrypt if just the time-to-calculate
     * updated. Prevents infinite re-renders.
     * Needs a better method on a seperate thread or
     * something.
     * Time to calculate always changes wich is why the
     * component updates. Maybe round the timeToCalculate
     * to .5s invervals.
     */
    if (prevProps.timeToCalculate !== this.props.timeToCalculate) {
      return;
    } else this.encrypt();

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
  }

  /**
   * Reduce this
   */
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
