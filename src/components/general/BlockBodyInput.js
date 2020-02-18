import React from 'react'
import CaesarShift from '../caesar/CaesarShift'
import Alphabet from './Alphabet'
import CaseChars from './CaseChars'
import Alpha from '../affine/Alpha'
import KeywordVigenere from '../vigenere/KeywordVigenere'
import KeywordPlayfair from '../playfair/KeywordPlayfair'
import CharOptions from '../playfair/CharOptions'
import PlayfairSquare from '../playfair/PlayfairSquare'


const BlockBodyInput = ({   minus, 
                            plus, 
                            cShift, 
                            alphabet, 
                            alphabetUpdate, 
                            selectCase, 
                            includeChars, 
                            encrypt, 
                            method, 
                            direction, 
                            setAlpha, 
                            setBeta, 
                            updateKeyword, 
                            keywordVigenere,
                            updateKeywordPlayfair,
                            keywordPlayfair,
                            playSquare }) => {
    let bodyInput;
    let standartBlocks =      
    <div>
        <Alphabet 
            alphabet = {alphabet} 
            alphabetUpdate = {alphabetUpdate} 
            encrypt = {encrypt}
        />
        <CaseChars 
            selectCase = {selectCase}
            includeChars = {includeChars}
            encrypt = {encrypt}
        />
    </div>
    const switchBodyInput = () => {
        if(method === 'caesar') {
            if(direction !== 'crack'){
                bodyInput = 
                    <div className="block_body_input">
                        <CaesarShift                   
                            minus = {minus}
                            plus = {plus}
                            cShift = {cShift}
                            encrypt = {encrypt}
                        />
                    </div>
            } else bodyInput = null
        } else if(method === 'affine') {
            if(direction !== 'crack') {
                bodyInput = 
                <div className="block_body_input">
                    <Alpha
                        setAlpha = {setAlpha}
                        setBeta = {setBeta}
                        encrypt = {encrypt}
                    />
                </div>
            } else bodyInput = null
        } else if(method === 'vigenere') {
            if(direction !== 'crack') {
                bodyInput = 
                <div className="block_body_input">
                    <KeywordVigenere
                        updateKeyword={updateKeyword}
                        keywordVigenere={keywordVigenere}
                        encrypt = {encrypt}
                    />
                </div> 
            } else return null
        } else if(method === 'playfair') {
            if(direction !== 'crack') {
                bodyInput = 
                <div className="block_body_input">
                    <PlayfairSquare 
                        playSquare={playSquare}
                    />
                    <CharOptions />
                    <KeywordPlayfair
                        updateKeywordPlayfair={updateKeywordPlayfair}
                        keywordPlayfair={keywordPlayfair}
                        encrypt = {encrypt}
                    />
                </div> 
            } else return null
        }
        
        return bodyInput;
    }
    return (
        <>
            {switchBodyInput()}
            {direction !== 'crack' ? standartBlocks : null}
        </>
    )
}

export default BlockBodyInput