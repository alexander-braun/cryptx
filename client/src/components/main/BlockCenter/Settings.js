import React, { Fragment } from 'react';
import { connect } from 'react-redux';

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

const BlockBodyInput = (props) => {
  const switchBodyInput = () => {
    let bodyInput;
    if (props.direction === 'crack') return null;
    switch (props.method) {
      case 'trifid':
        bodyInput = (
          <Fragment>
            <TrifidSettings />
            <TrifidLayers />
            <TrifidGroups />
          </Fragment>
        );
        break;
      case 'substitution':
        bodyInput = <SubstitutionTable />;
        break;
      case 'casetransform':
        bodyInput = <CaseTransform />;
        break;
      case 'reverse':
        bodyInput = <ForeignChars />;
        break;
      case 'nihilist':
        bodyInput = (
          <Fragment>
            <KeywordsNihilist />
            <NihilistSquare />
            <NihilistTransposition />
          </Fragment>
        );
        break;
      case 'atbash':
        bodyInput = (
          <Fragment>
            <AtbashTransposition alphabet={props.alphabet} />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
        break;
      case 'rsa':
        bodyInput = <Primes />;
        break;
      case 'rot13':
        bodyInput = (
          <Fragment>
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
        break;
      case 'caesar':
        bodyInput = (
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
        break;
      case 'affine':
        bodyInput = (
          <Fragment>
            <AlphaBetaSelectors />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
        break;
      case 'vigenere':
        bodyInput = (
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
        break;
      case 'playfair':
        bodyInput = (
          <Fragment>
            <CharOptions />
            <KeywordPlayfair />
            <PlayfairSquare />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
        break;
      case 'morse':
        bodyInput = null;
        break;
      case 'replace':
        bodyInput = <ReplaceKeys />;
        break;
      case 'skytale':
        bodyInput = (
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
        break;
      case 'otp':
        bodyInput = (
          <Fragment>
            <OtpGenerate />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <ForeignChars />
          </Fragment>
        );
        break;
      default:
        return null;
    }
    return bodyInput;
  };

  return <Fragment>{switchBodyInput()}</Fragment>;
};

const mapStateToProps = (state) => ({
  direction: state.direction,
  method: state.method,
  alphabet: state.alphabet.alphabet,
  alphabetActive: state.alphabet.active,
});

export default connect(mapStateToProps)(BlockBodyInput);
