import React from 'react';
import ReactDOM from 'react-dom';

export default class OtherInterests extends React.Component {
  render(){
    return (
      <section className="portfolio-section">
        <div className='portfolio-section--anchor' id="other_interests">
          <div className="portfolio-other_interests">
              <div className="portfolio-other_interests--header">
                <h1 className="in">Other Interests</h1>
              </div>
              <div className="portfolio-other_interests--content">
                  <h3>I love Quadcopters and soccer!!!</h3>
              </div>
              <div className="portfolio-other_interests--drone">
                <img className="img-responsive img-center" id="drone" src="assets/images/robots-police-drone.png" alt="" />
              </div>
          </div>
        </div>
      </section>
    )
  }
}
