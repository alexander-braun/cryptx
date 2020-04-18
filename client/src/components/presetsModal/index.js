import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { togglePresetsModal } from '../../actions/togglePresetsModal'
import '../../styles/modal.css'
import { loadPresets, addPreset } from '../../actions/addPreset'
import GetAppIcon from '@material-ui/icons/GetApp'
import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import { setCshift } from '../../actions/setCShift'
import { updateInput } from '../../actions/updateInput'
import toggleChars from '../../actions/toggleIncludeChars'
import toggleCase from '../../actions/toggleCase'
import updateAlphabet from '../../actions/updateAlphabet'
import { changeMethod } from '../../actions/changeMethod'
import { toggleDirection } from '../../actions/toggleDirection'
import setPrime1 from '../../actions/setPrime1'
import setPrime2 from '../../actions/setprime2'
import setRsaE from '../../actions/setRsaE'
import setKeywordVigenere from '../../actions/setKeywordVigenere'
import setKeywordPlayfair from '../../actions/setKeywordPlayfair'
import setOtpKey from '../../actions/setOtpKey'
import { setRinglength } from '../../actions/setRingLength'
import setPresetDescription from '../../actions/setPresetDescription'
import setPresetName from '../../actions/setPresetName'
import { toReplaceLetter, replaceLetter } from '../../actions/replace'
import setAffineAlpha from '../../actions/setAffineAlpha'
import setAffineBeta from '../../actions/setAffineBeta'


class PresetsModal extends React.Component {
    constructor(props){
        super(props)
        this.genTable = this.genTable.bind(this)
        this.handleLoadPreset = this.handleLoadPreset.bind(this)
        this.handleSavePreset = this.handleSavePreset.bind(this)
    }
    genTable = () => {
        let presetTable = []
        let ind = 0
        for(let preset of this.props.presets) {
            presetTable.push(
                <tr key={preset._id}>
                    <td className="presets_id">{ind}</td>
                    <td>{preset.name}</td>
                    <td>{preset.preset.method}</td>
                    <td>{preset.description}</td>
                    <td id={preset._id} onClick={e => this.handleLoadPreset(preset._id)} className="presetBtn"><GetAppIcon /></td>
                    <td className="presetBtn"><EditIcon /></td>
                    <td className="presetBtn"><DeleteForeverIcon /></td>
                </tr>
            )
            ind++
        }
        return presetTable
    }

    componentDidUpdate(prevProps) {
        this.props.loadPresets()
        if(prevProps.presets.length !== this.props.presets.length) {
            this.genTable()
        }
    }

    componentWillMount() {
        this.props.loadPresets()
    }

    handleLoadPreset = (id) => {
        let selected
        for(let preset of this.props.presets) {
            if(preset._id === id) {
                selected = preset
            }
        }
        let { 
            method, 
            input, 
            alphabet, 
            cShift, 
            direction, 
            caseFormat, 
            foreignChars, 
            prime1, 
            prime2,
            RsaE, 
            keywordVigenere, 
            keywordPlayfair, 
            otpKey, 
            ringLength,
            replaceLetter,
            toReplaceLetter,
            affine_alpha,
            affine_beta,

        } = selected.preset

        method !== undefined && this.props.changeMethod(method)
        input !== undefined && this.props.updateInput(input)
        alphabet !== undefined && this.props.updateAlphabet(alphabet)
        cShift !== undefined && this.props.setCshift(cShift)
        direction !== undefined && this.props.toggleDirection(direction)
        caseFormat !== undefined && this.props.toggleCase(caseFormat)
        foreignChars !== undefined && this.props.toggleChars(foreignChars)
        prime1 !== undefined && this.props.setPrime1(prime1)
        prime2 !== undefined && this.props.setPrime2(prime2)
        RsaE !== undefined && this.props.setRsaE(RsaE)
        keywordVigenere !== undefined && this.props.setKeywordVigenere(keywordVigenere)
        keywordPlayfair !== undefined && this.props.setKeywordPlayfair(keywordPlayfair)
        otpKey !== undefined && this.props.setOtpKey(otpKey)
        ringLength !== undefined && this.props.setRinglength(ringLength)
        replaceLetter !== undefined && this.props.setReplaceLetter(replaceLetter)
        toReplaceLetter !== undefined && this.props.setToReplaceLetter(toReplaceLetter)
        affine_alpha !== undefined && this.props.setAffineAlpha(affine_alpha)
        affine_beta !== undefined && this.props.setAffineBeta(affine_beta)
    }

    handleSavePreset = () => {
        let presetSettings = {
            method: this.props.method !== undefined && this.props.method,
            input: this.props.input !== undefined && this.props.input,
            toReplaceLetter: this.props.toReplaceLetter !== undefined && this.props.toReplaceLetter,
            replaceLetter: this.props.replaceLetter !== undefined && this.props.replaceLetter,
            cShift: this.props.cShift !== undefined && this.props.cShift,
            direction: this.props.direction !== undefined && this.props.direction,
            includeChars: this.props.includeChars !== undefined && this.props.includeChars,
            caseformat: this.props.caseformat !== undefined && this.props.caseformat,
            alphabet: this.props.alphabet !== undefined && this.props.alphabet,
            prime1: this.props.prime1 !== undefined && this.props.prime1,
            prime2:this.props.prime2 !== undefined && this.props.prime2,
            keywordVigenere: this.props.keywordVigenere !== undefined && this.props.keywordVigenere,
            keywordPlayfair: this.props.keywordPlayfair !== undefined && this.props.keywordPlayfair,
            affine_alpha: this.props.affine_alpha !== undefined && this.propsaffine_alpha,
            affine_beta: this.props.affine_beta !== undefined && this.affine_beta,
            otpKey: this.props.otpKey !== undefined && this.otpKey,
            ringLength: this.props.ringLength !== undefined && this.ringLength,

        }
        this.props.addPreset(
            {   "name": this.props.presetName,
                "description": this.props.presetDescription,
                "preset": {
                    ...presetSettings
                }
            })
    }

    toggleModal = (e) => {
        if(!(e.target.className !== 'modal')) {
            this.props.togglePresetsModal()
        }
    }

    render() {
        if(this.props.presetsModal) {
            return (
                <div className="modal" onClick = {e => this.toggleModal(e)}>
                    <div className="inner_modal">
                        <div className="block_top_decoration"></div>
                        {this.props.target === 'load' ? (
                            <Fragment>
                                <div className="modal_header">'Load a Preset'</div>
                                <div className="modal_body" style={{padding: '0'}}>
                                    <div className="right">
                                        <table id="presets">
                                            <tbody style={{color: 'white'}}>
                                                <tr>
                                                    <th></th>
                                                    <th>Preset Name</th>
                                                    <th>Method</th>
                                                    <th>Description</th>
                                                    <th style={{padding: '.5em 0em'}}>Load</th>
                                                    <th style={{padding: '.5em 0em'}}>Edit</th>
                                                    <th style={{padding: '.5em 0em'}}>Delete</th>
                                                </tr>
                                                {this.genTable().map(row => row)}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Fragment>
                            ) : (
                                <Fragment>
                                    <div className="modal_header">Save as Preset</div>
                                    <div className="modal_body" style={{padding: '0'}}>
                                        <div className="right">
                                        <form onSubmit={e => {
                                            e.preventDefault()
                                            this.handleSavePreset(e)
                                        }}>
                                            <table id="presets">
                                                <tbody style={{color: 'white'}}>
                                                    <tr>
                                                        <th></th>
                                                        <th>Preset Name</th>
                                                        <th>Description</th>
                                                        <th style={{padding: '.5em 0em'}}>Save</th>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td><input value={this.props.presetName} onChange={e => this.props.setPresetName(e.target.value)} type="text" name="name" placeholder="Preset Name" /></td>
                                                        <td><input value={this.props.presetDescription} onChange={e => this.props.setPresetDescription(e.target.value)} type="text" name="description" placeholder="Description" /></td>
                                                        <td className="presetBtn"><button type="submit"><GetAppIcon /></button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            </form>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        }
                    </div>
                </div>
            )
        } else return null
    }
}

const mapStateToProps = state => ({
    presetsModal: state.presetsModal.modalOpen,
    target: state.presetsModal.target,
    presets: state.presets,
    presetDescription: state.presetDescription,
    presetName: state.presetName,

    toReplaceLetter: state.replace.toReplaceLetter,
    replaceLetter: state.replace.replaceLetter,
    cShift: state.cShift,
    direction: state.direction,
    input: state.input,
    method: state.method,
    includeChars: state.includeChars,
    caseformat: state.caseformat,
    alphabet: state.alphabet.alphabet,
    output: state.output,
    prime1: state.rsa.prime1,
    prime2: state.rsa.prime2,
    keywordVigenere: state.keywordVigenere,
    keywordPlayfair: state.keywordPlayfair,
    affine_alpha: state.affine.affine_alpha,
    affine_beta: state.affine.affine_beta,
    otpKey: state.otpKey,
    playSquare: state.playSquare,
    ringLength: state.skytale.ringLength,
})

const mapActionsToProps = {
    togglePresetsModal,
    loadPresets,
    addPreset,

    setCshift,
    updateInput,
    toggleCase,
    toggleChars,
    updateAlphabet,
    changeMethod,
    toggleDirection,
    setPrime1,
    setPrime2,
    setRsaE,
    setKeywordVigenere,
    setKeywordPlayfair,
    setOtpKey,
    setRinglength,
    setPresetDescription,
    setPresetName,
    setToReplaceLetter: toReplaceLetter,
    setReplaceLetter: replaceLetter,
    setAffineAlpha,
    setAffineBeta
}

export default connect(mapStateToProps, mapActionsToProps)(PresetsModal)