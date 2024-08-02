import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import Reservations from './components/Reservations/Reservations';
import ConfirmReservations from './components/ConfirmReservations/ConfirmReservations';

export const timeList = [
  { id: 0, time: '--', value: '' },
  { id: 1, time: '17:00 PM', value: '5-pm' },
  { id: 2, time: '18:00 PM', value: '6-pm' },
  { id: 3, time: '19:00 PM', value: '7-pm' },
  { id: 4, time: '20:00 PM', value: '8-pm' },
  { id: 5, time: '21:00 PM', value: '9-pm' },
  { id: 6, time: '22:00 PM', value: '10-pm' }
];

export const fetchData = (date) => {
  const time = [];
  const result = [];

  if (date.getDate()) {
    timeList.forEach((list) => time.push(list.time));
    for (let i = 0; i < time.length; i++) {
      if (date.getDate()) {
        result.push(time[i]);
      }
    }
  }

  return result;
};

export const initializeTimes = () => fetchData(new Date());

export const updateTimes = (state, action) => fetchData(new Date(action));

const App = () => {
  const navigate = useNavigate();

  const submitData = (formData) => {
    return formData ? true : false;
  };

  const submitForm = (formData) => {
    if (submitData(formData)) {
      navigate('/confirm-reservations');
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/reservations"
        element={
          <Reservations
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        }
      />
      <Route path="/confirm-reservations" element={<ConfirmReservations />} />
    </Routes>
  );
};

export default App;


