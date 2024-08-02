import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ConfirmReservations.module.css'
import lemonLogo from '../../images/Logo .svg'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const ConfirmReservations = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <Header />

            <div className={styles.reservationsForm}>
                <form action="" onSubmit={handleSubmit}>
                    <div className={styles.reservationsBox}>
                        <h1>The Reservation has been confirmed.</h1>
                        <img src={lemonLogo} alt="logo" />
                        <h3>Please check your Email for more information!</h3>

                        <div className={styles.reservationsNote}>
                            <h3>Note</h3>
                            <p>The table that you have been reserved will be cancelled after 15 minutes if you are late.</p>
                        </div>

                        <div className={styles.reservationsLine}></div>

                        <Link to='/'>
                            <button>Confirm</button>
                        </Link>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default ConfirmReservations;