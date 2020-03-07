import React from 'react'

class CaseChars extends React.Component {
    constructor () {
        super()
        this.state = {
            include: true,
            ignore: false
        }
        this.changeClass = this.changeClass.bind(this)
    }

    changeClass(evt) {
        if(evt.target.value === 'include') {
            this.setState({
                include: true,
                ignore: false
            })
        } else {
            this.setState({
                include: false,
                ignore: true
            })
        }
    }

    render() {
        return (
            <div className="controller double_content">
                <div className="controllbox">
                    <div className="settings_name">CASE</div>
                    <div className="settings_operators" style={{padding: '.5rem .5rem .5rem 13px'}}>
                        <select 
                            id="selectCase" 
                            defaultValue = 'maintain' 
                            onChange = {(evt) => {
                                this.props.selectCase(evt)
                            }}
                        >
                            <option value="maintain">Maintain Case</option>
                            <option value="ignore">Ignore Case</option>
                        </select>
                    </div>
                </div>
                <div className="controllbox" style={{borderRight: 'none'}}>
                    <div className="settings_name">FOREIGN CHARS</div>
                    <div className="settings_operators">
                        <button 
                            id="includeChars" 
                            className={this.state.include ? 'active' : 'inactive'} 
                            onClick = {(evt) => {
                                this.props.includeChars(evt)
                                this.changeClass(evt)
                            }} 
                            value="include">
                            Include
                        </button>
                        <button 
                            id="ignoreChars" 
                            className={this.state.ignore ? 'active' : 'inactive'} 
                            onClick = {(evt) => {
                                this.props.includeChars(evt)
                                this.changeClass(evt)
                            }} 
                            value="ignore">
                            Ignore
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CaseChars
