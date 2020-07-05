import React from 'react';
import { connect } from 'react-redux';
import {
  setKeywordNihilist,
  setCipherNihilist,
} from '../../../actions/nihilist';
import PropsTypes from 'prop-types';

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
              defaultValue={props.keywordNihilist}
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
  keywordNihilist: state.nihilist.keywordNihilist,
  cipherNihilist: state.nihilist.cipherNihilist,
});

const mapActionsToProps = {
  setCipherNihilist,
  setKeywordNihilist,
};

KeywordsNihilist.propTypes = {
  keywordNihilist: PropsTypes.string.isRequired,
  cipherNihilist: PropsTypes.string.isRequired,
  setCipherNihilist: PropsTypes.func.isRequired,
  setKeywordNihilist: PropsTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(KeywordsNihilist);
