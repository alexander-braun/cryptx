import React from 'react'


const PlayfaireSquare= ({playSquare}) => {
        return (
                <div className="controller">
                    <div className="settings_name">Playfaire Square</div>
                    <div className="settings_operators">
                        <div id="visualMatrix" className="controller">
                            <div id="table0" className="playfairTable">{playSquare[0]}</div>
                            <div id="table1" className="playfairTable">{playSquare[1]}</div>
                            <div id="table2" className="playfairTable">{playSquare[2]}</div>
                            <div id="table3" className="playfairTable">{playSquare[3]}</div>
                            <div id="table4" className="playfairTable">{playSquare[4]}</div>
                            <div id="table5" className="playfairTable">{playSquare[5]}</div>
                            <div id="table6" className="playfairTable">{playSquare[6]}</div>
                            <div id="table7" className="playfairTable">{playSquare[7]}</div>
                            <div id="table8" className="playfairTable">{playSquare[8]}</div>
                            <div id="table9" className="playfairTable">{playSquare[9]}</div>
                            <div id="table10" className="playfairTable">{playSquare[10]}</div>
                            <div id="table11" className="playfairTable">{playSquare[11]}</div>
                            <div id="table12" className="playfairTable">{playSquare[12]}</div>
                            <div id="table13" className="playfairTable">{playSquare[13]}</div>
                            <div id="table14" className="playfairTable">{playSquare[14]}</div>
                            <div id="table15" className="playfairTable">{playSquare[15]}</div>
                            <div id="table16" className="playfairTable">{playSquare[16]}</div>
                            <div id="table17" className="playfairTable">{playSquare[17]}</div>
                            <div id="table18" className="playfairTable">{playSquare[18]}</div>
                            <div id="table19" className="playfairTable">{playSquare[19]}</div>
                            <div id="table20" className="playfairTable">{playSquare[20]}</div>
                            <div id="table21" className="playfairTable">{playSquare[21]}</div>
                            <div id="table22" className="playfairTable">{playSquare[22]}</div>
                            <div id="table23" className="playfairTable">{playSquare[23]}</div>
                            <div id="table24" className="playfairTable">{playSquare[24]}</div>
                        </div>
                    </div>
                </div>
                
        )
}

export default PlayfaireSquare
