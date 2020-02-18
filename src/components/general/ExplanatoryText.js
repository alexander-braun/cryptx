import React from 'react'

const ExplanatoryText = ({direction, method}) => {
  let expText
  if(method === 'caesar') {
    if(direction !== 'crack') {
      expText =     
      <div className="controller explanation">
        <p id="block_method_explanation">
            In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift 
            cipher, Caesar's code or Caesar shift, is one of the simplest and most 
            widely known encryption techniques. It is a type of substitution cipher 
            in which each letter in the plaintext is replaced by a letter some fixed 
            number of positions down the alphabet. For example, with a left shift of 3,
            D would be replaced by A, E would become B, and so on. The method is named 
            after Julius Caesar, who used it in his private correspondence.
  
            The encryption step performed by a Caesar cipher is often incorporated 
            as part of more complex schemes, such as the Vigenère cipher, and still 
            has modern application in the ROT13 system. As with all single-alphabet 
            substitution ciphers, the Caesar cipher is easily broken and in modern 
            practice offers essentially no communications security.
        </p>
        <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="blank">Caesar's cipher Wikipedia</a>
      </div>
    } else {
        expText =     
        <div className="controller explanation">
          <p id="block_method_explanation">
            This cracking function uses a brute force attack with the english dictionary. 
            It gave better results for shorter phrases and words then frequency analysis.
            If you want to decode longer texts it might be a bit slower though ;)
          </p>
          <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="blank">Caesar's cipher Wikipedia</a>
        </div>
    }
  } else if(method === 'affine') {
    if(direction === 'crack') {
      expText = 
      <div className="controller explanation">
        <p id="block_method_explanation">
          No Crack function yet  :(
        </p>
        <a href="https://en.wikipedia.org/wiki/Affine_cipher" target="blank">Affine cipher Wikipedia</a>
      </div>
    } else {
      expText =     
      <div className="controller explanation">
        <p id="block_method_explanation">
        The affine is a type of monoalphabetic substitution cipher, where each letter in an alphabet 
        is mapped to its numeric equivalent, encrypted using a simple mathematical function, and 
        converted back to a letter. The formula used means that each letter encrypts to one other 
        letter, and back again, meaning the cipher is essentially a standard substitution cipher 
        with a rule governing which letter goes to which. As such, it has the weaknesses of all 
        substitution ciphers. Each letter is enciphered with the function (ax + b) mod 26, where b 
        is the magnitude of the shift.
        </p>
        <a href="https://en.wikipedia.org/wiki/Affine_cipher" target="blank">Affine Cipher Wikipedia</a>
      </div>
    } 
  } else if(method === 'vigenere') {
    if(direction === 'crack') {
      expText = 
      <div className="controller explanation">
        <p id="block_method_explanation">
          No Crack function yet  :(
        </p>
        <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="blank">Vigenere Cipher Wikipedia</a>
      </div>
    } else {
      expText =     
      <div className="controller explanation">
        <p id="block_method_explanation">
        The Vigenère cipher is a method of encrypting alphabetic text 
        by using a series of interwoven Caesar ciphers, based on the letters of a keyword. It employs a 
        form of polyalphabetic substitution.

        First described by Giovan Battista Bellaso in 1553, the cipher is easy to understand and implement, 
        but it resisted all attempts to break it until 1863, three centuries later. This earned it the description 
        le chiffre indéchiffrable (French for 'the indecipherable cipher'). Many people have tried to 
        implement encryption schemes that are essentially Vigenère ciphers. In 1863, Friedrich Kasiski was 
        the first to publish a general method of deciphering Vigenère ciphers.

        In the 19th century the scheme was misattributed to Blaise de Vigenère (1523–1596), and so acquired 
        its present name.
        </p>
        <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="blank">Vigenere Cipher Wikipedia</a>
      </div>
    } 
  } else if(method === 'playfair') {
    if(direction === 'crack') {
      expText = 
      <div className="controller explanation">
        <p id="block_method_explanation">
          No Crack function yet  :(
        </p>
        <a href="https://en.wikipedia.org/wiki/Playfair_cipher" target="blank">Playfair Cipher Wikipedia</a>
      </div>
    } else {
      expText =     
      <div className="controller explanation">
        <p id="block_method_explanation">
          The Playfair cipher or Playfair square or Wheatstone-Playfair cipher is a manual symmetric encryption 
          technique and was the first literal digram substitution cipher. The scheme was invented in 1854 by 
          Charles Wheatstone, but bears the name of Lord Playfair for promoting its use.

          The technique encrypts pairs of letters (bigrams or digrams), instead of single letters as in the simple 
          substitution cipher and rather more complex Vigenère cipher systems then in use. The Playfair is thus 
          significantly harder to break since the frequency analysis used for simple substitution ciphers does 
          not work with it. The frequency analysis of bigrams is possible, but considerably more difficult. With 
          600 possible bigrams rather than the 26 possible monograms (single symbols, usually letters in this context),
          a considerably larger cipher text is required in order to be useful.
        </p>
        <a href="https://en.wikipedia.org/wiki/Playfair_cipher" target="blank">Playfair Cipher Wikipedia</a>
      </div>
    } 
  }
  
  return expText;
}

export default ExplanatoryText