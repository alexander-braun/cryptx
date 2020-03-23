import React from 'react'

const Replace = ({setReplaceLetters, toReplaceLetter, replaceLetter}) => {
    return (
        <div className="controller double_content">
            <div className="controllbox">
                <div className="settings_name">REPLACE</div>
                <div className="settings_operators">
                    <textarea 
                        style={{boxShadow: 'none'}}
                        defaultValue={toReplaceLetter}
                        onChange={(evt) => {
                            setReplaceLetters(evt)
                        }}
                        id="to_replace_letter"
                    />
                </div>
            </div>
            <div className="controllbox">
                <div className="settings_name">REPLACE WITH</div>
                <div className="settings_operators">
                    <textarea 
                        style={{boxShadow: 'none'}}
                        defaultValue={replaceLetter}
                        onChange={(evt) => {
                            setReplaceLetters(evt)
                        }}
                        id="replacement_letter"
                    />
                </div>
            </div>
        </div>
    )
}

export default Replace
