import React from 'react';
import { connect } from 'react-redux';
import {
  setKeywordNihilist,
  setCipherNihilist,
} from '../../../actions/nihilist';

const KeywordsNihilist = (props) => {
  return (
    <React.Fragment>
      <div className='contentbox'>
        <div className='content-element'>
          <div className='content-element__settings-name'>
            Polybius square Key
          </div>
          <div className='content-element__settings-operators'>
            <textarea
              defaultValue={props.keyNihilist}
              className='content-element__textarea'
              onChange={(evt) => {
                props.setKeywordNihilist(evt.target.value.toLowerCase());
              }}
            />
          </div>
        </div>
      </div>
      <div className='contentbox'>
        <div className='content-element__settings-name'>Keyphrase</div>
        <div className='content-element__settings-operators'>
          <textarea
            className='content-element__textarea'
            defaultValue={props.cipherNihilist}
            onChange={(evt) => {
              props.setCipherNihilist(evt.target.value.toLowerCase());
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  keyNihilist: state.keyNihilist,
  cipherNihilist: state.cipherNihilist,
});

const mapActionsToProps = {
  setCipherNihilist,
  setKeywordNihilist,
};

export default connect(mapStateToProps, mapActionsToProps)(KeywordsNihilist);
