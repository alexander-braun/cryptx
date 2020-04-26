import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const TrifidGroups = (props) => {

    const cleanInput = []
    const cleanInputLength = () => {
        let cleanInputLength = 0
        for(let i = 0; i < props.input.length; i++) {
            if(props.alphabet.indexOf(props.input[i].toLowerCase()) !== -1 || props.input[i].toLowerCase() === props.trifid27thLetter.toLowerCase()) {
                cleanInputLength++
                cleanInput.push(props.input[i])
            }
        }
        return cleanInputLength
    }

    return (
        <div className="controller">
            <div className="settings_name">Trifid Groups</div>
            <div className="settings_operators trifid_group">
                {[...Array(Math.ceil(cleanInputLength() / Number(props.trifidGroupSize))).keys()].map(element => {
                    return (
                        <table key={uuidv4()} id="trifid_square" className="trifid_groups">
                            <tbody style={{color: 'white'}}>
                                <tr>
                                    {
                                        cleanInput.slice(element * props.trifidGroupSize, element * props.trifidGroupSize + props.trifidGroupSize).map(letter => <th className="trifid_groups_tablehead" key={uuidv4()}>{letter}</th>)
                                    }
                                </tr>
                                    {
                                        [0,1,2].map(number => {
                                            return (
                                                <tr>
                                                    {
                                                        props.trifidGroups.slice(element * props.trifidGroupSize, element * props.trifidGroupSize + props.trifidGroupSize).map(element => {
                                                            return <td className="trifid_groups_number">{element[number] + 1}</td>
                                                        })
                                                    }
                                                </tr>
                                             )
                                        })
                                    }
                                <tr>
                                    {
                                        props.output.split('').slice(element * props.trifidGroupSize, element * props.trifidGroupSize + props.trifidGroupSize).map(letter => {
                                            return <td className="trifid_groups_encrypted">{letter}</td>
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
            </div>
            <div id="trifid_explanatory_text">
                <p className="feature_text" style={{paddingTop:'0'}}> 
                    The tablehead represents the letters of your input text. Numbers written under the letters are a representation of the encoded letter. F.e.: With the
                    standart 'Felix Marie...' - keyword, the letter "A" becomes a 1 (layer), 3 (row), 1 (column). The letters under the numbers represent the output. They
                    are encoded by horizontally combining each 3 numbers.
                </p>
            </div>    
        </div> 
    )
}

const mapStateToProps = state => ({
    trifidGroups: state.trifid.trifidGroups,
    trifidGroupSize: state.trifid.trifidGroupSize,
    trifid27thLetter: state.trifid.trifid27thLetter,
    input: state.input,
    alphabet: state.alphabet.alphabet,
    output: state.output
})

export default connect(mapStateToProps)(TrifidGroups)
