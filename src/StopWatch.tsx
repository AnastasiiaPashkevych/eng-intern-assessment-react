import React, { useState, useEffect } from 'react';
import StopWatchButton from './StopWatchButton';

interface StopwatchProps {}

interface Lap {
    id: number;
    time: number;
}

export default function StopWatch() {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [lapTimes, setLapTimes] = useState<Lap[]>([]);

    useEffect(() => {
        let timer: NodeJS.Timeout;

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
        setLapTimes((prevLapTimes) => [
            ...prevLapTimes,
            { id: prevLapTimes.length + 1, time },
        ]);
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
                        {lapTimes.map((lap) => (
                            <li key={lap.id}>{`Lap ${lap.id}: ${lap.time} seconds`}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
