import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const TrifidLayers = (props) => {

    return (
        <div className="controller">
            <div className="settings_name">Trifid Layers</div>
            <div className="settings_operators trifid_layer">
                {[0, 1, 2].map(element => {
                    return (
                        <table key={uuidv4()} id="trifid_square">
                            <tbody style={{color: 'white'}}>
                                <tr>
                                    {
                                        [`L${element + 1}`, '1','2','3'].map(number => <th key={uuidv4()}>{number}</th>)
                                    }
                                </tr>
                                {   
                                    ['1','2','3'].map(number => {
                                        return (
                                            <tr key={uuidv4()}>
                                                <td>{number}</td>
                                                {props.trifidLayers[element][Number(number) - 1].map(num => {
                                                    return <td key={uuidv4()}>{num}</td>
                                                })}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                })}
            </div>
            <div id="trifid_explanatory_text">
                <p className="feature_text" style={{paddingTop:'0'}}> 
                    The Layers are generated from the standart english alphabet, the 27th character and the provided keyword.
                </p>
            </div>    
        </div> 
    )
}

const mapStateToProps = state => ({
    trifidLayers: state.trifid.trifidLayers
})

export default connect(mapStateToProps)(TrifidLayers)
