import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import StopWatch from './StopWatch';

jest.useFakeTimers();

describe('StopWatch', () => {
    it('renders without crashing', () => {
        render(<StopWatch />);
    });

    it('starts, stops, and resets the stopwatch correctly', () => {
        render(<StopWatch />);

        // Start the stopwatch
        fireEvent.click(screen.getByText('Start'));
        expect(screen.getByText(/Time:/i).textContent).toContain('Time: 0 seconds');

        // Fast-forward time by 5 seconds
        act(() => {
            jest.advanceTimersByTime(5000);
        });

        // Check if time is updated
        expect(screen.getByText(/Time:/i).textContent).toContain('Time: 5 seconds');

        // Stop the stopwatch
        fireEvent.click(screen.getByText('Stop'));

        // Fast-forward time by another 3 seconds
        act(() => {
            jest.advanceTimersByTime(3000);
        });

        // Check if time remains the same
        expect(screen.getByText(/Time:/i).textContent).toContain('Time: 5 seconds');

        // Reset the stopwatch
        fireEvent.click(screen.getByText('Reset'));

        // Check if the time is reset to 0
        expect(screen.getByText(/Time:/i).textContent).toContain('Time: 0 seconds');
    });

    it('records laps correctly', () => {
        render(<StopWatch />);

        // Start the stopwatch
        fireEvent.click(screen.getByText('Start'));

        // Fast-forward time by 5 seconds
        act(() => {
            jest.advanceTimersByTime(5000);
        });

        // Record a lap
        fireEvent.click(screen.getByText('Lap'));

        // Fast-forward time by another 5 seconds
        act(() => {
            jest.advanceTimersByTime(5000);
        });

        // Record another lap
        fireEvent.click(screen.getByText('Lap'));

        // Check if lap times are displayed
        expect(screen.getByText(/Lap 1:/i).textContent).toContain('Lap 1: 5 seconds');
        expect(screen.getByText(/Lap 2:/i).textContent).toContain('Lap 2: 10 seconds');
    });
});
