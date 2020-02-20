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
            </div> 
        )
    }
}

export default PlayfaireSquare
