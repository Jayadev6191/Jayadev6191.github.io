import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class GetInTouch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:''
    };
  }
  onNameChange = (e) => {
    this.setState({name: e.target.value});
  }
  onEmailChange = (e) => {
    this.setState({email: e.target.value});
  }
  render(){
    return (
      <div className='portfolio-get_in_touch' id="contact_me">
            <section className="portfolio-get_in_touch--container">
            <div className="portfolio-get_in_touch--header">
              <h1 className="portfolio-get_in_touch--header-title">Get In Touch</h1>
              <p className="portfolio-get_in_touch--header-subtitle"> 👋 Don&#39;t forget to say hello! 🤙😀</p>
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
      			</section>
      </div>
    )
  }
}


{/*
  <form className="portfolio-get_in_touch--form" autoComplete="off">
    <div className="portfolio-get_in_touch--form-row">
      <div className="portfolio-get_in_touch--form-row--item">
        <input type="text" className={classNames("form-control",this.state.name!=='' ? "valid" : '')}
               value={this.state.name}
               onChange={this.onNameChange}
        />
        <label>Name</label>
      </div>
      <div className="portfolio-get_in_touch--form-row--item">
        <input type="text" className={classNames("form-control",this.state.email!=='' ? "valid" : '')}
               value={this.state.email}
               onChange={this.onEmailChange}
        />
        <label>Email</label>
      </div>
    </div>
    <div className="portfolio-get_in_touch--form-row--item">
      <textarea className="form-control" rows="5" placeholder="Don't forget to say hi! 😀" id="comment"></textarea>
    </div>
    <div className="portfolio-get_in_touch--form-row--item">
      <button className="btn btn-success" id="send_mail_button">
        <i className="fa fa-paper-plane"></i> Send Mail
      </button>
    </div>
  </form>
  */}
