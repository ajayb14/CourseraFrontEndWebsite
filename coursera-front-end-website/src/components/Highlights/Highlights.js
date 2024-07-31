import React from 'react'
import highlightsStyle from './Highlights.module.css'
import greekSalad from '../../images/greek salad.jpg'
import bruchetta from '../../images/bruchetta.svg'
import lemonDessert from '../../images/lemon dessert.jpg'
import orderADelivery from '../../images/order.jpg'
import { Link } from "react-router-dom";

const Highlights = () => {
    const meals = [
        {
            id: 1,
            image: greekSalad,
            name: 'Greek salad',
            price: 12.99,
            review: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            order: orderADelivery,
        },
        {
            id: 2,
            image: bruchetta,
            name: 'Bruchetta',
            price: 5.99,
            review: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
            order: orderADelivery,
        },
        {
            id: 3,
            image: lemonDessert,
            name: 'Lemon Dessert',
            price: 5.00,
            review: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
            order: orderADelivery,
        },
    ]

    return (
        <div className={highlightsStyle.highlights}>
            <div className={highlightsStyle.partOne}>
                <h2>This weeks specials!</h2>

                <Link to="/little-lemon-website/order-online">
                    <button>Online Menu</button>
                </Link>
            </div>

            <div className={highlightsStyle.card}>
                <ul>
                    {
                        meals.map(meal => (
                            <li key={meal.id}>
                                <img src={meal.image} alt="image" className={highlightsStyle.mealImage} />

                                <div className={highlightsStyle.mealDescription}>
                                    <div className={highlightsStyle.mealTitle}>
                                        <h3>{meal.name}</h3>
                                        <h4>${meal.price.toFixed(2)}</h4>
                                    </div>

                                    <p>{meal.review}</p>

                                    <Link to="/booking-a-table-on-the-little-lemon-website-react/order-online">
                                        <span>Order a delivery</span>

                                        <img src={meal.order} alt="image" className={highlightsStyle.orderImage} />
                                    </Link>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Highlights