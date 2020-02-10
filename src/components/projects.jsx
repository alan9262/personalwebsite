import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<span className="heading-meta">My Work</span>
						<div className="row">
							<h2 className="colorlib-heading animate-box">Publications</h2>
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<div className="row">
									<p><a href="https://www.ijsr.net/archive/v9i1/ART20204190.pdf">Security Challenges and Solutions in MongoDB </a></p>
									<h2 className="colorlib-heading animate-box">Certifications</h2>
									<p><a href="https://drive.google.com/file/d/1tPO6Kecl40KcHW2h_Mgotjr2d-BSB_ag/view">Certified Salesforce Administrator</a> Apr 2015 - Apr 2016</p>
									<p><a href="https://drive.google.com/file/d/1LN8NJ85H0bw9MY3gysx2HMLm-g1LBOFF/view">Certified Salesforce Developer</a> Feb 2015 - Feb 2016</p>
								</div>
							</div>
						</div>
						<div className="row">
							<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/music.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Synphony Musical Website</a></h3>
											<span>Django/HTML5/CSS/PostgreSQL/Redis/Heroku</span>
											<p className="project-para">Developed a web application that hits an API and fetches songs based on user search with
												real time user participation and commenting enabled via WebSockets.</p>
											<p className="icon">
												<span><a href="https://github.com/alan9262/Synphony-music-web"><i className="icon-share3" /></a></span>
												<span><a href="http://frozen-castle-16239.herokuapp.com/"><i className="icon-eye" /> </a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/restaurant.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Alan's Menuserve Restaurant</a></h3>
											<span>Django/HTML5/CSS/PostgreSQL/Redis/Azure</span>
											<p className="project-para">Developed a web application catering a restaurant’s requirement with multiple stores, employees,
												managers, orders, menu items in HTML5 + CSS3, Django, deployed to Azure (DevOps for CI/CD), PostgreSQL.</p>
											<p className="icon">
												<span><a href="https://github.com/alan9262/MenuServer"><i className="icon-share3" /></a></span>
												<span><a href="https://menuserverestaurant.azurewebsites.net/"><i className="icon-eye" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: 'url(images/android.jpeg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Android App for Meals</a></h3>
											<span>Android/Java/Apache Tomcat/MongoDB/Heroku</span>
											<p className="project-para">Built an android app, that hits an API to display details about user searched meal. The data from the API was manipulated and
stored in MongoDB, which was also used to display logs in a separate JSP webpage, that was deployed to Heroku.</p>
											<p className="icon">
												<span><a href="https://mealdbproject4task2.herokuapp.com/dashboard"><i className="icon-eye" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{ backgroundImage: 'url(images/blockchain.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Blockchain Implementation</a></h3>
											<span>Java</span>
											<p className="project-para">Implemented blockchain using blocks in Java and their hashes with different difficulty level in SHA256, where every transaction
added to the block was verified via proof of work algorithm and if the chain was corrupted, provided an option to repair it.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/database.png)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Database Implementation Project</a></h3>
											<span>Oracle SQLPLUS</span>
											<p className="project-para">Built and manipulated a relational database model using SQL to store, manage and implement business restrictions of an
organization’s data. Along with this, suggested and implemented a business idea to improve the company cost and revenue.</p>
											<p className="icon">
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/RSA.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">RSA cryptography algorithm encoding/decoding</a></h3>
											<span>Java</span>
											<p className="project-para">Encoding/Decoding in MD5 and SHA256 using JSP, Java Servlets(Apache Tomcat) and establishing connection
between client and server on UDP/TCP connections involving implementation of RSA keys signature validation.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{ backgroundImage: 'url(images/cal.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Real time Django Calculator</a></h3>
										<span>Java</span>
										<p className="project-para">Built a calculator on django without storing data in the database. Used hidden fields for transferring operators, values and results in order to display it efficiently on the web application.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
				</section>
			</div >
		)
	}
}
