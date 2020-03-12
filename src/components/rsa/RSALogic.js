import math from '../math/Math'
import Alphabet from '../general/Alphabet';
const bigintModArith = require('bigint-mod-arith');
/* global BigInt */

//reading
//https://www.di-mgt.com.au/rsa_alg.html
//https://www.thedigitalcatonline.com/blog/2018/04/25/rsa-keys/
//https://primes.utm.edu/lists/small/small.html


const rsa = (() => {

    let prime_one, prime_two, e, phi, userInput, n, d


    const setPrimeOne = (val) => {
        prime_one = val
    }

    const setPrimeTwo = (val) => {
        prime_two = val
    }

    const setE = (val) => {
        e = val
    }

    const setUserInput = (val) => {
        userInput = val
    }

    const textToHex = (input) => {
        let hexArr = []
        for(let i = 0; i < input.length; i++) {
            let hexCode = Number(input.charCodeAt(i)).toString(16)
            hexArr.push(hexCode)
        }
        return hexArr
    }

    const hexToDecimal = (input) => {
        let decimalArr = []
        for(let element of input) {
            decimalArr.push(parseInt(element, 16))
        }
        return String(decimalArr.join(''))
    }

    const decimalToHex = (input) => {
        let hexArr = []
        for(let element of input) {
            hexArr.push(element.toString(16))
        }
    }

    const hexToText = (hex) => {
        let textArr = []
        for(let i = 0; i < hex.length; i++) {
            let text = String.fromCharCode(parseInt(hex[i], 16))
            textArr.push(text)
        }
        return textArr.join('')
    }

    const bigToNumber = (arr) => {
        let numberArr = []
        for(let element of arr) {
            numberArr.push(Number(element.toString()))
        }
        return numberArr
    }

    const encrypt = () => {
        var t0 = performance.now();

        //First check if phi and e are coprime otherwise this is a waste of time.
        let gcd = bigintModArith.gcd(BigInt(phi), BigInt(e))
        if (gcd !== BigInt(1)) return '!!! φ(n) and e are not coprime - gcd of φ(n) and e is ' + gcd + ' Please check that you have two prime numbers and an appropriate e without a common gcd!!!'

        if(!userInput || !e || !n) return
        //Convert Input to Dezimal to get an encryptable number
        let inputArr = userInput.split('')
        let dezArr = []
        for(let element of inputArr) {
            dezArr.push(element.charCodeAt(0))
        }
        let longNumber = dezArr.join('')
        //Encrypt the Number
        let encryptedDEZ = bigintModArith.modPow(longNumber, e, n)


        //let encryptedHEX = encryptedDEZ.toString(16)
        var t1 = performance.now();

        return [encryptedDEZ.toString(), ((t1 - t0) / 1000).toString() + 's']
    }

    const decrypt = () => {
        var t0 = performance.now();

        //Check if we are trying to decrypt a number
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'

        for(let i = 0; i < userInput.length; i++) {
            if(alphabet.indexOf(userInput[i]) !== -1) return `Please don't enter anything but a big number into the input field when you decrypt something.`
        }

        let decryptedDEZ = bigintModArith.modPow(userInput, d, n).toString()
        let decryptedArr = []
        let i = 0;
        while(decryptedDEZ.length > 0) {
            if(Number(String(decryptedDEZ[i]) + String(decryptedDEZ[i + 1]) + String(decryptedDEZ[i + 2])) <= 255) {
                decryptedArr.push(Number(String(decryptedDEZ[i]) + String(decryptedDEZ[i + 1]) + String(decryptedDEZ[i + 2])))
                decryptedDEZ = decryptedDEZ.slice(3)
            }
            else if(Number(String(decryptedDEZ[i]) + String(decryptedDEZ[i + 1])) <= 255) {
                decryptedArr.push(Number(String(decryptedDEZ[i]) + String(decryptedDEZ[i + 1])))
                decryptedDEZ = decryptedDEZ.slice(2)
            }
            else {
                console.log(decryptedDEZ)
                return
            } 
        }
        
        let decryptedLetters = []
        for(let i = 0; i < decryptedArr.length; i++) {
            let char = String.fromCharCode(decryptedArr[i])
            decryptedLetters.push(char)
        }

        var t1 = performance.now();

        return [decryptedLetters.join(''), ((t1 - t0) / 1000).toString() + 's']
    }

    const calcPhi = () => {
        let bigP1 = BigInt(prime_one)
        let bigP2 = BigInt(prime_two)
        let big1 = BigInt(1)
        phi = ((bigP1 - big1) * (bigP2 - big1))
        return phi.toString()
      }
    
    const calcD = () => {

        if(!e || !phi || e === null || phi === null) return
        if(bigintModArith.modInv(e, phi) === null) return

        d = BigInt(bigintModArith.modInv(e, phi)).toString()
        return d
    }

    const calcN = () => {
        n = BigInt(prime_one) * BigInt(prime_two)
        return n.toString()
    }

    return {
        encrypt: encrypt,
        textToHex: textToHex,
        hexToDecimal: hexToDecimal,
        bigToNumber: bigToNumber,
        decimalToHex: decimalToHex,
        calcD: calcD,
        calcPhi: calcPhi,
        setPrimeOne: setPrimeOne,
        setPrimeTwo: setPrimeTwo,
        setE: setE,
        calcN: calcN,
        setUserInput: setUserInput,
        decrypt: decrypt
    }
})()

export default rsa