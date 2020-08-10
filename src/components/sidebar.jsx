import React, { Component } from 'react'

export default class Sidebar extends Component {
  state = {
    image: 'url(images/about.jpg)'
  }
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: this.state.image }} />
              <h1 id="colorlib-logo" style={{fontFamily: "Comic-Sans"}}><a href="index.html">Alankrit Chaturvedi</a></h1>
              <span className="location"> <i className="icon-layers2"></i> Full Stack Developer | Class of 2020</span><br></br><hr></hr>
              <span className="location"> <i className="icon-mail6"></i> alankrit.chaturvedi@gmail.com</span><br></br>
              
              <span className="location"> <i className="icon-study"></i> Carnegie Mellon University</span><br></br>
              
              
              <span className="location"> <i className="icon-location4"></i> San Francisco Bay Area, California</span>
            </div>
        <br></br><br></br>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Work Experience</a></li>
                  <li><a href="#projects" data-nav-section="projects">My Work</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <div id="navbar" className="collapse">
                <ul>
                  <li><button className="btn btn-outline icon-linkedin2 " onClick={() => {
                    window.open("https://www.linkedin.com/in/alankritchaturvedi", "window")
                  }} ></button></li>
                  <li><button className="icon-github btn btn-outline" onClick={() => {
                    window.open("https://github.com/alan9262", "window")
                  }} ></button></li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
