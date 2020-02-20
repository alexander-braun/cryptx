import React from 'react'
import CaesarShift from '../caesar/CaesarShift'
import Alphabet from './Alphabet'
import CaseChars from './CaseChars'
import Alpha from '../affine/Alpha'
import KeywordVigenere from '../vigenere/KeywordVigenere'
import KeywordPlayfair from '../playfair/KeywordPlayfair'
import CharOptions from '../playfair/CharOptions'
import PlayfairSquare from '../playfair/PlayfairSquare'

const BlockBodyInput = ({   plusMinus,
                            cShift, 
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
                            playSquare }) => {
    let bodyInput;
    let standartBlocks =      
    <div>
        <Alphabet 
            alphabet = {alphabet} 
            alphabetUpdate = {alphabetUpdate} 
        />
        <CaseChars 
            selectCase = {selectCase}
            includeChars = {includeChars}
        />
    </div>
    const switchBodyInput = () => {
        if(method === 'caesar') {
            if(direction !== 'crack'){
                bodyInput = 
                    <div className="block_body_input">
                        <CaesarShift                   
                            plusMinus = {plusMinus}
                            cShift = {cShift}
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
                    />
                </div>
            } else bodyInput = null
        } else if(method === 'vigenere') {
            if(direction !== 'crack') {
                bodyInput = 
                <div className="block_body_input">
                    <KeywordVigenere
                        updateKeyword={updateKeyword}
                        keyword={keyword}
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
                        updateKeyword={updateKeyword}
                        keyword={keyword}
                    />
                </div> 
            } else return null
        } else if(method === 'morse') {
            if(direction !== 'crack') {
                bodyInput = null
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