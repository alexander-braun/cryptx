import React from 'react'
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


const BlockBodyInput = ({   cShift, 
                            caesarPlusMinus,
                            skytalePlusMinus,
                            alphabet, 
                            alphabetUpdate, 
                            selectCase, 
                            includeChars, 
                            method, 
                            direction, 
                            setAlpha, 
                            setBeta, 
                            updateKeyword,
                            keyword,
                            playSquare,
                            ringLength,
                            skytaleLength,
                            skytaleProjectedValue,
                            alphabetActive,
                            otpKey,
                            genRandomKey,
                            inputValue,
                            setPrimeOne,
                            setPrimeTwo,
                            setE,
                            e,
                            prime_one,
                            prime_two,
                            phi,
                            n,
                            d,
                            timeToCalculate
                        }) => {
    let bodyInput
    const switchBodyInput = () => {
        if (direction === 'crack') return null
        switch (method) {
            case 'atbash':
                bodyInput =
                    <div className="block_body_input">
                        <AtbashTransposition 
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
            case 'rsa': 
                bodyInput = 
                    <Primes 
                        inputValue={inputValue}
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
                        <CaesarShift                   
                            plusMinus = {caesarPlusMinus}
                            cShift = {cShift}
                        />
                        <CaesarTransposition 
                            cShift = {cShift}
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
                        <RingLength 
                            ringLength = {ringLength}
                            plusMinus = {skytalePlusMinus}
                        />
                        <Rings 
                            ringLength = {ringLength}
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
        <>
            {switchBodyInput()}
        </>
    )
}

export default BlockBodyInput