import React from 'react';
import ReactDOM from 'react-dom';

export default class AboutMe extends React.Component {
  render(){
    return (
        <section className="portfolio-section">
          <div className='portfolio-section--anchor' id="about_me">
            <div className="portfolio-about">
              <div className="portfolio-about--header">
                <h1 className="in">About Me</h1>
                <img className="" src="assets/images/me.png" />
              </div>
              <div className="portfolio-about--content">
                <p>I am Jayadev Akkiraju. I have a Masters degree in Software Engineering,
                  from San Jose <br/> State University. Building challenging and interesting
                  computer applications is my number one passion.</p>
              </div>
              <br/>
              <div className="portfolio-about--content">
                <p>I have 4 years of professional experience with Internet technologies</p>
              </div>
              <div className="portfolio-about--content">
                <p className="portfolio-about--hire-me">
                  <a className="portfolio-about--hire-me-btn" href="#contact_me">
                  <i className="fa fa-child"></i>Hire Me</a>
                </p>
              </div>
            </div>
          </div>
  			</section>
    )
  }
}
