import React from 'react'


class PlayfaireSquare extends React.Component {

    createVisualMatrix = () => {
        let parent = []
        let children = []
        for(let i = 0; i < 25; i++) {
            let ID = 'table' + i;
            children.push(
                <div    key={ID} 
                        id={ID} 
                        className="playfairTable"
                    >
                        {this.props.playSquare[i]}
                </div>
            )
        }
        parent.push(
            <div id="visualMatrix" className="controller">{children}</div>
        )
        return parent
    }

    render() {
        return (
            <div className="controller">
                <div className="settings_name">PLAYFAIR SQUARE</div>
                <div className="settings_operators">
                    {this.createVisualMatrix()}
                </div>
                <div id="skytale_explanatory_text">
                    <p style={{fontSize: '10pt', padding: '16px', fontStyle: 'italic', fontWeight: '400', margin: '0'}}> 
                        This method is a bit shaky when it comes to encoding forth and back. As one letter is
                        left out and substituted with another letter - either not use this letter or
                        at least be aware that there might be inconsistencies. Also a substitution letter will 
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
