
import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.state = {
            oldSlide: 0,
            activeSlide: 0,
            activeSlide2: 0
        }
        this.vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    
    next() {
        this.slider.slickNext()
    }

    previous() {
        this.slider.slickPrev()
    }

    findNextSlide(evt) {
        let elem1 = evt.target.parentElement.parentElement.parentElement.parentElement
        let elem2 = evt.target.parentElement.parentElement.parentElement
        let goToIndex
        if(elem1.classList.contains('slick-current') || elem2.classList.contains('slick-current')) {
            let dataIndex1 = elem1.getAttribute('data-index')
            let dataIndex2 = elem2.getAttribute('data-index')
            goToIndex = dataIndex1 || dataIndex2
        }

        return goToIndex
    }

    viewportWidth = () => {
            if(this.vw < 700) {
                return 1
            } else return 3
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.activeSlide2 !== this.state.activeSlide2) {
            if(this.state.activeSlide2 === 0) {
                this.props.changeMethod('skytale')
            }
            else if(this.state.activeSlide2 === 1) {
                this.props.changeMethod('caesar')
            }    
            else if(this.state.activeSlide2 === 2) {
                this.props.changeMethod('affine')
            }
            else if(this.state.activeSlide2 === 3) {
                this.props.changeMethod('morse')
            }
            else if(this.state.activeSlide2 === 4) {
                this.props.changeMethod('playfair')
            }
        }
    }
    
    render() {

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: this.viewportWidth(),
            slidesToScroll: 1,
            arrows: true,
            initialSlide: 0,
            beforeChange: (current, next) =>
                this.setState({ 
                    oldSlide: current, 
                    activeSlide: next }),
            afterChange: current => 
                this.setState({ 
                    activeSlide2: current 
                })
        }

        return (
            <div id="timeline">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div    value='skytale' 
                            key={1} 
                            onClick={(evt) => {
                                this.props.changeMethod(evt)
                                this.slider.slickGoTo(0)
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
                                this.slider.slickGoTo(1)
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
                                this.slider.slickGoTo(2)
                            }}
                    >
                        <div value='affine' className="history_element">
                            <h3 value='affine'>100 B.C. – 44 B.C.</h3>
                            <div value='affine' class="dot"></div>
                            <div value='affine'>Affine Cipher</div>
                        </div>
                    </div>
                    <div    value='vigenere' 
                            key={4} 
                            onClick={(evt) => {
                                this.props.changeMethod(evt)
                                this.slider.slickGoTo(3)
                            }}
                    >
                        <div value='vigenere' className="history_element">
                            <h3 value='vigenere'>1553</h3>
                            <div value='vigenere' class="dot"></div>
                            <div value='vigenere'>Vigenère Cipher</div>
                        </div>
                    </div>
                    <div    value='morse' 
                            key={5} 
                            onClick={(evt) => {
                                this.props.changeMethod(evt)
                                this.slider.slickGoTo(4)
                            }}
                    >
                        <div value='morse' className="history_element">
                            <h3 value='morse'>1837</h3>
                            <div value='morse' class="dot"></div>
                            <div value='morse'>Morse Code</div>
                        </div>
                    </div>
                    <div    value='playfair' 
                            key={6} 
                            onClick={(evt) => {
                                this.props.changeMethod(evt)
                                this.slider.slickGoTo(5)
                            }}
                    >
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
