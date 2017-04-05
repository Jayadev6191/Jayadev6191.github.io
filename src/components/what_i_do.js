import React from 'react';
import ReactDOM from 'react-dom';

export default class WhatIDo extends React.Component {
  render(){
    return (
      <section className="portfolio-section">
        <div className='portfolio-what' id="what_i_do">
            <div className="portfolio-what--header">
              <h1 className="scrollimation scale-in">What I Do</h1>
              <div>
                <p>I&#39;m a web application developer. I&#39;m passionate about building
                  <br/>applications using latest web technologies.</p>
              </div>
            </div>

            <div className="portfolio-what--content">
              <div className="portfolio-image--item">
                <div className="icon">
                  <img className="img-responsive img-center" src="assets/images/web_design.png"  alt="" />
                </div>
                <h2>Web &amp; App Design</h2>
                <p>Responsive Web, Story boarding, wireframes, sass</p>
              </div>

              <div className="portfolio-image--item">
                <div className="icon">
                  <img className="img-responsive img-center" src="assets/images/web_development.png" alt="" />
                </div>
                <h2>Web Development</h2>
                <p>DOM, Scripting, Templating, Prototypes, Real-time Web</p>
              </div>

              <div className="portfolio-image--item">
                <div className="icon">
                  <img className="img-responsive img-center" src="assets/images/seo.png" alt="" />
                </div>
                <h2>SEO Content</h2>
                <p>Robots.txt, Google Webmaster, Meta Tags, Site.xml</p>
              </div>

              <div className="portfolio-image--item">
                <div className="icon">
                  <img className="img-responsive img-center" src="assets/images/cloud.png" alt="" />
                </div>
                <h2>Cloud</h2>
                <p>Load Balancing, Elastic Bean Stalk, Web Deployment</p>
              </div>
            </div>
        </div>
      </section>
    )
  }
}
