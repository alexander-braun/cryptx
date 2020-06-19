import React from 'react';
import { connect } from 'react-redux';
import { toReplaceLetter, replaceLetter } from '../../actions/replace';

const Replace = (props) => {
  return (
    <div className='controller double_content'>
      <div className='controllbox'>
        <div className='settings_name'>REPLACE</div>
        <div className='settings_operators'>
          <textarea
            style={{ boxShadow: 'none' }}
            defaultValue={props.toReplaceLetter}
            onChange={(evt) => {
              props.onSetToReplaceLetter(evt.target.value);
            }}
            id='to_replace_letter'
          />
        </div>
      </div>
      <div className='controllbox'>
        <div className='settings_name'>REPLACE WITH</div>
        <div className='settings_operators'>
          <textarea
            style={{ boxShadow: 'none' }}
            defaultValue={props.replaceLetter}
            onChange={(evt) => {
              props.onSetReplaceLetter(evt.target.value);
            }}
            id='replacement_letter'
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
