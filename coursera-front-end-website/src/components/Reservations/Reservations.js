import React from 'react';
import ReservationsForm from '../ReservationsForm/ReservationsForm';
import { useNavigate } from 'react-router-dom';

const Reservations = () => {
    const navigate = useNavigate();


    const availableTimes = [
        { id: '1', value: '6:00 PM' },
        { id: '2', value: '7:00 PM' },
        { id: '3', value: '8:00 PM' },
        { id: '4', value: '9:00 PM' },
    ];

    const handleSubmit = (formData) => {
        if (formData) {
            navigate('/confirm-reservations'); 
        }
    };


    const handleDispatch = (value) => {
        console.log(value); 
    };

    return (
        <div>
            <ReservationsForm
                availableTimes={availableTimes}
                dispatch={handleDispatch}
                submitForm={handleSubmit}
            />
        </div>
    );
};

export default Reservations;

