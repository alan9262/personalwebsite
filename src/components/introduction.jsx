import React, { Component } from 'react'

export default class Introduction extends Component {

  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home" >
          <div className="flexslider js-fullheight" >
            <ul className="slides">
              <li style={{ backgroundImage: 'url(images/unnamed.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-9 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h2 style={{ color: "whitesmoke", fontFamily: "'Raleway', sans-serif; !important" }}><b>Hello World! </b> You can call me Alan.
                            
                          </h2>
                          <p ><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1WAl7EAvckczrdndxdQgoq2XzQiAD1rqn/edit" target="_blank" rel="noopener noreferrer">View Résumé <i className="icon-download4" /></a></p><br></br><br></br><br></br>
                          
                          
                          <h2 style={{ color: "whitesmoke", fontFamily: "'Raleway', sans-serif;" }}>I have worked as a 
                            <b><span
                              class="txt-rotate"
                              data-period="2000"
                              data-rotate='[ " Full stack developer.", " Product Manager.", " Salesforce developer.", " Technical Architect."]'></span></b>
                          </h2>

                          <p><a className="btn btn-primary btn-learn" href="https://github.com/alan9262" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>


            </ul>

          </div>
        </section>
      </div>
    )
  }
}