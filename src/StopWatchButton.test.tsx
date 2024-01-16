import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StopWatchButton from './StopWatchButton';

describe('StopWatchButton', () => {
    it('renders without crashing', () => {
        render(
            <StopWatchButton
                onStart={() => {}}
                onStop={() => {}}
                onReset={() => {}}
                onLap={() => {}}
            />
        );
    });

    it('triggers onStart callback when Start button is clicked', () => {
        const onStartMock = jest.fn();
        const { getByText } = render(
            <StopWatchButton
                onStart={onStartMock}
                onStop={() => {}}
                onReset={() => {}}
                onLap={() => {}}
            />
        );

        fireEvent.click(getByText('Start'));
        expect(onStartMock).toHaveBeenCalled();
    });

    it('triggers onStop callback when Stop button is clicked', () => {
        const onStopMock = jest.fn();
        const { getByText } = render(
            <StopWatchButton
                onStart={() => {}}
                onStop={onStopMock}
                onReset={() => {}}
                onLap={() => {}}
            />
        );

        fireEvent.click(getByText('Stop'));
        expect(onStopMock).toHaveBeenCalled();
    });

    it('triggers onReset callback when Reset button is clicked', () => {
        const onResetMock = jest.fn();
        const { getByText } = render(
            <StopWatchButton
                onStart={() => {}}
                onStop={() => {}}
                onReset={onResetMock}
                onLap={() => {}}
            />
        );

        fireEvent.click(getByText('Reset'));
        expect(onResetMock).toHaveBeenCalled();
    });

    it('triggers onLap callback when Lap button is clicked', () => {
        const onLapMock = jest.fn();
        const { getByText } = render(
            <StopWatchButton
                onStart={() => {}}
                onStop={() => {}}
                onReset={() => {}}
                onLap={onLapMock}
            />
        );

        fireEvent.click(getByText('Lap'));
        expect(onLapMock).toHaveBeenCalled();
    });
});
