
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
            if(this.vw < 1100) {
                return 1
            } else return 3
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.method !== this.props.method) {
            if(this.props.method === 'skytale') {
                return this.slider.slickGoTo(0)
            }
            else if(this.props.method === 'caesar') {
                return this.slider.slickGoTo(1)
            }
            else if(this.props.method === 'affine') {
                return this.slider.slickGoTo(2)
            }
            else if(this.props.method === 'vigenere') {
                return this.slider.slickGoTo(3)
            }
            else if(this.props.method === 'morse') {
                return this.slider.slickGoTo(4)
            }
            else if(this.props.method === 'playfair') {
                return this.slider.slickGoTo(5)
            } else {
                let current = document.getElementsByClassName('slick-current')[0]
                current.classList.remove('slick-current')
            }
        }

        if(prevState.activeSlide !== this.state.activeSlide) {
            if(this.state.activeSlide === 0) {
                return this.props.changeMethod('skytale')
            }
            else if(this.state.activeSlide === 1) {
                return this.props.changeMethod('caesar')
            }    
            else if(this.state.activeSlide === 2) {
                return this.props.changeMethod('affine')
            }
            else if(this.state.activeSlide === 3) {
                return this.props.changeMethod('vigenere')
            }
            else if(this.state.activeSlide === 4) {
                return this.props.changeMethod('morse')
            }
            else if(this.state.activeSlide === 5) {
                return this.props.changeMethod('playfair')
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
                <div className="timeline_border"></div>
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
                            <div value='skytale' className="dot"></div>
                            <div value='skytale' className="timeline_description">Skytale</div>
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
                            <div value='caesar' className="dot"></div>
                            <div value='caesar' className="timeline_description">Caesar Cipher</div>
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
                            <div value='affine' className="dot"></div>
                            <div value='affine' className="timeline_description">Affine Cipher</div>
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
                            <div value='vigenere' className="dot"></div>
                            <div value='vigenere' className="timeline_description">Vigenère Cipher</div>
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
                            <div value='morse' className="dot"></div>
                            <div value='morse' className="timeline_description">Morse Code</div>
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
                            <div value='playfair' className="dot"></div>
                            <div value='playfair' className="timeline_description">Playfair Cipher</div>
                        </div>
                    </div>             
                </Slider>
            </div>
        );
    }
}

export default Timeline
