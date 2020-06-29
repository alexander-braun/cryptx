import React from 'react';
import { connect } from 'react-redux';
import setKeyNihilist from '../../../actions/setKeyNihilist';
import setCipherNihilist from '../../../actions/setCipherNihilist';

const KeywordsNihilist = (props) => {
  return (
    <React.Fragment>
      <div className='controller'>
        <div className='settings_name'>Polybius square Key</div>
        <div className='settings_operators'>
          <textarea
            id='alphabet'
            defaultValue={props.keyNihilist}
            onChange={(evt) => {
              props.setKeyNihilist(evt.target.value.toLowerCase());
            }}
            style={{ boxShadow: 'none' }}
          />
        </div>
      </div>
      <div className='controller'>
        <div className='settings_name'>Keyphrase</div>
        <div className='settings_operators'>
          <textarea
            id='alphabet'
            defaultValue={props.cipherNihilist}
            onChange={(evt) => {
              props.setCipherNihilist(evt.target.value.toLowerCase());
            }}
            style={{ boxShadow: 'none' }}
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
  setKeyNihilist,
};

export default connect(mapStateToProps, mapActionsToProps)(KeywordsNihilist);
