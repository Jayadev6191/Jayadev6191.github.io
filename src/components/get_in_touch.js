import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class GetInTouch extends React.Component {
  render(){
    return (
      <section className="portfolio-section portfolio-section--dark">
        <div className="portfolio-section--anchor" id="contact_me">
          <div className="portfolio-get_in_touch">
            <div className="portfolio-get_in_touch--header">
              <h1 className="portfolio-get_in_touch--header-title">Get In Touch</h1>
              <h5 className="portfolio-get_in_touch--header-subtitle"> 👋 Don&#39;t forget to say hello! 🤙😀</h5>
            </div>
            <div className="portfolio-get_in_touch--content">
              <div className="portfolio-get_in_touch--icon-content">
                <div className="portfolio-get_in_touch--icon-item">
                  <a  target="_blank" href="https://www.linkedin.com/in/jayadev-akkiraju-b947576a/">
                    <i id="icon-linkedin" className="fa fa-linkedin" aria-hidden="true"></i>
                    <div className="portfolio-get_in_touch--icon-text">LinkedIn</div>
                  </a>
                </div>
                <div className="portfolio-get_in_touch--icon-item">
                  <a  target="_blank" href="https://github.com/Jayadev6191">
                    <i id="icon-github" className="fa fa-github" aria-hidden="true"></i>
                    <div className="portfolio-get_in_touch--icon-text">Github</div>
                  </a>
                </div>
                <div className="portfolio-get_in_touch--icon-item">
                  <a  target="_blank" href="https://twitter.com/jay_akkiraju">
                    <i id="icon-twitter" className="fa fa-twitter" aria-hidden="true"></i>
                    <div className="portfolio-get_in_touch--icon-text">Twitter</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
			</section>
    )
  }
}
