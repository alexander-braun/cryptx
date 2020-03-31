import React from 'react'


class PlayfaireSquare extends React.PureComponent {

    keys = ['iBkh','DBd5','JyyV','1Tks','FUdf','rMka','TVsa',
    '9b3','Dkl8','bkyB','Ljo8','ahyb','8gCx','ldv5',
    '6z4','5nD','yUs','2er','8QH','BHv','TJV',
    'wJn','DmX','JXz','bKq','coo']

    createVisualMatrix = () => {
        let parent = []
        let children = []
        for(let i = 0; i < 25; i++) {
            let ID = 'table' + i;
            children.push(
                <div    key={this.keys[i]} 
                        id={ID} 
                        className="playfairTable"
                    >
                        {this.props.playSquare[i]}
                </div>
            )
        }
        parent.push(
            <div id="visualMatrix" key='playKey' style={{boxShadow:'none'}} className="controller">{children}</div>
        )
        return parent
    }

    render() {
        return (
            <div className="controller" style={{boxShadow: 'inset 0 10px 10px -10px #00000030'}}>
                <div className="settings_name">PLAYFAIR SQUARE</div>
                <div className="settings_operators">
                    {this.createVisualMatrix()}
                </div>
                <div id="skytale_explanatory_text">
                    <p className="feature_text"> 
                        This method is a bit shaky encrypting forth and back. One letter is
                        left out and substituted with another letter - either not use this letter or
                        at least be aware that there might be inconsistencies. A substitution letter will 
                        be added if two of the same letters occure directly after each other (if the first letter 
                        is on an even index). Change the '<b>j</b>' in the default input message to an '<b>i</b>' 
                        for a better encryption result.
                    </p>
                </div>    
            </div> 
        )
    }
}

export default PlayfaireSquare
