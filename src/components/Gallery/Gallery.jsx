import * as React from 'react';
import Masonry from 'react-masonry-component';
import Image from 'react-image-resizer';
import AutoScale from 'react-auto-scale';
import './Gallery.css'


 
class Gallery extends React.Component {
    handleClick() {}
    render() {
        return (          
            <div className='element'> 
                <Image
                    src={this.props.element}
                    height= {480}
                    width = {480}
                />
            </div>
        );
    }
}
 
export default Gallery;