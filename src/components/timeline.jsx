import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">TIMELINE</span>
                
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate Teaching Assistant at <b>Carnegie Mellon University</b> <span>Jan 2020-present</span></h2>
                        <p>Graduate Teaching Assistant for Distributed Systems, working with Prof. Martin Barrett, Prof. Joseph Mertz and Prof. Michael McCarthy to grade assignments/exams and help ~150 students with the coursework.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate Teaching Assistant at <b>Carnegie Mellon University</b> <span>Aug 2019-Dec 2019</span></h2>
                        <p>Graduate Teaching Assistant for Database Management, worked with Prof. Janusz Szczypula to grade assignments/exams and help ~200 students with the coursework.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web developer at <b>Tesco</b> <span>Sep 2016–Apr 2019</span></h2>
                        <li>Worked on Tesco Retail website with the tech stack of React, NodeJS, Nginx, Webpack, AWS following Agile Methodology.</li>
                        <li>Collaborated with Product Managers of UK, Thailand, Central Europe for UI/UX design.</li>
                        <li>Led a UI team of 4 developers for scaling website to Thailand and Central Europe using ‘i18n' react library.</li>
                        <li>Led the team of 20 as a scrum master multiple times.</li>
                        <li>Configured CI/CD Jenkins Pipeline for one touch deployment.</li>
                        <li>Configured Couchbase database nodes and AWS EC2 instances, S3 buckets, target groups, security groups for a product called Tesco Induct.</li>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Salesforce Developer at <b>Tesco</b> <span>Sep 2015 – Dec 2017</span></h2>
                        <li>Worked as a salesforce developer/architect and developed multiple projects (phases) in
                        salesforce platform related to the wholesale department of Tesco using Apex and Java.</li>
                        <li>Automated support activities by implementing validation rules and Apex triggers that reduced the everyday manual effort from 5 hours to 30 minutes on salesforce.</li>
                        <li>Multi-threaded the existing Java code which increased the demand of number of Tesco orders on salesforce. Was awarded star of the moment and nominated as innovator of the year in Tesco in 2016.</li>
                        <li>Mentored and managed a team of three for successful salesforce product delivery.</li>
                        <li>Received multiple star awards under the categories of resilience and innovation.</li>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Associate Software Engineer at <b>Accenture</b> <span>Aug 2014 – Sep 2015</span></h2>
                        <li>Worked entirely on the platform of salesforce.com following Waterfall methodology.</li>
                        <li>Fulfilled the role of support and development analyst for a major Pharmaceutical organization.</li>
                        <li>Hands-on experience in writing Apex classes, Apex Triggers and creating Visualforce pages.</li>
                        <li>Designed, built, tested and deployed new fields, page layouts, email triggers et al.</li>
                        <li>Supported SFDC user and data issues and developed SFDC customized reports and dashboards based on business requirements.</li>
                        <li>Awarded with employee of the month multiple times along with a certificate of appreciation from delivery lead for outstanding work in the project.</li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
