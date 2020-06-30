import React from 'react';
import { connect } from 'react-redux';
import { toReplaceLetter, replaceLetter } from '../../../actions/replace';

const Replace = (props) => {
  return (
    <div className='contentbox contentbox--double'>
      <div className='content-element content-element--double'>
        <div className='content-element__settings-name content-element__settings-name--double'>
          REPLACE
        </div>
        <div className='content-element__settings-operators content-element__settings-operators--double'>
          <textarea
            defaultValue={props.toReplaceLetter}
            onChange={(evt) => {
              props.onSetToReplaceLetter(evt.target.value);
            }}
            className='content-element__textarea content-element__textarea--double'
          />
        </div>
      </div>
      <div className='content-element content-element--double'>
        <div className='content-element__settings-name content-element__settings-name--double'>
          REPLACE WITH
        </div>
        <div className='content-element__settings-operators content-element__settings-operators--double'>
          <textarea
            defaultValue={props.replaceLetter}
            onChange={(evt) => {
              props.onSetReplaceLetter(evt.target.value);
            }}
            className='content-element__textarea content-element__textarea--double'
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  toReplaceLetter: state.replace.toReplaceLetter,
  replaceLetter: state.replace.replaceLetter,
});

const mapActionsToProps = {
  onSetReplaceLetter: replaceLetter,
  onSetToReplaceLetter: toReplaceLetter,
};

export default connect(mapStateToProps, mapActionsToProps)(Replace);
