import React from 'react'
import { connect } from 'react-redux'
import setAffineAlpha from '../../actions/setAffineAlpha'
import setAffineBeta from '../../actions/setAffineBeta'

const AlphaBeta = (props) => {
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
                            props.setAffineAlpha(evt.target.value)
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
                            props.setAffineBeta(evt.target.value)
                        }}
                    >   
                        {optionsBeta().map(option => option)}
                    </select>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    affine_alpha: state.affine.affine_alpha,
    affine_beta: state.affine.affine_beta
})

const mapActionsToProps = {
    setAffineAlpha: setAffineAlpha,
    setAffineBeta: setAffineBeta
}

export default connect(mapStateToProps, mapActionsToProps)(AlphaBeta)
