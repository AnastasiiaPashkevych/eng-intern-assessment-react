import React from 'react';
import './StopWatchButton.css';

interface StopwatchButtonProps {
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
    onLap: () => void;
}

const StopWatchButton: React.FC<StopwatchButtonProps> = ({ onStart, onStop, onReset, onLap }) => {
    return (
        <div className="button-container">
            <button className="button" onClick={onStart}>Start</button>
            <button className="button" onClick={onStop}>Stop</button>
            <button className="button" onClick={onReset}>Reset</button>
            <button className="button" onClick={onLap}>Lap</button>
        </div>
    );
};

export default StopWatchButton;