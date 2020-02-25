
import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

class Timeline extends React.Component {
  render() {

    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      initialSlide: 5,
      beforeChange: (oldIndex, newIndex) => {
        console.log(newIndex)
      }
    };

    return (
        <div id="timeline">
            <Slider {...settings}>
                <div>
                    <div className="history_element">
                        <h3>100 B.C. – 44 B.C.</h3>
                        <div class="dot"></div>
                        <div>Caesar Cipher</div>
                    </div>
                </div>
                <div>
                    <div className="history_element">
                        <h3>100 B.C. – 44 B.C.</h3>
                        <div class="dot"></div>
                        <div>Caesar Cipher</div>
                    </div>
                </div>
                <div>
                    <div className="history_element">
                        <h3>100 B.C. – 44 B.C.</h3>
                        <div class="dot"></div>
                        <div>Caesar Cipher</div>
                    </div>
                </div>
                <div>
                    <div className="history_element">
                        <h3>100 B.C. – 44 B.C.</h3>
                        <div class="dot"></div>
                        <div>Caesar Cipher</div>
                    </div>
                </div>
                <div>
                    <div className="history_element">
                        <h3>100 B.C. – 44 B.C.</h3>
                        <div class="dot"></div>
                        <div>Caesar Cipher</div>
                    </div>
                </div>
                <div>
                    <div className="history_element">
                        <h3>100 B.C. – 44 B.C.</h3>
                        <div class="dot"></div>
                        <div>Caesar Cipher</div>
                    </div>
                </div>
                <div>
                    <div className="history_element">
                        <h3>100 B.C. – 44 B.C.</h3>
                        <div class="dot"></div>
                        <div>Caesar Cipher</div>
                    </div>
                </div>               
            </Slider>
        </div>
    );
  }
}

export default Timeline
