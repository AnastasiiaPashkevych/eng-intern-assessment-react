import React, { useState, useEffect } from 'react';
import StopWatchButton from './StopWatchButton';

export default function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lapTimes, setLapTimes] = useState([]);

    useEffect(() => {
        let timer: any;

        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isRunning]);

    const startStopwatch = () => {
        setIsRunning(true);
    };

    const stopStopwatch = () => {
        setIsRunning(false);
    };

    const resetStopwatch = () => {
        setTime(0);
        setIsRunning(false);
        setLapTimes([]);
    };

    const recordLap = () => {
        setLapTimes((prevLapTimes) => [...prevLapTimes, time]);
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <div>{`Time: ${time} seconds`}</div>
            <StopWatchButton
                onStart={startStopwatch}
                onStop={stopStopwatch}
                onReset={resetStopwatch}
                onLap={recordLap}
            />
            {lapTimes.length > 0 && (
                <div>
                    <h2>Lap Times:</h2>
                    <ul>
                        {lapTimes.map((lap, index) => (
                            <li key={index}>{`Lap ${index + 1}: ${lap} seconds`}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
