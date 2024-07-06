/* eslint-disable react/prop-types */
import { useCountDown } from "../../hooks/CountDown"
import CounterTimer from "./CounterTimer";
const CounterWrap = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  if(days + hours + minutes + seconds <= 0){
       return (
            <div className="expired">
                    
            </div>
       )
  }else{
    return (
            <CounterTimer days={days} hours={hours} minutes={minutes} seconds={seconds} />
      )
  }

}

export default CounterWrap