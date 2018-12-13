import React, { Component } from 'react';
import ButtonUtil from '../utils/Button.js'
import { Zoom } from 'react-reveal';

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.showBoxes = this.showBoxes.bind(this);
    this.state = {
      prices: [
        {
          price: 150,
          positon: "Economy",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus eos voluptates tenetur! Quos soluta nobis repudiandae debitis, tempora",
          link: "https://google.com",
          delay: 510
        },
        {
          price: 250,
          positon: "Standard",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus eos voluptates tenetur! Quos soluta nobis repudiandae debitis, tempora",
          link: "https://google.com",
          delay: 0
        },
        {
          price: 450,
          positon: "VIP",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus eos voluptates tenetur! Quos soluta nobis repudiandae debitis, tempora",
          link: "https://google.com",
          delay: 510
        }
      ]
    }

  }
  showBoxes() {
    return (
        this.state.prices.map((box, i) => (
          <Zoom
            key={i}
            delay={box.delay}
          >
            <div className="pricing_item">
              <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                  <span>${box.price}</span>
                  <span>{box.positon}</span>
                </div>
                <div className="pricing_description">
                  <span>{box.description}</span>
                </div>
                <div className="pricing_buttons">
                  <ButtonUtil
                    link={box.link}
                    bck="#ffa800"
                    color="#fff"
                    text="Buy"
                  />
                </div>
              </div>
            </div>
          </Zoom>
        )
      )
    )
  }
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing;