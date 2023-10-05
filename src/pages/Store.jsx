import Product from '../components/product/Product'

import one from '../assets/img/1.jpg'
import two from '../assets/img/2.jpg'
import three from '../assets/img/3.jpg'
import four from '../assets/img/4.jpg'
import five from '../assets/img/5.jpg'
import six from '../assets/img/6.jpg'
import seven from '../assets/img/7.jpg'
import eight from '../assets/img/8.jpg'
import nine from '../assets/img/8.jpg'
import ten from '../assets/img/10.jpg'
import eleven from '../assets/img/11.jpg'
import twelve from '../assets/img/12.jpg'
import thirteen from '../assets/img/13.jpg'
import fourteen from '../assets/img/14.jpg'

import './store.css'

function Store() {
  return (
    <main className="container">
      <h1>Our Products</h1>

      <section className="grid">
        <Product
          image_url={one}
          image_alt="VueJS T-Shirt"
          name="Vue"
          price="25"
        />

        <Product
          image_url={two}
          image_alt="AngularJS T-Shirt"
          name="Angular"
          price="25"
        />

        <Product
          image_url={three}
          image_alt="ReactJS T-Shirt"
          name="React"
          price="25"
        />

        <Product
          image_url={four}
          image_alt="Redux T-Shirt"
          name="Redux"
          price="25"
        />

        <Product
          image_url={five}
          image_alt="NodeJS T-Shirt"
          name="Node"
          price="25"
        />

        <Product
          image_url={six}
          image_alt="Sass T-Shirt"
          name="Sass"
          price="25"
        />

        <Product
          image_url={seven}
          image_alt="HTML5 T-Shirt"
          name="HTML5"
          price="25"
        />

        <Product
          image_url={eight}
          image_alt="GitHub T-Shirt"
          name="GitHub"
          price="25"
        />

        <Product
          image_url={nine}
          image_alt="BulmaCSS T-Shirt"
          name="BulmaCSS"
          price="25"
        />

        <Product
          image_url={ten}
          image_alt="TypeScript T-Shirt"
          name="TypeScript"
          price="25"
        />

        <Product
          image_url={eleven}
          image_alt="Drupal T-Shirt"
          name="Drupal"
          price="25"
        />

        <Product
          image_url={twelve}
          image_alt="JavaScript T-Shirt"
          name="JavaScript"
          price="25"
        />

        <Product
          image_url={thirteen}
          image_alt="GraphQL T-Shirt"
          name="GraphQL"
          price="25"
        />

        <Product
          image_url={fourteen}
          image_alt="WordPress T-Shirt"
          name="WordPress"
          price="25"
        />

        <div className='graphic graphic--tshirts'></div>
        <div className='graphic graphic--node'></div>
      </section>
    </main>
  )
}

export default Store
