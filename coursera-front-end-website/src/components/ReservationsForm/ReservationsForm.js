import React, { useState } from 'react';
import styles from './ReservationsForm.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import reservationsHeaderLogo from '../../images/Logo .svg';
import reservationsFooterLogo from '../../images/Logo.svg';

const ReservationsForm = (props) => {
    const [date, setDate] = useState('');
    const [guest, setGuest] = useState('');
    const [time, setTime] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ date, guest, time, occasion });
    };

    return (
        <div>
            <Header />
            <div className={styles.reservationsForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.reservationsBox}>
                        <img src={reservationsHeaderLogo} alt="logo" className={styles.headerLogo} />
                        <div className={styles.headerLogoLine}></div>
                        <div className={styles.reservationsLargePart}>
                            <div className={styles.partOne}>
                                <div className={styles.date}>
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.guest}>
                                    <label htmlFor="guest">Number of guests</label>
                                    <select
                                        name="guest"
                                        id="guest"
                                        value={guest}
                                        onChange={(e) => setGuest(e.target.value)}
                                        required
                                    >
                                        <option value="">--</option>
                                        <option value="2-guests">02 Guests</option>
                                        <option value="3-guests">03 Guests</option>
                                        <option value="6-guests">06 Guests</option>
                                        <option value="9-guests">09 Guests</option>
                                        <option value="12-guests">12 Guests</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.partTwo}>
                                <div className={styles.time}>
                                    <label htmlFor="time">Time</label>
                                    <select
                                        name="time"
                                        id="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        required
                                    >
                                        {props.availableTimes.map(availableTime => (
                                            <option value={availableTime.value} key={availableTime.id}>
                                                {availableTime.value}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles.occasion}>
                                    <label htmlFor="occasion">Occasion</label>
                                    <select
                                        name="occasion"
                                        id="occasion"
                                        value={occasion}
                                        onChange={(e) => setOccasion(e.target.value)}
                                        required
                                    >
                                        <option value="">--</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="engagement">Engagement</option>
                                        <option value="anniversary">Anniversary</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                        <div className={styles.FooterLogoLine}></div>
                        <img src={reservationsFooterLogo} alt="logo" className={styles.footerLogo} />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ReservationsForm;
