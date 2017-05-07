import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class ScrollToTop extends React.Component {
  rollUp = () => {
    this.props.onUpdate();
  }
  render(){
      const {showScrollTop} = this.props;
      return (
        showScrollTop && <div className="portfolio-go_top" onClick={this.rollUp}>
            <span><i className="fa fa-angle-up" aria-hidden="true"></i></span>
        </div>
      )
    }
}
