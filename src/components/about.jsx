import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <p>I am a graduate student at Carnegie Mellon University pursuing Information Systems Management. With a demonstrated experience in different industries for about 5 years, I have received many challenges and domain changes in terms of technologies, starting from learning salesforce and Java, learning and developing excel VBA macros, handling/managing teams and moving to web development (learning JavaScript and related UI technologies). With my quick grasping ability, constant learning and positive attitude I have successfully achieved different milestones in my career. </p>
                                            <p>I am passionate about coding and am skilled in software development lifecycle, from managing teams to building and delivering quality products through Agile and Waterfall methodologies.</p>
                                            <p>I am looking forward to continue my journey in technology by combining my experience and the skills I am currently gaining from Carnegie Mellon University to provide best, out of the box solutions to the organizations I will be associating with.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-5 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-study" />
                                    </span>
                                    <div className="desc">
                                        <h3>Courses</h3>
                                        <p>Java, Distributed Systems, Web App Development, SQL and NoSQL Database Management, Artificial Intelligence<hr></hr></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-stack2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Languages</h3>
                                        <p>Java, Python, JavaScript,
                                        jQuery, AJAX, SQL, VBA</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-safari" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Technologies</h3>
                                        <p>HTML5/CSS/JS, Django, Java Servlets, JSP, React, NodeJS, ExpressJS, Apex, Bootstrap, Materialize</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Databases</h3>
                                        <p>Oracle Database SQLPLUS, PostgreSQL, MongoDB, Couchbase, Redis, Cassandra, Neo4j</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-cloud3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Cloud</h3>
                                        <p>Microsoft Azure, Amazon Web Services (AWS), Heroku</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Business Analysis</h3>
                                        <p>Requirement Gathering, Product Planning and Management, Solution Design, Troubleshooting</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-stack2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Tools/Frameworks</h3>
                                        <p>Android, Git, Django channels, Apache Tomcat, WebSockets, d3 charts, Azure DevOps for CI/CD, Redux, Flux, Gulp, Grunt, Webpack, Jenkins, Unit test frameworks (Django tests, Jest, Enzyme, Mocha, Chai, Istanbul), Microsoft Excel, Jitterbit, Apex Data Loader, Putty, Postman, Selenium </p>
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
