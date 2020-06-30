import React from 'react';
import { connect } from 'react-redux';
import setKeywordPlayfair from '../../../actions/setKeywordPlayfair';

const KeywordPlayfair = ({ keywordPlayfair, setKeywordPlayfair }) => {
  return (
    <div className='contentbox'>
      <div className='content-element'>
        <div className='content-element__settings-name'>Keyword</div>
        <div className='content-element__settings-operators'>
          <textarea
            defaultValue={keywordPlayfair}
            onChange={(evt) => {
              setKeywordPlayfair(evt.target.value.toLowerCase());
            }}
            className='content-element__textarea'
          />
        </div>
        <div id='matrix'></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  keywordPlayfair: state.keywordPlayfair,
});

const mapActionsToProps = {
  setKeywordPlayfair: setKeywordPlayfair,
};

export default connect(mapStateToProps, mapActionsToProps)(KeywordPlayfair);
