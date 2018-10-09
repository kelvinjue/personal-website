import * as React from 'react';
import Masonry from 'react-masonry-component';
import Image from 'react-image-resizer';
import AutoScale from 'react-auto-scale';
import './Gallery.css'
import ReactHoverObserver from 'react-hover-observer';
 
class Gallery extends React.Component {
    handleClick() {}
    render() {
        return (
                      
            <div className='element'> 
                {/* <Image
                    src={this.props.element}
                    height= {480}
                    width = {480}
                /> */}
                <ReactHoverObserver> 
                    <img className='tile' src={this.props.element} />
                </ReactHoverObserver>
                
            </div>
        );
    }
}
 
export default Gallery;