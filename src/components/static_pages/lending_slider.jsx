import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
class LendingSlider extends PureComponent {

    render() {
        return (
            <div className="slider-container rev_slider_wrapper" style={{height:400}}>
                <div id="revolutionSlider" className="slider rev_slider" data-plugin-revolution-slider data-plugin-options="{'delay': 9000, 'gridwidth': 800, 'gridheight': 400}">
                    <ul>
                    <li data-transition="fade">
								<img src="/assets/img/slides/landing-page-slide-1.jpg"  
									alt=""
									data-bgposition="center center" 
									data-bgfit="cover" 
									data-bgrepeat="no-repeat" 
									className="rev-slidebg"/>	
							</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LendingSlider;