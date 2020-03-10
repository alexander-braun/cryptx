import math from '../math/Math'
import Alphabet from '../general/Alphabet';
const bigintModArith = require('bigint-mod-arith');
/* global BigInt */

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
        let encryptedHEX = encryptedDEZ.toString(16)
        let decryptedDEZ = bigintModArith.modPow(encryptedDEZ, d, n)
        /*
        let gcd = bigintModArith.gcd(phi, e)
        console.log(encryptedDEZ)
        console.log(decryptedDEZ)
        */
        return encryptedDEZ.toString()
    }

    const decrypt = () => {
        console.log(typeof userInput)
        if('abcdefghijklmnopqrstuvwxyz'.indexOf(userInput[0]) !== -1) return
        console.log('hey')
        let decryptedDEZ = bigintModArith.modPow(userInput, d, n).toString()
        
        
        return decryptedDEZ
    }

    const calcPhi = () => {
        let bigP1 = BigInt(prime_one)
        let bigP2 = BigInt(prime_two)
        let big1 = BigInt(1)
        phi = ((bigP1 - big1) * (bigP2 - big1))
        return phi.toString()
      }
    
    const calcD = () => {
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