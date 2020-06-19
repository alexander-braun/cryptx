import React from 'react';
import { connect } from 'react-redux';
import setKeywordVigenere from '../../actions/setKeywordVigenere';

const KeywordVigenere = ({ keywordVigenere, setKeywordVigenere }) => {
  return (
    <div className='controller'>
      <div className='settings_name'>Keyword</div>
      <div className='settings_operators'>
        <textarea
          style={{ boxShadow: 'none' }}
          id='alphabet'
          defaultValue={keywordVigenere}
          onChange={(evt) => {
            setKeywordVigenere(evt.target.value.toLowerCase());
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  keywordVigenere: state.keywordVigenere,
});

const mapActionsToProps = {
  setKeywordVigenere: setKeywordVigenere,
};

export default connect(mapStateToProps, mapActionsToProps)(KeywordVigenere);
