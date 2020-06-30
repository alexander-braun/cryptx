import React from 'react';
import { connect } from 'react-redux';
import toggleChars from '../../../actions/toggleIncludeChars';
import toggleCase from '../../../actions/toggleCase';
import './case-chars.scss';

class CaseChars extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selectChars = this.selectChars.bind(this);
  }

  /**
   * Set the foreign characters to in- or exclude
   */
  selectChars(evt) {
    if (evt.target.value === 'include') {
      this.props.toggleChars('include');
    } else {
      this.props.toggleChars('ignore');
    }
  }

  render() {
    return (
      <div className='contentbox contentbox--double'>
        <div className='content-element content-element--double'>
          <div className='content-element__settings-name content-element__settings-name--double'>
            CASE
          </div>
          <div className='content-element__settings-operators content-element__settings-operators--double'>
            <select
              defaultValue={this.props.caseformat}
              onChange={(evt) => {
                this.props.toggleCase(evt.target.value);
              }}
              className='content-element__select content-element__select--font-s'
            >
              <option value='maintain'>Maintain Case</option>
              <option value='ignore'>Ignore Case</option>
            </select>
          </div>
        </div>
        <div className='content-element content-element--double'>
          <div className='content-element__settings-name content-element__settings-name--double'>
            FOREIGN CHARS
          </div>
          <div className='content-element__settings-operators content-element__settings-operators--double'>
            <button
              className={
                this.props.includeChars === 'include'
                  ? 'foreign-chars foreign-chars--active'
                  : 'foreign-chars'
              }
              onClick={(evt) => {
                this.selectChars(evt);
              }}
              value='include'
            >
              Include
            </button>
            <button
              className={
                this.props.includeChars === 'include'
                  ? 'foreign-chars'
                  : 'foreign-chars foreign-chars--active'
              }
              onClick={(evt) => {
                this.selectChars(evt);
              }}
              value='ignore'
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  includeChars: state.includeChars,
});

const mapActionsToProps = {
  toggleChars: toggleChars,
  toggleCase: toggleCase,
};

export default connect(mapStateToProps, mapActionsToProps)(CaseChars);
