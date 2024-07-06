/* eslint-disable react/prop-types */

const CounterTimer = ({ days, hours, minutes, seconds}) => {
  return (
       <div className="countdown">
              <div className="count-box">
                      <span>{days}</span>
                      <p>Days</p>
              </div>
              <span className="separator"></span>
              <div className="count-box two">
                      <span>{hours}</span>
                      <p>Hrs</p>
              </div>
              <span className="separator"></span>
              <div className="count-box">
                      <span>{minutes}</span>
                      <p>Mins</p>
              </div>
              <span className="separator"></span>
              <div className="count-box four">
                      <span>{seconds}</span>
                      <p>Secs</p>
              </div>
    </div>
  )
}

export default CounterTimer