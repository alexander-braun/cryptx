import math from '../math/Math'
const bigintModArith = require('bigint-mod-arith');
/* global BigInt */

const rsa = (() => {

    let prime_one, prime_two, e, phi


    const setPrimeOne = (val) => {
        prime_one = val
    }

    const setPrimeTwo = (val) => {
        prime_two = val
    }

    const setE = (val) => {
        e = val
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

    const encrypt = (dez, e, n) => {
        let a = BigInt(Number(dez))
        let output = bigintModArith.modPow(a, e, n)
        return output
    }

    const calcPhi = () => {
        phi = (prime_one - 1) * (prime_two - 1)  
        return phi
      }
    
    const calcD = () => {
        return bigintModArith.modInv(e, phi).toString()
    }

    const calcN = () => {
        return prime_one * prime_two
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
        calcN: calcN
    }
})()

export default rsa