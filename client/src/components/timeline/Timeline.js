import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './timeline.scss';
import { connect } from 'react-redux';
import { changeMethod } from '../../actions/changeMethod';
import { EncryptionMethodsDetails } from '../main/BlockCenter/EncryptionMethodsDetails';

class Timeline extends React.PureComponent {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      oldSlide: 0,
      activeSlide: 1,
    };
    this.vw = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  viewportWidth = () => {
    if (this.vw < 1100) {
      return 1;
    } else return 1;
  };

  componentDidUpdate(prevProps, prevState) {
    /**
     * If user chooses to go to method that is not in
     * the timeline and back to the same method,
     * hide the method and year and then switch back.
     */
    let hasHideClass = document.getElementsByClassName('hideOnTimeline')[0];
    if (
      hasHideClass &&
      hasHideClass.classList &&
      hasHideClass.classList.contains('hideOnTimeline')
    ) {
      hasHideClass.classList.remove('hideOnTimeline');
    }

    if (prevProps.method !== this.props.method) {
      let idx = EncryptionMethodsDetails[this.props.method].timelineIdx;
      if (idx >= 0) {
        return this.slider.slickGoTo(idx);
      } else {
        let current = document.getElementsByClassName('slick-current')[0];
        current.classList.add('hideOnTimeline');
      }
    }

    if (prevState.activeSlide !== this.state.activeSlide) {
      for (const element of Object.values(EncryptionMethodsDetails)) {
        if (element.timelineIdx === this.state.activeSlide) {
          return this.props.changeMethod(element.name);
        }
      }
    }
  }

  render() {
    const settings = {
      infinite: true,
      speed: 800,
      slidesToShow: this.viewportWidth(),
      slidesToScroll: 1,
      arrows: true,
      initialSlide: 1,
      beforeChange: (current, next) =>
        this.setState({
          oldSlide: current,
          activeSlide: next,
        }),
    };

    const generateTimelineElements = () => {
      let timelineElements = [];
      for (let element in EncryptionMethodsDetails) {
        if (EncryptionMethodsDetails[element].year === false) continue;
        let key = 0;
        timelineElements.push(
          <div
            key={key}
            value={element}
            onClick={(evt) => {
              this.props.changeMethod(evt.target.getAttribute('value'));
              this.slider.slickGoTo(0);
            }}
          >
            <div value={element} className='history-element'>
              <h3 value={element} className='history-element__time'>
                {EncryptionMethodsDetails[element].year}
              </h3>
              <div value={element} className='history-element__dot'></div>
              <div
                value={element}
                className='history-element__encryption-method-name'
              >
                {EncryptionMethodsDetails[element].display}
              </div>
            </div>
          </div>
        );
        key++;
      }
      return timelineElements.map((item) => item);
    };
    return (
      <div className='timeline'>
        <div className='timeline__border'></div>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {generateTimelineElements()}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  method: state.method,
});

const mapActionsToProps = {
  changeMethod: changeMethod,
};

export default connect(mapStateToProps, mapActionsToProps)(Timeline);
