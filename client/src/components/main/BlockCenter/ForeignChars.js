import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Actions
import toggleForeignChars from '../../../actions/toggleForeignChars';
import toggleCase from '../../../actions/toggleCase';

//Assets
import './case-chars.scss';

const ForeignChars = (props) => {
  /**
   * Set the foreign characters to in- or exclude
   */
  const selectChars = (evt) => {
    if (evt.target.value === 'include') {
      props.toggleForeignChars('include');
    } else {
      props.toggleForeignChars('ignore');
    }
  };

  return (
    <div className='contentbox contentbox--double'>
      <div className='content-element content-element--double'>
        <div className='content-element__settings-name content-element__settings-name--double'>
          CASE
        </div>
        <div className='content-element__settings-operators content-element__settings-operators--double'>
          <select
            defaultValue={props.caseformat}
            onChange={(evt) => {
              props.toggleCase(evt.target.value);
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
              props.foreignChars === 'include'
                ? 'foreign-chars foreign-chars--active'
                : 'foreign-chars'
            }
            onClick={(evt) => {
              selectChars(evt);
            }}
            value='include'
          >
            Include
          </button>
          <button
            className={
              props.foreignChars === 'include'
                ? 'foreign-chars'
                : 'foreign-chars foreign-chars--active'
            }
            onClick={(evt) => {
              selectChars(evt);
            }}
            value='ignore'
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  foreignChars: state.foreignChars,
});

const mapActionsToProps = {
  toggleForeignChars: toggleForeignChars,
  toggleCase: toggleCase,
};

ForeignChars.propTypes = {
  foreignChars: PropTypes.string.isRequired,
  toggleForeignChars: PropTypes.func.isRequired,
  toggleCase: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(ForeignChars);
