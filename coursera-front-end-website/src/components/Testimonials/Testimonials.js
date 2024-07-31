import React from 'react'
import './Testimonials.css'
import ratingStar from '../../images/star.png'
import personOne from '../../images/person-one.png'
import personTwo from '../../images/person-two.png'
import personThree from '../../images/person-three.png'
import personFour from '../../images/person-four.png'

const Testimonials = () => {
    const people = [
        {
            id: 1,
            rating: ratingStar,
            name: 'Bill Morrow',
            photo: personOne,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Perferendis, illo!',
        },
        {
            id: 2,
            rating: ratingStar,
            name: 'Micah Barber',
            photo: personTwo,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, facere.',
        },
        {
            id: 3,
            rating: ratingStar,
            name: 'Tommie Schmidt',
            photo: personThree,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, culpa!',
        },
        {
            id: 4,
            rating: ratingStar,
            name: 'Ivy Kramer',
            photo: personFour,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, in?',
        },
    ]

    return (
        <div className="testimonials">
            <h2>Testimonials</h2>

            <div className="card">
                <ul>
                    {
                        people.map(person => (
                            <li key={person.id}>
                                <div>
                                    <img src={person.rating} alt="rating" className="rating"/>
                                    <img src={person.rating} alt="rating" className="rating"/>
                                    <img src={person.rating} alt="rating" className="rating"/>
                                    <img src={person.rating} alt="rating" className="rating"/>
                                    <img src={person.rating} alt="rating" className="rating"/>
                                </div>

                                <div className="partTwo">
                                    <img src={person.photo} alt="photo" className="photo" />

                                    <h4 className="name">{person.name}</h4>
                                </div>

                                <p className="review">{person.review}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Testimonials