import React from 'react'
import math from '../math/Math'
import rsa from './RSALogic'

const Primes = (props) => {

    return (
        
        <div className="controller double_content prime">
            <div className="controllbox">
                <div className="settings_name">Prime 1</div>
                <div className="settings_operators">
                    <textarea 
                        defaultValue={props.prime_one} 
                        type="text" 
                        id="prime_1" 
                        name="tentacles"
                        onChange = {(e) => {
                            props.setPrimeOne(e)
                        }}
                        >
                    </textarea>
                </div>
            </div>
            <div className="controllbox">
                <div className="settings_name">Prime 2</div>
                <div className="settings_operators">
                    <textarea 
                        defaultValue={props.prime_two} 
                        type="text" 
                        id="prime_2" 
                        name="tentacles"
                        onChange = {(e) => {
                            props.setPrimeTwo(e)
                        }}
                    >
                    </textarea>
                </div>
            </div>
            <div className="controllbox">
                <div className="settings_name">e = PUBLIC KEY</div>
                <div className="settings_operators">
                    <textarea 
                        defaultValue={props.e} 
                        type="text"
                        id="exponent" 
                        name="tentacles"
                        onChange = {(e) => {
                            props.setE(e)
                        }}
                    >
                    </textarea>
                </div>
            </div>
            <div className="controllbox">
                <div className="settings_name">n <i> = Prime1 * Prime2</i> = PUBLIC KEY</div>
                <div className="settings_operators">
                    <textarea defaultValue={props.n} type="text" id="prime_2" name="tentacles"></textarea>
                </div>
            </div>
            <div className="controllbox phi">
                <div className="settings_name">φ <i> = (Prime1 - 1) * (Prime2 - 1)</i></div>
                <div className="settings_operators">
                    <textarea defaultValue={props.phi} type="text" id="phi_number" name="tentacles"></textarea>
                </div>
            </div>
            <div className="controllbox">
                <div className="settings_name">d <i> = (e ^ −1) mod ϕ</i></div>
                <div className="settings_operators">
                    <textarea defaultValue={props.d} type="text" id="d_calculated" name="tentacles"></textarea>
                </div>
            </div>
        </div>
    )    
}



export default Primes
