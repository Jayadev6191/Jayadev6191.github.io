import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './scroll_to_top';
import NavigationBar from './navigation_bar';
import Intro from './intro';
import WhatIDo from './what_i_do';
import AboutMe from './about_me';
import MyWorks from './my_works';
import TechnologyStack from './technology_stack';
import OtherInterests from './other_interests';
import GetInTouch from './get_in_touch';
import Footer from './footer';


export default class AppContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showScrollTop: false
    };
  }
  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);

    if(scrollTop < 50) {
      this.setState({
        showScrollTop: false
      });
    }

    if(scrollTop > 50) {
      this.setState({
        showScrollTop: true
      });
    }

    this.setState({
      transform: itemTranslate
    });
  }
  scrollToTop = () => {
    var timerID = setInterval(function() {
        window.scrollBy(0, -100);

        if( window.pageYOffset === 0 )
            clearInterval(timerID);
    }, 13);
  }
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }
  render(){
    const {showScrollTop} = this.state;
    return (
      <div onScroll={this.scroll} className='portfolio-app' ref='list'>
          <NavigationBar/>
          <ScrollToTop showScrollTop={showScrollTop} onUpdate={this.scrollToTop}/>
          <Intro/>
          <WhatIDo/>
          <AboutMe/>
          <MyWorks/>
          <TechnologyStack/>
          <OtherInterests/>
          <GetInTouch/>
          <Footer/>
      </div>
    )
  }
}
