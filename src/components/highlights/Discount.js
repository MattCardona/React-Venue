import React from 'react'
import { Fade, Slide } from 'react-reveal';
import ButtonUtil from '../utils/Button.js';

class Discount extends React.Component {
  constructor(props){
    super(props);
    this.percentage = this.percentage.bind(this);
    this.state = {
      discountStart: 0,
      discountEnd: 15
    }
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 35)
  }
  percentage() {
    if(this.state.discountStart < this.state.discountEnd){
      this.setState((prevState) => ({
        discountStart: prevState.discountStart + 1
      }))
    }
  }
  render(){
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before December 24th</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatibus, architecto autem illum quibusdam debitis aspernatur temporibus? Amet dolorem adipisci numquam laborum! Laboriosam, odio. Veritatis molestiae sunt provident pariatur ut.
              </p>
              <div>
                <ButtonUtil
                  text="Purchase tickets"
                  bck="#ffbc00"
                  color="#fff"
                  link="https://google.com"
                />
              </div>
            </div>
          </Slide>

        </div>
      </div>
    )
  }
}

export default Discount
