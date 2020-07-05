import React from 'react';
import { connect } from 'react-redux';
import setKeywordVigenere from '../../../actions/setKeywordVigenere';
import PropsTypes from 'prop-types';

const KeywordVigenere = ({ keywordVigenere, setKeywordVigenere }) => {
  return (
    <div className='contentbox'>
      <div className='content-element'>
        <div className='content-element__settings-name'>Keyword</div>
        <div className='content-element__settings-operators'>
          <textarea
            className='content-element__textarea'
            defaultValue={keywordVigenere}
            onChange={(evt) => {
              setKeywordVigenere(evt.target.value.toLowerCase());
            }}
          />
        </div>
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

KeywordVigenere.propTypes = {
  keywordVigenere: PropsTypes.string.isRequired,
  setKeywordVigenere: PropsTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(KeywordVigenere);
