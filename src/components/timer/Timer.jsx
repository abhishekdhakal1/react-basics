//simple project using tailwind...
import { useEffect, useState } from "react";

function Timer() {
  const countDownDate = new Date("2025-08-10T00:00:00").getTime();
  //console.log(countDownDate);
  const [time, setTime] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      setTime(countDownDate - currentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  const day = Math.floor(time / (1000 * 60 * 60 * 24));
  const hr = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((time % (1000 * 60)) / 1000);

  return (
    <><div className="h-screen bg-indigo-400 flex justify-center items-center">
      <div className="inline-block border-blue border-2">
      <p className="p-2 text-xl">IOE BE/BAr. I/I Baishakh 2081 result will be published in</p>
      <p className="p-2 text-xl">
        {day}Day : {hr}Hour : {min}Minute : {sec}Seconds
      </p>
      </div>
      </div>
    </>
  );
}
export default Timer;
