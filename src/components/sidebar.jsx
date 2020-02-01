import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Alankrit Chaturvedi</a></h1>
              <span className="email"><i className="icon-mail"></i>  alankrit.chaturvedi@gmail.com | alankric@andrew.cmu.edu </span><br />
            </div>
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
                  <li><a href="https://www.linkedin.com/in/alankritchaturvedi/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                  <li><a href="https://github.com/alan9262" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
