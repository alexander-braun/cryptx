import React, { Fragment } from 'react';
import CaesarShift from '../caesar/CaesarShift';
import Alphabet from './Alphabet';
import CaseChars from './CaseChars';
import AlphaBeta from '../affine/AlphaBeta';
import KeywordVigenere from '../vigenere/KeywordVigenere';
import KeywordPlayfair from '../playfair/KeywordPlayfair';
import CharOptions from '../playfair/CharOptions';
import PlayfairSquare from '../playfair/PlayfairSquare';
import ReplaceKeys from '../replace/ReplaceKeys';
import RingLength from '../skytale/RingLenght';
import Rings from '../skytale/Rings';
import CaesarTransposition from '../caesar/CaesarTransposition';
import AtbashTransposition from '../atbash/AtbashTransposition';
import OtpGenerate from '../onetimepad/otpGenerate';
import Primes from '../rsa/Primes';
import { connect } from 'react-redux';
import VigenereTransposition from '../vigenere/vigenereTransposition';
import CaseTransform from '../caseTransform/CaseTransform';
import KeywordsNihilist from '../nihilist/KeywordNihilist';
import NihilistSquare from '../nihilist/NihilistSquare';
import NihilistTransposition from '../nihilist/NihilistTransposition';
import SubstitutionTable from '../substitutionAlphabet/SubstitutionTable';
import TrifidSettings from '../trifid/TrifidSettings';
import TrifidLayers from '../trifid/TrifidLayers';
import TrifidGroups from '../trifid/TrifidGroups';

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
            <AlphaBeta />
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
