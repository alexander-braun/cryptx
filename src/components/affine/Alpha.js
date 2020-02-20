import React from 'react'

const Alpha = ({setAlpha, setBeta}) => {
    return (
        <div className="controller double_content">
            <div className="controllbox">
                <div className="settings_name">α</div>
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
            <div className="controllbox">
                <div className="settings_name">β</div>
                <div className="settings_operators">
                    <select 
                        defaultValue="1" 
                        className="affine"
                        onChange = {(evt) => {
                            setBeta(evt)
                        }}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Alpha
