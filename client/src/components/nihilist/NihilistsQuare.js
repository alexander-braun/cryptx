import React from 'react'
import { connect } from 'react-redux'
import '../../styles/nihilistSquare.css'

class NihilistSquare extends React.PureComponent {

    createVisualMatrix = () => {
        let table = (
            <table id="nihilistSquare">
                <tbody style={{color: 'white'}}>
                    <tr>
                        {
                            ['#', '1','2','3','4','5'].map(number => <th key={`nihilTH${number}`}>{number}</th>)
                        }
                    </tr>
                    {   
                        ['1','2','3','4','5'].map(number => {
                            return (
                                <tr key={`nihilTR${number}`}>
                                    <td key={`nihilTD1${number}`}>{number}</td>
                                    {this.props.nihilistSquare[Number(number) - 1].map(num => <td key={`nihilTD2${number}${num}`}>{num}</td>)}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )

        return table
    }

    render() {
        return (
            <div className="controller" style={{borderBottom:'none'}}>
                <div className="settings_name">Nihilist Polybius Square</div>
                <div className="settings_operators">
                    {this.createVisualMatrix()}
                </div>
                <div id="skytale_explanatory_text">
                    <p className="feature_text"> 
                        This method is a bit shaky encrypting forth and back. The letter "J" is left out and will
                        be replaced by an 'I' - either not use this letter or at least be aware that there might be 
                        inconsistencies. 
                    </p>
                </div>    
            </div> 
        )
    }
}

const mapStateToProps = state => ({
    nihilistSquare: state.nihilistSquare
})

export default connect(mapStateToProps)(NihilistSquare)
