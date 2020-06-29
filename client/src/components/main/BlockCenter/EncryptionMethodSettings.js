import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Alphabet from './Alphabet';
import CaseChars from './CaseChars';
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
  let bodyInput;
  const switchBodyInput = () => {
    if (props.direction === 'crack') return null;
    switch (props.method) {
      case 'trifid':
        bodyInput = (
          <div className='block_body_input'>
            <TrifidSettings />
            <TrifidLayers />
            <TrifidGroups />
          </div>
        );
        break;
      case 'substitution':
        bodyInput = (
          <div className='block_body_input'>
            <SubstitutionTable />
          </div>
        );
        break;
      case 'casetransform':
        bodyInput = (
          <div className='block_body_input'>
            <CaseTransform />
          </div>
        );
        break;
      case 'reverse':
        bodyInput = (
          <div className='block_body_input'>
            <CaseChars />
          </div>
        );
        break;
      case 'nihilist':
        bodyInput = (
          <div className='block_body_input'>
            <KeywordsNihilist />
            <NihilistSquare />
            <NihilistTransposition />
          </div>
        );
        break;
      case 'atbash':
        bodyInput = (
          <div className='block_body_input'>
            <AtbashTransposition alphabet={props.alphabet} />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <CaseChars />
          </div>
        );
        break;
      case 'rsa':
        bodyInput = <Primes />;
        break;
      case 'rot13':
        bodyInput = (
          <div className='block_body_input'>
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <CaseChars />
          </div>
        );
        break;
      case 'caesar':
        bodyInput = (
          <div className='block_body_input'>
            <CaesarShift />
            <CaesarTransposition alphabet={props.alphabet} />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <CaseChars />
          </div>
        );
        break;
      case 'affine':
        bodyInput = (
          <div className='block_body_input'>
            <AlphaBetaSelectors />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <CaseChars />
          </div>
        );
        break;
      case 'vigenere':
        bodyInput = (
          <div className='block_body_input'>
            <KeywordVigenere />
            <VigenereTransposition alphabet={props.alphabet} />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <CaseChars />
          </div>
        );
        break;
      case 'playfair':
        bodyInput = (
          <div className='block_body_input'>
            <CharOptions />
            <KeywordPlayfair />
            <PlayfairSquare />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <CaseChars />
          </div>
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
          <div>
            <RingLength />
            <Rings />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <CaseChars />
          </div>
        );
        break;
      case 'otp':
        bodyInput = (
          <div>
            <OtpGenerate />
            <Alphabet
              alphabet={props.alphabet}
              alphabetActive={props.alphabetActive}
            />
            <CaseChars />
          </div>
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
