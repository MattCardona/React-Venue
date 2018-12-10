import React from 'react';
import { Slide } from 'react-reveal';
import moment from 'moment';

class CountDown extends React.Component {
  constructor(props){
    super(props);
    this.getTimeUntil = this.getTimeUntil.bind(this);
    this.state = {
      venueDate: '',
      hours: '0',
      days: '0',
      minutes: '0',
      seconds: '0'
    };
  }
  componentDidMount() {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const year = +moment().format('YYYY') + 1;
    const month = getRandomIntInclusive(1, 12)
    const day = getRandomIntInclusive(1, 30);
    const end = new moment(`${year.toString()}-${month.toString()}-${day.toString()}`);
    this.setState(() => ({
      venueDate: end
    }))
    // this.getTimeUntil()
    setInterval(() => this.getTimeUntil(), 1000);
  }
  getTimeUntil() {
    let venDate = this.state.venueDate;
    let duration = moment.duration(venDate.diff())
    let d = Math.ceil(duration.asDays());
    let h = Math.ceil(duration.asHours());
    let m = duration.minutes();
    let s = duration.seconds();
    this.setState(() => ({
      days: d,
      hours: h,
      minutes: m,
      seconds: s
    }));
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
                {this.state.days}
              </div>
              <div className="countdown_tag">
                Days
              </div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">
                {this.state.hours}
              </div>
              <div className="countdown_tag">
                Hours
              </div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">
                {this.state.minutes}
              </div>
              <div className="countdown_tag">
                Min
              </div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">
                {this.state.seconds}
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