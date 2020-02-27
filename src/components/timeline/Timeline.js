
import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }
    
    next() {
        this.slider.slickNext()
    }

    previous() {
        this.slider.slickPrev()
    }

    render() {

        const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        const viewportWidth = () => {
            if(vw < 700) {
                return 1
            } else return 3
        }

        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: viewportWidth(),
            slidesToScroll: 1,
            arrows: true,
            initialSlide: 0
        }

        return (
            <div id="timeline">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div    value='skytale' 
                            key={1} 
                            onClick={(evt) => {
                                this.props.changeMethod(evt)
                            }}
                    >
                        <div value='skytale' className="history_element">
                            <h3 value='skytale'>300 B.C.</h3>
                            <div value='skytale' class="dot"></div>
                            <div value='skytale'>Skytale</div>
                        </div>
                    </div>

                    <div    value='caesar' 
                            key={2} 
                            onClick={(evt) => {
                                this.props.changeMethod(evt)
                            }}
                    >
                        <div value='caesar' className="history_element">
                            <h3 value='caesar'>100 B.C. – 44 B.C.</h3>
                            <div value='caesar' class="dot"></div>
                            <div value='caesar'>Caesar Cipher</div>
                        </div>
                    </div>
                    <div    value='affine' 
                            key={3} 
                            onClick={(evt) => {
                                this.props.changeMethod(evt)
                            }}
                    >
                        <div value='affine' className="history_element">
                            <h3 value='affine'>100 B.C. – 44 B.C.</h3>
                            <div value='affine' class="dot"></div>
                            <div value='affine'>Affine Cipher</div>
                        </div>
                    </div>
                    <div value='vigenere' key={4} onClick={(evt) => {
                        this.props.changeMethod(evt)
                    }}>
                        <div value='vigenere' className="history_element">
                            <h3 value='vigenere'>1553</h3>
                            <div value='vigenere' class="dot"></div>
                            <div value='vigenere'>Vigenère Cipher</div>
                        </div>
                    </div>
                    <div value='morse' key={5} onClick={(evt) => {
                        this.props.changeMethod(evt)
                    }}>
                        <div value='morse' className="history_element">
                            <h3 value='morse'>1837</h3>
                            <div value='morse' class="dot"></div>
                            <div value='morse'>Morse Code</div>
                        </div>
                    </div>
                    <div value='playfair' key={6} onClick={(evt) => {
                        this.props.changeMethod(evt)
                    }}>
                        <div value='playfair' className="history_element">
                            <h3 value='playfair'>1854</h3>
                            <div value='playfair' class="dot"></div>
                            <div value='playfair'>Playfair Cipher</div>
                        </div>
                    </div>             
                </Slider>
            </div>
        );
    }
}

export default Timeline
