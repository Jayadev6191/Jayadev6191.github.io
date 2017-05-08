import React from 'react';
import ReactDOM from 'react-dom';

export default class Intro extends React.Component {
  render(){
    return (
        <section className="portfolio-section portfolio-section--dark">
          <div className="portfolio-section--anchor" id="intro">
            <div className="portfolio-intro">
              <div className="portfolio-intro--container">
                <div className="portfolio-intro--message">
                  <h1 className="in">Hi, I am Jayadev</h1>
                  <p className="in">a Full Stack Web Developer</p>
                </div>
                <div className="portfolio-intro--mac">
                  <img src="assets/images/imac.png" alt="" />
                  <div className="portfolio-code">
                    <div className="portfolio-code--snippet">
                      <img className="portfolio-code--image" src="assets/images/code.gif" alt="" />
                      <img className="portfolio-code--image" src="assets/images/code.gif" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  			</section>
    )
  }
}
