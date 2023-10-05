import Icon from '../components/icon/Icon'

import aboutImage from '../assets/img/about.jpg'
import iconOne from '../assets/img/icon_1.png'
import iconTwo from '../assets/img/icon_2.png'
import iconThree from '../assets/img/icon_3.png'
import iconFour from '../assets/img/icon_4.png'

import './about.css'

function About() {
  return (
    <main className="container">
      <h1>About Us</h1>

      <section className="about">
        <div className='about__text'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corporis quia nesciunt blanditiis iure. Ullam quidem corporis dolorum blanditiis voluptatum odit iusto quis quisquam maxime. Beatae impedit velit animi quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit saepe iusto molestias, iste exercitationem quas quis! Nobis voluptate eos pariatur aspernatur porro voluptas perspiciatis autem praesentium, qui, amet, eius quas.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa minima distinctio quod impedit neque possimus repellendus nobis debitis cupiditate dignissimos voluptatibus eum, incidunt quas eos odit! Veritatis, repellendus doloremque!</p>
        </div>

        <img className="about__image" src={aboutImage} alt="About image" />
      </section>

      <h1>Why Buy With Us</h1>

      <section className="icons">
        <div className="icons__container">
          <Icon
            image={iconOne}
            image_alt="Money icon"
            title="The Best Price"
            text="lorem ipsum dolor sit."
          />

          <Icon
            image={iconTwo}
            image_alt="HTML5 icon"
            title="For Developers"
            text="lorem ipsum dolor sit."
          />

          <Icon
            image={iconThree}
            image_alt="Shipping icon"
            title="Free Shipping"
            text="lorem ipsum dolor sit."
          />

          <Icon
            image={iconFour}
            image_alt="Quality icon"
            title="Best Quality"
            text="lorem ipsum dolor sit."
          />
        </div>
      </section>
    </main >
  )
}

export default About
