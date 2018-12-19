import React from 'react';

class PictureCarouselShow extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            startIdx: 0,
            endIdx:3
        };

        this.nextImage = this.nextImage.bind(this);
        this.preImage = this.preImage.bind(this);
        this.changeCenter = this.changeCenter.bind(this);
        this.resetCenter = this.resetCenter.bind(this);
    }

    preImage() {
        if (this.state.startIdx === 0) return;

        this.setState({
            startIdx: this.state.startIdx - 1,
            endIdx: this.state.endIdx - 1
        });
    }

    nextImage() {
        if (this.state.endIdx === this.props.images.length) return;

        this.setState({
            startIdx: this.state.startIdx + 1,
            endIdx: this.state.endIdx + 1
        });
    }

    changeCenter() {
        const centerImage = document.getElementsByClassName('center')[0];
        centerImage.classList.remove('center');
    }

    resetCenter() {
        const centerImage = document.getElementsByClassName('carousel-img')[1];
        centerImage.classList.add('center');
    }

    render () {

        return (
            <div className='carousel-wrapper'>
                <button className='scroll-button' onClick={this.preImage}>
                    <i id='pre' className="fas fa-angle-left"></i>
                </button>
                <div className='carousel-container'>
                    {
                        this.props.images.slice(this.state.startIdx, this.state.endIdx).map((image, idx) => {
                            if (idx === 1) {
                                return (
                                    <div key={idx} className='center carousel-img'><img src={image} /></div>
                                )
                            } else {
                                return (
                                    <div 
                                    key={idx} 
                                    className='carousel-img'
                                    onMouseOver={this.changeCenter}
                                    onMouseOut={this.resetCenter}><img src={image} /></div>
                                )
                            }
                        })
                    }
                </div>
                <button className='scroll-button' onClick={this.nextImage}>
                    <i id='next' className="fas fa-angle-right fas-lrg"></i>
                </button>
            </div>
        )
    }
}

export default PictureCarouselShow;