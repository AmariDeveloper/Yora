import { useEffect, useState } from "react";

export const useCountDown = (targetDate) => {
       const countDownDate = new Date(targetDate).getTime();

       const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

       useEffect(() => {
            const interval = setInterval(() => {
                   setCountDown(countDownDate - new Date().getTime())
            }, 1000)

            return () => clearInterval(interval)
       })

      return getReturnValues(countDown);
}

const getReturnValues = (countdown) => {
       const days = Math.floor(countdown / (1000 * 60 * 60 * 24))
       const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
       const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
       const seconds = Math.floor((countdown % (1000 * 60)) / 1000)

       return [ days, hours, minutes, seconds]
}