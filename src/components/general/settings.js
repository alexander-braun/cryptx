import React, { Fragment } from 'react'
import CaesarShift from '../caesar/CaesarShift'
import Alphabet from './Alphabet'
import CaseChars from './CaseChars'
import AlphaBeta from '../affine/AlphaBeta'
import KeywordVigenere from '../vigenere/KeywordVigenere'
import KeywordPlayfair from '../playfair/KeywordPlayfair'
import CharOptions from '../playfair/CharOptions'
import PlayfairSquare from '../playfair/PlayfairSquare'
import ReplaceKeys from '../replace/ReplaceKeys'
import RingLength from '../skytale/RingLenght'
import Rings from '../skytale/Rings'
import CaesarTransposition from '../caesar/CaesarTransposition'
import AtbashTransposition from '../atbash/AtbashTransposition'
import OtpGenerate from '../onetimepad/otpGenerate'
import Primes from '../rsa/Primes'
import { connect } from 'react-redux'


const BlockBodyInput = ({
                            alphabet, 
                            method, 
                            skytaleLength,
                            skytaleProjectedValue,
                            alphabetActive,
                            setE,
                            e,
                            prime_two,
                            phi,
                            n,
                            d,
                            timeToCalculate,
                            direction
                        }) => {
    let bodyInput
    const switchBodyInput = () => {
        if (direction === 'crack') return null
        switch (method) {
            case 'atbash':
                bodyInput =
                    <div className="block_body_input">
                        <AtbashTransposition 
                            alphabet = {alphabet}
                        />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars />
                    </div>
                break
            case 'rsa': 
                bodyInput = 
                    <Primes 
                        setE = {setE}
                        e = {e}
                        prime_two = {prime_two}
                        phi = {phi}
                        n = {n}
                        d = {d}
                        timeToCalculate = {timeToCalculate}
                    />
                break
            case 'rot13':
                bodyInput = 
                    <div className="block_body_input">
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars />
                    </div> 
                break
            case 'caesar':
                bodyInput = 
                    <div className="block_body_input">
                        <CaesarShift />
                        <CaesarTransposition 
                            alphabet = {alphabet}
                        />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars />
                    </div>
                break
            case 'affine':
                bodyInput = 
                    <div className="block_body_input">
                        <AlphaBeta />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars />
                    </div>
                break
            case 'vigenere':
                bodyInput = 
                    <div className="block_body_input">
                        <KeywordVigenere />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars />
                    </div> 
                break
            case 'playfair':
                bodyInput = 
                    <div className="block_body_input">
                        <PlayfairSquare />
                        <CharOptions />
                        <KeywordPlayfair />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars />
                    </div> 
                break
            case 'morse':
                bodyInput = null
                break
            case 'replace':
                bodyInput = 
                    <ReplaceKeys />
                break
            case 'skytale':
                bodyInput = 
                    <div>
                        <RingLength />
                        <Rings 
                            skytaleLength = {skytaleLength}
                            outputValue = {skytaleProjectedValue}
                        />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars />
                    </div>
                break
            case 'otp':
                bodyInput = 
                    <div>
                        <OtpGenerate />
                        <CaseChars />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetActive = {alphabetActive}
                        />
                    </div>
                break
            default: return null
        }
        return bodyInput;
    }
    
    return (
        <Fragment>
            {switchBodyInput()}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    direction: state.direction,
    method: state.method,
    alphabet: state.alphabet
})

export default connect(mapStateToProps)(BlockBodyInput)