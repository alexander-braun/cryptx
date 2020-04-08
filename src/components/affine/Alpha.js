import React from 'react'

const Alpha = ({setAlpha, setBeta}) => {
    const optionsBeta = () => {
        const optionsArray = []
        for(let i = 0; i < 25; i++) {
            optionsArray.push(<option value={i + 1}>{i + 1}</option>)
        }
        return optionsArray
    }
    return (
        <div className="controller double_content">
            <div className="controllbox">
                <div className="settings_name" style={{textTransform: 'none'}}>α</div>
                <div className="settings_operators">
                    <select 
                        defaultValue="5" 
                        className="affine"
                        onChange = {(evt) => {
                            setAlpha(evt)
                        }}
                    >
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="9">9</option>
                        <option value="11">11</option>
                        <option value="15">15</option>
                        <option value="17">17</option>
                        <option value="19">19</option>
                        <option value="21">21</option>
                        <option value="23">23</option>
                        <option value="25">25</option>
                    </select>
                </div>
            </div>
            <div className="controllbox" style={{borderRight: 'none'}}>
                <div className="settings_name" style={{textTransform: 'none'}}>β</div>
                <div className="settings_operators">
                    <select 
                        defaultValue="1" 
                        className="affine"
                        onChange = {(evt) => {
                            setBeta(evt)
                        }}
                    >   
                        {optionsBeta().map(option => option)}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Alpha
