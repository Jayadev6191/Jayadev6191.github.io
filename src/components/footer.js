import React from 'react';
import ReactDOM from 'react-dom';

export default class FooterBar extends React.Component {
  render(){
    return (
      <div className='portfolio-footer'>
          <div className='portfolio-footer--credits'>
          <i id="icon-github" className="fa fa-github" aria-hidden="true"></i> Powered by github</div>
          <div className='portfolio-footer--brand'>
            <span className='portfolio-footer--copy-rights'>&#169; </span>
            {(new Date().getFullYear())} Jayadev Akkiraju
          </div>
      </div>
    )
  }
}
