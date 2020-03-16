import React, { Component } from 'react'

export default class Introduction extends Component {

  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home" >
          <div className="flexslider js-fullheight" >
              <ul className="slides">
                <li style={{ backgroundImage: 'url(images/unnamed.png)'}}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-9 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                          <div className="desc">
                            <h1 style={{ color: "whitesmoke" }}>Hello there! You can call me Alan</h1><br></br>
                            <p ><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1WAl7EAvckczrdndxdQgoq2XzQiAD1rqn/edit" target="_blank" rel="noopener noreferrer">View Résumé <i className="icon-download4" /></a></p><br></br><br></br><br></br>
                            <h4 style={{ color: "whitesmoke" }}>Master of Information Systems Management - <b>Carnegie Mellon University</b> </h4><br></br>
                            <h4 style={{ color: "whitesmoke" }}>I have worked as a <hr></hr>Full stack <i>developer</i><br></br> Product <i>Manager</i><br></br> Salesforce <i>developer</i></h4><br></br><br></br><br></br><br></br>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 style={{ color: "whitesmoke", textAlign: "center" }}>Please scroll!</h4>
                </li>
                <li style={{ backgroundImage: 'url(images/unnamed.png)' }}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-10 col-md-offset-3 col-md-pull-3 col-sm-14 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner">
                          <div className="desc">
                            <h1 style={{ color: "whitesmoke" }}>Have a look at some of my work</h1><br></br>
                            <p><a className="btn btn-primary btn-learn" href="https://github.com/alan9262" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 style={{ color: "whitesmoke" }}>Please scroll!</h4>
                </li>
                
              </ul>
              
            </div>
        </section>
      </div>
    )
  }
}