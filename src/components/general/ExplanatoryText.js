import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  body: {
    fontSize: theme.typography.pxToRem(13)
  },
  link: {
    marginTop: '10px',
    fontSize: theme.typography.pxToRem(14)
  }

}));

const ExplanatoryText = (props) => {
  const classes = useStyles();
  let expText
  if(props.method === 'atbash') {
    if(props.direction !== 'crack') {
      expText = 
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>More Details</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.body}>
          Atbash (Hebrew: אתבש‎; also transliterated Atbaš) is a monoalphabetic 
          substitution cipher originally used to encrypt the Hebrew alphabet. 
          It can be modified for use with any known writing system with a standard 
          collating order.
          </Typography>
          <Typography className={classes.link}>
            <a href="https://en.wikipedia.org/wiki/Atbash" target="blank">Atbash Cipher Wikipedia</a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
        
    } 
    else {
      expText = 
      
        <div className="controller explanation">
          <p className="block_method_explanation">
            The cracking function does exactly the same as the encryption- and decryption algorithm.
            There is only one possibility for an encrypted letter to go to. F.e. the letter 'A' will
            always be mapped to 'Z' and 'Z' will always be mapped back to 'A'.
          </p>
          <a href="https://en.wikipedia.org/wiki/Atbash" target="blank">Atbash Cipher Wikipedia</a>
        </div>
    }
  }
  if(props.method === 'caesar') {
    if(props.direction !== 'crack') {
      expText =     
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>More Details</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.body}>
              In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift 
              cipher, Caesar's code or Caesar shift, is one of the simplest and most 
              widely known encryption techniques. It is a type of substitution cipher 
              in which each letter in the plaintext is replaced by a letter some fixed 
              number of positions down the alphabet. For example, with a left shift of 3,
              D would be replaced by A, E would become B, and so on. The method is named 
              after Julius Caesar, who used it in his private correspondence.
            </Typography>
            <Typography className={classes.link}>
              <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="blank">Caesar's cipher Wikipedia</a>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    } else {
        expText =     
        <div className="controller explanation">
          <p className="block_method_explanation">
            <b style={{fontSize: '1.25em'}}>Use this functionality on encrypted texts!</b><br></br><br></br>
            This method uses a brute force attack with the english dictionary. 
            It gave better results for shorter phrases and words then frequency analysis.
            If you want to decode longer texts it might be a bit slower though ;)
          </p>
          <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="blank">Caesar's cipher Wikipedia</a>
        </div>
    }
  } else if(props.method === 'affine') {
      if(props.direction === 'crack') {
        expText = 
          <div className="controller explanation">
            <p className="block_method_explanation">
              No Crack function yet  :(
            </p>
            <a href="https://en.wikipedia.org/wiki/Affine_cipher" target="blank">Affine cipher Wikipedia</a>
          </div>
      } else {
        expText =   
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>More Details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.body}>
                The affine is a type of monoalphabetic substitution cipher, where each letter in an alphabet 
                is mapped to its numeric equivalent, encrypted using a simple mathematical function, and 
                converted back to a letter. The formula used means that each letter encrypts to one other 
                letter, and back again, meaning the cipher is essentially a standard substitution cipher 
                with a rule governing which letter goes to which. As such, it has the weaknesses of all 
                substitution ciphers. Each letter is enciphered with the function (ax + b) mod 26, where b 
                is the magnitude of the shift.
              </Typography>
              <Typography className={classes.link}>
                <a href="https://en.wikipedia.org/wiki/Affine_cipher" target="blank">Affine Cipher Wikipedia</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
      } 
  } else if(props.method === 'vigenere') {
      if(props.direction === 'crack') {
        expText = 
        <div className="controller explanation">
          <p className="block_method_explanation">
            No Crack function yet  :(
          </p>
          <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="blank">Vigenere Cipher Wikipedia</a>
        </div>
      } else {
        expText =    
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>More Details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.body}>
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
              </Typography>
              <Typography className={classes.link}>
                <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="blank">Vigenere Cipher Wikipedia</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel> 
      } 
  } else if(props.method === 'playfair') {
      if(props.direction === 'crack') {
        expText = 
        <div className="controller explanation">
          <p className="block_method_explanation">
            No Crack function yet  :(
          </p>
          <a href="https://en.wikipedia.org/wiki/Playfair_cipher" target="blank">Playfair Cipher Wikipedia</a>
        </div>
      } else {
        expText =  
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>More Details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.body}>
                The Playfair cipher or Playfair square or Wheatstone-Playfair cipher is a manual symmetric encryption 
                technique and was the first literal digram substitution cipher. The scheme was invented in 1854 by 
                Charles Wheatstone, but bears the name of Lord Playfair for promoting its use.

                The technique encrypts pairs of letters (bigrams or digrams), instead of single letters as in the simple 
                substitution cipher and rather more complex Vigenère cipher systems then in use. The Playfair is thus 
                significantly harder to break since the frequency analysis used for simple substitution ciphers does 
                not work with it. The frequency analysis of bigrams is possible, but considerably more difficult. With 
                600 possible bigrams rather than the 26 possible monograms (single symbols, usually letters in this context),
                a considerably larger cipher text is required in order to be useful.
              </Typography>
              <Typography className ={classes.link}>
                <a href="https://en.wikipedia.org/wiki/Playfair_cipher" target="blank">Playfair Cipher Wikipedia</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel> 
      } 
  } else if(props.method === 'morse') {
      if(props.direction === 'crack') {
        expText = 
        <div className="controller explanation">
          <p className="block_method_explanation">
            No Crack function yet  :(
          </p>
          <a href="https://en.wikipedia.org/wiki/Morse_code" target="blank">Morse Code Wikipedia</a>
        </div>
      } else {
        expText =     
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>More Details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.body}>
                The International Morse Code encodes the 26 English letters A through Z, some non-English letters, the Arabic 
                numerals and a small set of punctuation and procedural signals (prosigns). There is no distinction between upper
                and lower case letters. Each Morse code symbol is formed by a sequence of dots and dashes. The dot duration 
                is the basic unit of time measurement in Morse code transmission. The duration of a dash is three times the 
                duration of a dot. Each dot or dash within a character is followed by period of signal absence, called a space, 
                equal to the dot duration. The letters of a word are separated by a space of duration equal to three dots, and 
                the words are separated by a space equal to seven dots.To increase the efficiency of encoding, Morse code was 
                designed so that the length of each symbol is approximately inverse to the frequency of occurrence in text of the 
                English language character that it represents. Thus the most common letter in English, the letter "E", has the 
                shortest code: a single dot. Because the Morse code elements are specified by proportion rather than specific 
                time durations, the code is usually transmitted at the highest rate that the receiver is capable of decoding. The
                Morse code transmission rate (speed) is specified in groups per minute, commonly referred to as words per minute.
              </Typography>
              <Typography className={classes.link}>
                <a href="https://en.wikipedia.org/wiki/Morse_code" target="blank">Morse Code Wikipedia</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel> 
      } 
  } else if(props.method === 'replace') {
      if(props.direction === 'crack') {
        expText = 
        <div className="controller explanation">
          <p className="block_method_explanation">
            No Crack function yet  :(
          </p>
        </div>
      } else {
        expText = 
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>More Details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.body}>
                This function will replace any given letter/sign in a text with another character.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel> 
      } 
  } else if(props.method === 'skytale') {
    if(props.direction === 'crack') {
      expText = 
      <div className="controller explanation">
        <p className="block_method_explanation">
          No Crack function yet  :(
        </p>
        <a href="https://en.wikipedia.org/wiki/Scytale" target="blank">Skytale Wikipedia</a>
      </div>
    } else {
      expText =    
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>More Details</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.body}>
              In cryptography, a scytale is a tool used to perform a transposition cipher, consisting of a 
              cylinder with a strip of parchment wound around it on which is written a message. The ancient 
              Greeks, and the Spartans in particular, are said to have used this cipher to communicate during 
              military campaigns.
    
              The recipient uses a rod of the same diameter on which the parchment is wrapped to read the message. 
              It has the advantage of being fast and not prone to mistakes—a necessary property when on the 
              battlefield. It can, however, be easily broken. Since the strip of parchment hints strongly at the 
              method, the ciphertext would have to be transferred to something less suggestive, somewhat reducing 
              the advantage noted.
            </Typography>
            <Typography className={classes.link}>
              <a href="https://en.wikipedia.org/wiki/Scytale" target="blank">Skytale Wikipedia</a>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>  
    } 
  } else if(props.method === 'otp') {
    if(props.direction === 'crack') {
      expText = 
      <div className="controller explanation">
        <p className="block_method_explanation">
          No Crack function yet  :(
        </p>
        <a href="https://en.wikipedia.org/wiki/One-time_pad" target="blank">One Time Pad</a>
      </div>
    } else {
      expText =    
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>More Details</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.body}>
              In cryptography, the one-time pad (OTP) is an encryption technique that cannot be cracked, 
              but requires the use of a one-time pre-shared key the same size as, or longer than, the message 
              being sent. In this technique, a plaintext is paired with a random secret key (also referred 
              to as a one-time pad). Then, each bit or character of the plaintext is encrypted by combining 
              it with the corresponding bit or character from the pad using modular addition. If the key 
              is truly random, at least as long as the plaintext, never reused in whole or in 
              part, and kept completely secret, then the resulting ciphertext will be impossible to 
              decrypt or break. It has also been proven that any cipher with the property of perfect 
              secrecy must use keys with effectively the same requirements as OTP keys. Digital versions 
              of one-time pad ciphers have been used by nations for critical diplomatic and military 
              communication, but the problems of secure key distribution have made them impractical for 
              most applications.
            </Typography>
            <Typography className={classes.link}>
              <a href="https://en.wikipedia.org/wiki/One-time_pad" target="blank">One Time Pad</a>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>   
    } 
  } else if(props.method === 'rsa') {
    if(props.direction === 'crack') {
      expText = 
      <div className="controller explanation">
        <p className="block_method_explanation">
          No Crack function yet  :(
        </p>
        <a href="https://en.wikipedia.org/wiki/One-time_pad" target="blank">One Time Pad</a>
      </div>
    } else {
      expText =    
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>More Details</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.body}>
              RSA (Rivest–Shamir–Adleman) is one of the first public-key cryptosystems and is widely used for secure data 
              transmission. In such a cryptosystem, the encryption key is public and distinct from the decryption key which 
              is kept secret (private). In RSA, this asymmetry is based on the practical difficulty of factoring the product 
              of two large prime numbers, the "factoring problem". The acronym RSA is the initial letters of the surnames of 
              Ron Rivest, Adi Shamir, and Leonard Adleman, who publicly described the algorithm in 1977. Clifford Cocks, an 
              English mathematician working for the British intelligence agency Government Communications Headquarters (GCHQ), 
              had developed an equivalent system in 1973, which was not declassified until 1997.
            </Typography>
            <Typography className={classes.link}>
              <a href="https://en.wikipedia.org/wiki/One-time_pad" target="blank">One Time Pad</a>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>   
    } 
  }
  return expText ? expText : null;
}

const mapStateToProps = state => ({
  direction: state.toggleDirection.direction
})

export default connect(mapStateToProps)(ExplanatoryText)


