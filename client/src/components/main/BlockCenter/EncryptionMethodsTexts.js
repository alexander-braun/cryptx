const explanatory = {
  atbash: {
    normal: `Atbash is a monoalphabetic substitution cipher. While it was used to encrypt the 
    hebrew alphabet, it can still be used to encrypt nearly all known alphabets. Atbash reverses 
    the mapping of the characters and is very easy to break.`,
    crack: `The cracking function does exactly the same as the encryption- and decryption algorithm.
    There is only one possibility for an encrypted letter to go to. F.e. the letter 'A' will
    always be mapped to 'Z' and 'Z' will always be mapped back to 'A'.`,
    linksrc: `https://en.wikipedia.org/wiki/Atbash`,
    linkname: `Atbash Cipher Wikipedia`,
  },
  rot13: {
    normal: `Rot 13 is a very simple substitution cipher. It is a special case of the Caesar Cipher 
    using a shift value of 13. It originated from the net.jokes newsgroup in the early 1980s.`,
    crack: `No Crack function yet  :(`,
    linksrc: `https://en.wikipedia.org/wiki/ROT13`,
    linkname: `Rot 13 Wikipedia`,
  },
  caesar: {
    normal: `The Caesar cipher is a substitution cypher wich was used by Julius Caesar to encrypt
    his correspondences. The classic shift of 3 maps every character 3 places before its original 
    position. F.e. a "T" in right shift would become a "W"`,
    crack: `Use this functionality on encrypted texts! This method uses a brute force attack with 
    the english dictionary. It gave better results for shorter phrases and words then frequency 
    analysis. If you want to decode longer texts it might be a bit slower though`,
    linksrc: `https://en.wikipedia.org/wiki/Caesar_cipher`,
    linkname: `Caesar's cipher Wikipedia`,
  },
  affine: {
    normal: `The affine cipher is a monoalphabetic substitution cipher. Each letter in the alphabet is 
    mapped to its numeric equivalent and encrypted using a simple formula: E(x) = (ax + b) mod m. The 
    resulting number is then converted back to its alphabetic equivalent`,
    crack: `No Crack function yet  :(`,
    linksrc: `https://en.wikipedia.org/wiki/Affine_cipher`,
    linkname: `Affine Cipher Wikipedia`,
  },
  nihilist: {
    normal: `Used by russian nihilists in the 1880's the cipher was used to organize attacks against 
    the tsarist regime. The cipher uses a polybius square with a mixed alphabet.`,
    crack: `No Crack function yet  :(`,
    linksrc: `https://en.wikipedia.org/wiki/Nihilist_cipher`,
    linkname: `Nihilist Cipher Wikipedia`,
  },
  substitution: {
    normal: `The substitution cipher substitutes letters of the the original alphabet with letters 
    from the new alphabet. Without the key, this cipher is very hard to crack.`,
    crack: `No Crack function yet  :(`,
    linksrc: `https://en.wikipedia.org/wiki/Substitution_cipher`,
    linkname: `Alphabetic Substitution Cipher`,
  },
  trifid: {
    normal: `The trifid cipher uses a table to fractionate each plaintext letter into a trigram, 
    mixes the constituents of the trigrams, and then applies the table in reverse to turn these 
    mixed trigrams into ciphertext letters. Delastelle notes that the most practical system uses 
    three symbols for the trigrams.`,
    linksrc: `https://en.wikipedia.org/wiki/Trifid_cipher`,
    linkname: `Trifid Cipher`,
  },
  casetransform: {
    normal: `Transforms your input text into the selected case-format.`,
  },
  reverse: {
    normal: `Reverses the input.`,
    crack: `No Crack function yet  :(`,
  },
  vigenere: {
    normal: `The Vigenère Cipher was invented by Giovan Battista Bellaso in 1553 and is a 
    polyalphabetic substitution cipher. It wasn't broken until 1863 and earned itself the 
    description "Le chiffre indéchiffrable.`,
    crack: `No Crack function yet  :(`,
    linksrc: `https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher`,
    linkname: `Vigenere Cipher Wikipedia`,
  },
  playfair: {
    normal: `The playfair cipher was invented in 1854 by Charles Wheatstone. It encrypts 
    pairs of letters instead of single letters and is harder to break then simple substitution 
    ciphers. There are 600 possible bigrams rather then 26 monograms wich makes it necessary 
    to obtain a longer encrypted text to break the cipher.`,
    crack: `No Crack function yet  :(`,
    linksrc: `https://en.wikipedia.org/wiki/Playfair_cipher`,
    linkname: `Playfair Cipher Wikipedia`,
  },
  morse: {
    normal: `The International Morse Code encodes the 26 English letters A through Z, some 
    non-English letters, the Arabic numerals and a small set of punctuation and procedural 
    signals (prosigns). There is no distinction between upper and lower case letters. Each 
    Morse code symbol is formed by a sequence of dots and dashes. The dot duration is the 
    basic unit of time measurement in Morse code transmission. The duration of a dash is 
    three times the duration of a dot. Each dot or dash within a character is followed by 
    period of signal absence, called a space, equal to the dot duration. The letters of a 
    word are separated by a space of duration equal to three dots, and the words are separated 
    by a space equal to seven dots.`,
    crack: `No Crack function yet  :(`,
    linksrc: 'https://en.wikipedia.org/wiki/Morse_code',
    linkname: `Morse Code Wikipedia`,
  },
  replace: {
    normal: `This function will replace any given letter/sign in a text with another character.`,
    crack: '',
    linksrc: '',
    linkname: '',
  },
  skytale: {
    normal: `The skytale is a tool to perform a transposition cipher. A cylinder is used to 
    wrap the message around it. It was used by the ancient greeks and the spartans to communicate 
    their battle plans.`,
    crack: `No Crack function yet  :(`,
    linksrc: `https://en.wikipedia.org/wiki/Scytale`,
    linkname: `Skytale Wikipedia`,
  },
  otp: {
    normal: `The OTP is an unbreakable form of encryption when used correctly. Every character 
    is encoded randomly to a new character. A "B" in one place can become a "Z" in another place. 
    The key has to be shared to decrypt messages.`,
    crack: `No Crack function yet  :(`,
    linksrc: `https://en.wikipedia.org/wiki/One-time_pad`,
    linkname: `One Time Pad`,
  },
  rsa: {
    normal: `RSA (Rivest–Shamir–Adleman) is one of the first public-key cryptosystems and 
    is widely used for secure data transmission. In such a cryptosystem, the encryption key 
    is public and distinct from the decryption key which is kept secret (private). In RSA, 
    this asymmetry is based on the practical difficulty of factoring the product of two large 
    prime numbers, the "factoring problem". The acronym RSA is the initial letters of the surnames 
    of Ron Rivest, Adi Shamir, and Leonard Adleman, who publicly described the algorithm in 1977. 
    Clifford Cocks, an English mathematician working for the British intelligence agency Government 
    Communications Headquarters (GCHQ), had developed an equivalent system in 1973, which was not 
    declassified until 1997.`,
    crack: `No Crack function yet  :(`,
    linksrc: `https://en.wikipedia.org/wiki/One-time_pad`,
    linkname: `One Time Pad`,
  },
};

export default explanatory;
