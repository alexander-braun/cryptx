import React, { Fragment } from 'react'
import CaesarShift from '../caesar/CaesarShift'
import Alphabet from './Alphabet'
import CaseChars from './CaseChars'
import Alpha from '../affine/Alpha'
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
                            alphabetUpdate, 
                            selectCase, 
                            includeChars, 
                            method, 
                            setAlpha, 
                            setBeta, 
                            updateKeyword,
                            keyword,
                            playSquare,
                            skytaleLength,
                            skytaleProjectedValue,
                            alphabetActive,
                            otpKey,
                            genRandomKey,
                            setPrimeOne,
                            setPrimeTwo,
                            setE,
                            e,
                            prime_one,
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
                            alphabetUpdate = {alphabetUpdate} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars 
                            selectCase = {selectCase}
                            includeChars = {includeChars}
                        />
                    </div>
                break
            case 'rsa': 
                bodyInput = 
                    <Primes 
                        setPrimeOne = {setPrimeOne}
                        setPrimeTwo = {setPrimeTwo}
                        setE = {setE}
                        e = {e}
                        prime_one = {prime_one}
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
                            alphabetUpdate = {alphabetUpdate} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars 
                            selectCase = {selectCase}
                            includeChars = {includeChars}
                        />
                    </div> 
                break
            case 'caesar':
                bodyInput = 
                    <div className="block_body_input">
                        <CaesarShift />
                        <CaesarTransposition 
                            direction = {direction}
                            alphabet = {alphabet}
                        />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetUpdate = {alphabetUpdate} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars 
                            selectCase = {selectCase}
                            includeChars = {includeChars}
                        />
                    </div>
                break
            case 'affine':
                bodyInput = 
                    <div className="block_body_input">
                        <Alpha
                            setAlpha = {setAlpha}
                            setBeta = {setBeta}
                        />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetUpdate = {alphabetUpdate} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars 
                            selectCase = {selectCase}
                            includeChars = {includeChars}
                        />
                    </div>
                break
            case 'vigenere':
                bodyInput = 
                    <div className="block_body_input">
                        <KeywordVigenere
                            updateKeyword={updateKeyword}
                            keyword={keyword}
                        />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetUpdate = {alphabetUpdate} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars 
                            selectCase = {selectCase}
                            includeChars = {includeChars}
                        />
                    </div> 
                break
            case 'playfair':
                bodyInput = 
                    <div className="block_body_input">
                        <PlayfairSquare 
                            playSquare={playSquare}
                        />
                        <CharOptions />
                        <KeywordPlayfair
                            updateKeyword={updateKeyword}
                            keyword={keyword}
                        />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetUpdate = {alphabetUpdate} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars 
                            selectCase = {selectCase}
                            includeChars = {includeChars}
                        />
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
                            alphabetUpdate = {alphabetUpdate} 
                            alphabetActive = {alphabetActive}
                        />
                        <CaseChars 
                            selectCase = {selectCase}
                            includeChars = {includeChars}
                        />
                    </div>
                break
            case 'otp':
                bodyInput = 
                    <div>
                        <OtpGenerate 
                            genRandomKey = {genRandomKey}
                            otpKey = {otpKey}
                        />
                        <CaseChars 
                            selectCase = {selectCase}
                            includeChars = {includeChars}
                        />
                        <Alphabet 
                            alphabet = {alphabet} 
                            alphabetUpdate = {alphabetUpdate} 
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
    direction: state.toggleDirection.direction,
    method: state.method.method
})

export default connect(mapStateToProps)(BlockBodyInput)