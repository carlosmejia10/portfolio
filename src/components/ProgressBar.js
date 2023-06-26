import React, { useEffect, useState } from 'react';

export const ProgressBar = ({ percentage, className }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === percentage) {
        clearInterval(interval);
      } else {
        setCounter((prevCounter) => (prevCounter < percentage ? prevCounter + 1 : prevCounter));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className={`skilll ${className}`}>
      <div className="outer">
        <div className="inner">
          <div id="number">{counter}%</div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#36aa95" />
            <stop offset="100%" stopColor="#4A2FBD" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export const ProgressBar1 = () => <ProgressBar percentage={90} className="progressbar1" />;
export const ProgressBar2 = () => <ProgressBar percentage={70} className="progressbar2" />;
export const ProgressBar3 = () => <ProgressBar percentage={60} className="progressbar3" />;
export const ProgressBar4 = () => <ProgressBar percentage={80} className="progressbar4" />;
