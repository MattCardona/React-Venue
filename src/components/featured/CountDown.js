import React from 'react';
import { Slide } from 'react-reveal';

class CountDown extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="countdown_wrapper">
        <Slide left delay={1100}>
          <div className="countdown_top">
            Venue countdown
          </div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">
                234
              </div>
              <div className="countdown_tag">
                Days
              </div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">
                20
              </div>
              <div className="countdown_tag">
                Hours
              </div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">
                30
              </div>
              <div className="countdown_tag">
                Min
              </div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">
                10
              </div>
              <div className="countdown_tag">
                Sec
              </div>
            </div>

          </div>
        </Slide>
      </div>
    )
  }
};

export default CountDown;