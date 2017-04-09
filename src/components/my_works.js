import React from 'react';
import ReactDOM from 'react-dom';

export default class AboutMe extends React.Component {
  render(){
    return (
        <section className="portfolio-section">
        <div className="portfolio-my_works" id="my_works">
          <div className="portfolio-my_works--header">
            <h1 className="in">My Works</h1>
          </div>
          <div className="portfolio-my_works--content">
            <div className="portfolio-image--item">
              <div className="icon">
                <img className="img-responsive img-center" src="assets/images/uttc_teaser.png" alt="" />
              </div>

              <h2>UTTC</h2>
              <p>United Tribes Technical College (UTTC) Project offers educational programs tailored to aid and improve professional development among the Native American community. </p>
            </div>

            <div className="portfolio-image--item">
              <div className="icon">
                <img className="img-responsive img-center" src="assets/images/auction.png" alt="" />
              </div>

              <h2>Fantasy Football</h2>
              <p>Fantasy football league is an online bidding game.The aim of the game is to build a fantasy football team on a weekly basis. </p>
            </div>

            <div className="portfolio-image--item">
              <div className="icon">
                <img className="img-responsive img-center" id="next_africa" src="assets/images/next_africa.png" alt="" />
              </div>

              <h2>Next Africa</h2>
              <p>Next Africa is a community which connects African business leaders to world class career development opportunities. The link for this project is available at <a href="https://nextafrica.kornferry.com/">nextafrica.kornferry.com</a></p>
            </div>

            <div className="portfolio-image--item">
              <div className="icon">
                <img className="img-responsive img-center" src="assets/images/web_rtc.png" alt="" />
              </div>

              <h2>Video Calling App</h2>
              <p>Video chat application is built using web RTC technology. The users of this application can join the video conference by joining the room which is already created by the host.</p>
            </div>

          </div>
        </div>
  			</section>
    )
  }
}
