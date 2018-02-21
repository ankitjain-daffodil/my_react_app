import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LendingSlider from './lending_slider';

class Lending extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div role="main" className="main">
                <LendingSlider />
                <div className="home-intro" id="home-intro">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-8">
                                <p>
                                    The easy and trusty way to buy you favoutite <em>Cannabis</em>
                                    <span>Check out our latest products.</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 center">
                            <h2 className="word-rotator-title mb-sm">Over Rootery you can found <strong> <span className="word-rotate" data-plugin-options="{'delay': 2000, 'animDelay': 300}">
                                <span className="word-rotate-items">
                                    <span>High Quality</span>
                                    <span>Lab Tested</span>
                                    <span>Trusted</span>
                                </span>
                            </span></strong> Cannabis.</h2>
                            <p className="lead">Trusted by the satisfied users, Rootery is a huge success</p>
                        </div>
                    </div>
                    <section className="section section-default section-with-mockup mb-none">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/assets/img/lending/northern_lights.png" className="img-responsive mockup-landing-page mb-xl appear-animation" alt="Porto" data-appear-animation="zoomIn" data-appear-animation-delay="300" />
                                </div>
                                <div className="col-md-4">
                                    <p className="mb-lg">Today's Cannabis comes in all shapes and sizes. We are providing cannabis explorers a platform to connect with cannabis brands and their products. Rate, share, and buy your favorite products.</p>
                                </div>
                                <div className="col-md-4">
                                    <img src="/assets/img/lending/discover_bg.png" className="img-responsive mockup-landing-page mb-xl appear-animation" alt="Porto" data-appear-animation="zoomIn" data-appear-animation-delay="300" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default Lending;