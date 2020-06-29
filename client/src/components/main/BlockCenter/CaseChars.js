import React from 'react';
import { connect } from 'react-redux';
import toggleChars from '../../../actions/toggleIncludeChars';
import toggleCase from '../../../actions/toggleCase';

class CaseChars extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selectChars = this.selectChars.bind(this);
  }

  selectChars(evt) {
    if (evt.target.id === 'includeChars') {
      this.props.toggleChars('include');
    } else {
      this.props.toggleChars('ignore');
    }
  }

  render() {
    return (
      <div
        className='controller double_content'
        style={{ borderBottom: 'none' }}
      >
        <div className='controllbox'>
          <div className='settings_name'>CASE</div>
          <div
            className='settings_operators'
            style={{
              padding: '0.5rem 0.5rem 0.5rem 20px',
              borderBottom: 'none',
            }}
          >
            <select
              id='selectCase'
              defaultValue={this.props.caseformat}
              onChange={(evt) => {
                this.props.toggleCase(evt.target.value);
              }}
            >
              <option
                value='maintain'
                style={{ color: 'black', fontSize: '14px' }}
              >
                Maintain Case
              </option>
              <option
                value='ignore'
                style={{ color: 'black', fontSize: '14px' }}
              >
                Ignore Case
              </option>
            </select>
          </div>
        </div>
        <div
          className='controllbox'
          style={{ borderRight: 'none', borderBottom: 'none' }}
        >
          <div className='settings_name'>FOREIGN CHARS</div>
          <div
            className='settings_operators'
            style={{ justifyContent: 'start' }}
          >
            <button
              id='includeChars'
              className={
                this.props.includeChars === 'include' ? 'active' : 'inactive'
              }
              onClick={(evt) => {
                this.selectChars(evt);
              }}
              value='include'
            >
              Include
            </button>
            <button
              id='ignoreChars'
              className={
                this.props.includeChars === 'include' ? 'inactive' : 'active'
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
