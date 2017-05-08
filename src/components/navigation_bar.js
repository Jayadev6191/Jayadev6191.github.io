import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class NavigationBar extends React.Component {
  render(){
    const {showNavBar, ...props} = this.props;
    const navClass = classNames({
        'portfolio-navigation': showNavBar,
        'portfolio-navigation--transparant': !showNavBar
    });

    const mainClass = null;

    return (
      <div className={navClass}>
          <ul className={`${navClass}__list`}>
            <li className={`${navClass}__list-item`}>
              <a href="#what_i_do" className={`${navClass}__list--link`}>WHAT I DO</a>
            </li>
            <li className={`${navClass}__list-item`}>
              <a href="#about_me" className={`${navClass}__list--link`}>ABOUT ME</a>
            </li>
            <li className={`${navClass}__list-item`}>
              <a href="#my_works" className={`${navClass}__list--link`}>MY WORKS</a>
            </li>
            <li className={`${navClass}__list-item`}>
              <a href="#contact_me" className={`${navClass}__list--link`}>CONTACT ME</a>
            </li>
          </ul>
      </div>
    )
  }
}
