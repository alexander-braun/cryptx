import React from 'react'


class Rings extends React.Component {

    generateRingStyles(planeNumber, character, ringNumber) {
        
        let firstCharacterStyle = ''
        if(planeNumber === 0 && ringNumber === 0){ 
            firstCharacterStyle = '#ff2831'
        }

        // No value ? no background
        let transparencyValue = !character ? 'transparent' : ''

        // Calculates the arc radius with one piece width = 30px
        // Could scale bud didn't make sense yet
        let d = (30 / Math.PI) / (360 / this.props.ringLength / 360) / 2 - 5

        //rotateValue according to the piece of plane that will be rotated
        let rotateValue = 360 / this.props.ringLength + (planeNumber * 360 / this.props.ringLength) - 360 / this.props.ringLength

        let ringStyles =    { 
                                WebkitTransform: `rotateY(${rotateValue}deg) translateZ(${d}px)`,

                                backgroundColor: firstCharacterStyle !== '' ? firstCharacterStyle : transparencyValue
                            }
        return ringStyles
    }

    generateOneRingElement(indexOfCharacter, character, ringNumber) {

        // classes just for react key value
        let classes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
                        'nineteen', 'twenty']
        let div =   <div  
                        key={classes[indexOfCharacter] + character}
                        className={'plane ' + classes[indexOfCharacter]}
                        style={this.generateRingStyles(indexOfCharacter, character, ringNumber)}
                    >
                    {character}
                    </div>
        return div
    }

    generateAllRingElements(ringNumber) {
        let parent = []
        for(let i = 0; i < this.props.ringLength; i++) {
            
            // Loops throug the encrypted output and puts the generated ring element into the parent
            // The ring number accounts for the output[i] value used so every ring has the right letters
            parent.push(this.generateOneRingElement(i, this.props.outputValue[i + (ringNumber * this.props.ringLength)], ringNumber))
        }
        return parent
    }

    generateAllRings() {
        let parent = []
        for(let i = 0; i < this.props.skytaleLength; i++) {
            let ringNumber = i
            parent.push(
                <div key={i + 'ring'} className="shape ring">{this.generateAllRingElements(ringNumber)}</div>
            )
        }
        return parent
    }
    
    render() {
        return (
            <div className="controller">
                <div className="settings_name">SKYTALE</div>
                <div className="settings_operators" style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
                    <div id="ring_container">
                        <div 
                            id="turntable"
                            style={{height: `${this.props.skytaleLength * 25}px`}}
                        >
                            {this.generateAllRings()}
                        </div>
                    </div>
                    <div id="skytale_explanatory_text">
                        <p style={{fontSize: '10pt', padding: '16px', fontStyle: 'italic', fontWeight: '400'}}> 
                            You can only see a readable alignment of letters (top to bottom) if you are <b>encrypting
                            a cleartext</b> or <b>decrypting an encrypted text</b>. The ring-segments count needs to stay
                            exactly the same for both directions. The first letter of your message is marked in a darker 
                            <p style={{ backgroundColor: '#ff2831', 
                                        display: 'inline-block', 
                                        margin: '0px 4px', 
                                        padding: '0px 3px', 
                                        color: 'white', 
                                        fontWeight: 'bold',
                                        fontStyle: 'normal', 
                                        lineHeight: '1.2'}}
                            >
                            red
                            </p>
                        </p>
                    </div>    
                </div>
            </div> 
        )
    }
}

export default Rings
