import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Education</span>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-study" />
                                    </span>
                                    <div className="desc">
                                        <h3>Carnegie Mellon University</h3>
                                        <p>Master of Information Systems Management</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-study" />
                                    </span>
                                    <div className="desc">
                                        <h3>PES Institute of Technology, Visvesvaraya Technical University</h3>
                                        <p>Bachelor of Engineering in Mechanical Engineering</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
