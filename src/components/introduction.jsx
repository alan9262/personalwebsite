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
                          <h2 className="h2-front"><b>Hello World! </b> You can call me Alan.

                          </h2>
                          <p ><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1eDVjpPI_-gCd9NMT21DkVOtG4RA7bxVN/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Résumé <i className="icon-download4" /></a></p><br></br><br></br><br></br>


                          <h2 className="h2-front">I have worked as a
                            <b><span
                              class="txt-rotate"
                              data-period="2000"
                              data-rotate='[ " Full stack developer.", " Product Manager.", " Salesforce developer.", " Technical Architect."]'></span></b>
                          </h2>

                          <p><a className="btn btn-primary btn-learn" href="https://github.com/alan9262" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                        <div>
                          <h2 className="concept"><b>Work/Publication:</b></h2>
                          <span className="other-work">
                            <p>AI 4R Driven Marketing (with TCS) <a style={{float: "right"}} href="https://tcsai4rm.herokuapp.com/" target="_blank"><i className="icon-link"></i></a></p>
                            <p>Synphony music<a style={{float: "right"}} href="http://frozen-castle-16239.herokuapp.com/" target="_blank"><i className="icon-link"></i></a></p>
                            <p>Security Challenges and Solutions in MongoDB&nbsp;&nbsp;&nbsp;&nbsp;<a style={{float: "right"}} href="https://www.ijsr.net/archive/v9i1/ART20204190.pdf" target="_blank"><i className="icon-link"></i></a></p>
                          </span>
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