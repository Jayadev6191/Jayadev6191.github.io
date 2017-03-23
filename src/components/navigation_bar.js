import React from 'react';
import ReactDOM from 'react-dom';

export default class NavigationBar extends React.Component {
  render(){
    return (
      <div className='portfolio-navigation'>
          <ul className='portfolio-navigation__list'>
            <li className='portfolio-navigation__list-item'>
              <a href="#what_i_do" className="portfolio-navigation__list--link">WHAT I DO</a>
            </li>
            <li className='portfolio-navigation__list-item'>
              <a href="#about_me" className="portfolio-navigation__list--link">ABOUT ME</a>
            </li>
            <li className='portfolio-navigation__list-item'>
              <a href="#my_works" className="portfolio-navigation__list--link">MY WORKS</a>
            </li>
            <li className='portfolio-navigation__list-item'>
              <a href="#contact_me" className="portfolio-navigation__list--link">CONTACT ME</a>
            </li>
          </ul>
      </div>
    )
  }
}
