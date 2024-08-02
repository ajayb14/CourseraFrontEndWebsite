import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReservationsForm from './components/ReservationsForm/ReservationsForm';
import { initializeTimes, updateTimes, timeList } from './App';

// Mock props
const mockProps = {
    availableTimes: [
        { id: '1', value: '6:00 PM' },
        { id: '2', value: '7:00 PM' },
        { id: '3', value: '8:00 PM' },
    ],
    submitForm: jest.fn(),
    dispatch: jest.fn(),  
};

// Tests for the ReservationsForm component
test('Renders the Date label and Number of guests in ReservationsForm', () => {
    render(
        <BrowserRouter>
            <ReservationsForm {...mockProps} />
        </BrowserRouter>
    );


    const dateLabel = screen.getByLabelText(/Date/i);
    expect(dateLabel).toBeInTheDocument();


    const guestLabel = screen.getByLabelText(/Number of guests/i);
    expect(guestLabel).toBeInTheDocument();

  
    const timeSelect = screen.getByLabelText(/Time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(screen.getByText('6:00 PM')).toBeInTheDocument();
    expect(screen.getByText('7:00 PM')).toBeInTheDocument();
    expect(screen.getByText('8:00 PM')).toBeInTheDocument();
});

// Tests for initializeTimes and updateTimes functions
describe('Time functions', () => {
    test('initializeTimes returns the correct initial times', () => {
        const result = initializeTimes();
        expect(result).toEqual(timeList.map(time => time.time));
    });

    test('updateTimes returns the correct times based on the date', () => {
        const mockDate = new Date(); // Current date
        const result = updateTimes([], mockDate.toISOString());
        expect(result).toEqual(timeList.map(time => time.time));
    });
});













