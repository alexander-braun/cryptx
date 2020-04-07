import React from 'react'
import { connect } from 'react-redux'


const Primes = (props) => {

    const cleanPrime = (rawInput) => {
        if(rawInput.length !== 0) {
            let numbers = '0123456789'
            let cleanInput = []
            for(let element of rawInput) {
                if(numbers.indexOf(element) !== -1) cleanInput.push(element)
            }    
            return cleanInput.join('')    
        }
    }

    return (
        <div className = 'primes'>
            <div className="controller double_content prime">
                <div className="controllbox">
                    <div className="settings_name">Prime 1</div>
                    <div className="settings_operators">
                        <textarea 
                            type="text" 
                            id="prime_1" 
                            name="tentacles"
                            style={{boxShadow: 'none'}}
                            defaultValue={props.prime_one} 
                            onChange = {(e) => {
                                let input = cleanPrime(e.target.value)
                                props.setPrimeOne(input)
                            }}
                            >
                        </textarea>
                    </div>
                </div>
                <div className="controllbox" style={{borderRight: 'none'}}>
                    <div className="settings_name">Prime 2</div>
                    <div className="settings_operators">
                        <textarea 
                            type="text" 
                            id="prime_2" 
                            name="tentacles"
                            style={{boxShadow: 'none'}}
                            defaultValue={props.prime_two} 
                            onChange = {(e) => {
                                let input = cleanPrime(e.target.value)
                                props.setPrimeTwo(input)
                            }}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="controllbox">
                    <div className="settings_name">e = PUBLIC KEY</div>
                    <div className="settings_operators">
                        <textarea 
                            type="text"
                            id="exponent" 
                            name="tentacles"
                            defaultValue={props.e}
                            style={{boxShadow: 'none'}}
                            onChange = {(e) => {
                                props.setE(e)
                            }}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="controllbox" style={{borderRight: 'none'}}>
                    <div className="settings_name">n = PUBLIC KEY</div>
                    <div className="settings_operators">
                        <textarea style={{boxShadow: 'none'}} defaultValue={props.n} type="text" id="prime_2" name="tentacles"></textarea>
                    </div>
                </div>
                <div className="controllbox phi">
                    <div className="settings_name">φ<i>=(Prime1 - 1)*(Prime2 - 1)</i></div>
                    <div className="settings_operators">
                        <textarea style={{boxShadow: 'none'}} defaultValue={props.phi} type="text" id="phi_number" name="tentacles"></textarea>
                    </div>
                </div>
                <div className="controllbox" style={{borderRight: 'none'}}>
                    <div className="settings_name">d <i> = (e ^ −1) mod ϕ</i></div>
                    <div className="settings_operators">
                        <textarea style={{boxShadow: 'none'}} defaultValue={props.d} type="text" id="d_calculated" name="tentacles"></textarea>
                    </div>
                </div>
                <div className="controllbox" style={{border: 'none', borderBottom: '1px solid #444444'}}>
                    <div className="settings_name">Time to calculate</div>
                    <div className="settings_operators">{props.timeToCalculate}</div>
                </div>
            </div>
            <div className="caesar_explanatory_text">
                <div className="feature_text">
                    <p>
                        To encrypt longer messages, use longer prime numbers from this site:&nbsp;
                        <a href="https://primes.utm.edu/curios/page.php?number_id=3818" target="blank">primes.utm.edu</a><br></br>
                        (spaces are automatically beeing removed from the input when you copy-paste). If your computer feels
                        stuck for some seconds, that's because it's calculating.
                    </p>
                    <p>
                        This site is using a <strong className="underline">pure</strong> version of RSA. 
                        First every character is encoded to it's character-code equivalent. Then all character 
                        codes are joined together into a big number and the actual encryption takes place.
                    </p>
                    <p>
                        For the decryption process the encrypted message is first decoded and is then ready to be converted 
                        back to it's character codes and original characters.
                    </p>
                    <p>
                        A regular RSA algorithm is usually only used as a way to encrypt keys for symmetric
                        encrytion algorithms like AES - it's a misconception, that the actual message is encrypted
                        using RSA. There is also a padding scheme (OAEP) involved to obscure
                        potentially insecure messages and make them harder to break. RSA is incredibly
                        slow when used with longer messages/bigger prime numbers. <strong className="underline">The longer the message that 
                        you want to encrypt, the more digits your prime numbers needs to have for the algorithm to work.</strong>        
                    </p>
                    
                </div>
            </div>
        </div>
    )    
}

export default connect()(Primes)
