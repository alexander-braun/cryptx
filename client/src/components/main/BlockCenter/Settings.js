import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Components
import Alphabet from './Alphabet';
import ForeignChars from './ForeignChars';
import CaesarShift from '../../encryption_methods/caesar/CaesarShift';
import CaesarTransposition from '../../encryption_methods/caesar/CaesarTransposition';
import AlphaBetaSelectors from '../../encryption_methods/affine/AlphaBetaSelectors';
import KeywordVigenere from '../../encryption_methods/vigenere/KeywordVigenere';
import KeywordPlayfair from '../../encryption_methods/playfair/KeywordPlayfair';
import CharOptions from '../../encryption_methods/playfair/CharOptions';
import PlayfairSquare from '../../encryption_methods/playfair/PlayfairSquare';
import ReplaceKeys from '../../encryption_methods/replace/ReplaceKeys';
import RingLength from '../../encryption_methods/skytale/RingLenght';
import Rings from '../../encryption_methods/skytale/Rings';
import AtbashTransposition from '../../encryption_methods/atbash/AtbashTransposition';
import OtpGenerate from '../../encryption_methods/onetimepad/otpGenerate';
import Primes from '../../encryption_methods/rsa/Primes';
import VigenereTransposition from '../../encryption_methods/vigenere/vigenereTransposition';
import CaseTransform from '../../encryption_methods/caseTransform/CaseTransform';
import KeywordsNihilist from '../../encryption_methods/nihilist/KeywordNihilist';
import NihilistSquare from '../../encryption_methods/nihilist/NihilistSquare';
import NihilistTransposition from '../../encryption_methods/nihilist/NihilistTransposition';
import SubstitutionTable from '../../encryption_methods/substitutionAlphabet/SubstitutionTable';
import TrifidSettings from '../../encryption_methods/trifid/TrifidSettings';
import TrifidLayers from '../../encryption_methods/trifid/TrifidLayers';
import TrifidGroups from '../../encryption_methods/trifid/TrifidGroups';

const Settings = (props) => {
  const switchSettings = () => {
    if (props.direction === 'crack') return null;
    switch (props.method) {
      case 'trifid':
        return (
          <Fragment>
            <TrifidSettings />
            <TrifidLayers />
            <TrifidGroups />
          </Fragment>
        );
      case 'substitution':
        return <SubstitutionTable />;
      case 'casetransform':
        return <CaseTransform />;
      case 'reverse':
        return <ForeignChars />;
      case 'nihilist':
        return (
          <Fragment>
            <KeywordsNihilist />
            <NihilistSquare />
            <NihilistTransposition />
          </Fragment>
        );
      case 'atbash':
        return (
          <Fragment>
            <AtbashTransposition alphabet={props.alphabet} />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
      case 'rsa':
        return <Primes />;
      case 'rot13':
        return (
          <Fragment>
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
      case 'caesar':
        return (
          <Fragment>
            <CaesarShift />
            <CaesarTransposition alphabet={props.alphabet} />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
      case 'affine':
        return (
          <Fragment>
            <AlphaBetaSelectors />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
      case 'vigenere':
        return (
          <Fragment>
            <KeywordVigenere />
            <VigenereTransposition alphabet={props.alphabet} />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
      case 'playfair':
        return (
          <Fragment>
            <CharOptions />
            <KeywordPlayfair />
            <PlayfairSquare />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
          </Fragment>
        );
      case 'morse':
        return null;
      case 'replace':
        return <ReplaceKeys />;
      case 'skytale':
        return (
          <Fragment>
            <RingLength />
            <Rings />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
      case 'otp':
        return (
          <Fragment>
            <OtpGenerate />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
      default:
        return null;
    }
  };

  return <Fragment>{switchSettings()}</Fragment>;
};

const mapStateToProps = (state) => ({
  direction: state.direction,
  method: state.method,
  alphabet: state.alphabet.alphabet,
  alphabetActive: state.alphabet.active,
});

Settings.propTypes = {
  direction: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  alphabet: PropTypes.string.isRequired,
  alphabetActive: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Settings);
