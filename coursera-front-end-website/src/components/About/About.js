import React from 'react'
import aboutStyle from './About.module.css'
import aboutOne from '../../images/Mario and Adrian A.jpg'
import aboutTwo from '../../images/Mario and Adrian b.jpg'

const About = () => {
    return (
        <div className={aboutStyle.about}>
            <div className={aboutStyle.partOne}>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut totam harum, assumenda aspernatur architecto dicta quaerat, vero deserunt at nobis eveniet perspiciatis corrupti provident nostrum non ab voluptatibus recusandae officiis maxime rem doloribus reiciendis quae? Rem nam sint veniam similique rerum cum sapiente provident delectus officia expedita exercitationem voluptatem iusto culpa quam animi, neque quis optio ex aspernatur voluptas voluptate. Soluta sit ullam iure veniam, odit natus unde consequatur nam nisi voluptate a voluptas error sunt sint fugit id labore temporibus velit expedita nostrum. Modi, saepe, consequatur sit vero quae laboriosam eius autem consequuntur repudiandae et exercitationem, expedita atque repellendus.</p>
            </div>

            <div className={aboutStyle.partTwo}>
                <img src={aboutOne} alt="image" className={aboutStyle.imageOne} />
                <img src={aboutTwo} alt="image" className={aboutStyle.imageTwo} />
            </div>
        </div>
    )
}

export default About