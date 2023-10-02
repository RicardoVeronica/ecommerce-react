import Product from '../components/product/Product'
import './store.css'

function Store() {
  return (
    <main className="container">
      <h1>Our Products</h1>

      <section className="grid">
        <Product
          image_url="../../../public/img/1.jpg"
          image_alt="VueJS T-Shirt"
          name="VueJS"
          price="25"
        />

        <Product
          image_url="../../../public/img/2.jpg"
          image_alt="AngularJS T-Shirt"
          name="AngularJS"
          price="25"
        />

        <Product
          image_url="../../../public/img/3.jpg"
          image_alt="ReactJS T-Shirt"
          name="ReactJS"
          price="25"
        />

        <Product
          image_url="../../../public/img/4.jpg"
          image_alt="Redux T-Shirt"
          name="Redux"
          price="25"
        />

        <Product
          image_url="../../../public/img/5.jpg"
          image_alt="NodeJS T-Shirt"
          name="NodeJS"
          price="25"
        />

        <Product
          image_url="../../../public/img/6.jpg"
          image_alt="Sass T-Shirt"
          name="Sass"
          price="25"
        />

        <Product
          image_url="../../../public/img/7.jpg"
          image_alt="HTML5 T-Shirt"
          name="HTML5"
          price="25"
        />

        <Product
          image_url="../../../public/img/8.jpg"
          image_alt="GitHub T-Shirt"
          name="GitHub"
          price="25"
        />

        <Product
          image_url="../../../public/img/9.jpg"
          image_alt="BulmaCSS T-Shirt"
          name="BulmaCSS"
          price="25"
        />

        <Product
          image_url="../../../public/img/10.jpg"
          image_alt="TypeScript T-Shirt"
          name="TypeScript"
          price="25"
        />

        <Product
          image_url="../../../public/img/11.jpg"
          image_alt="Drupal T-Shirt"
          name="Drupal"
          price="25"
        />

        <Product
          image_url="../../../public/img/12.jpg"
          image_alt="JavaScript T-Shirt"
          name="JavaScript"
          price="25"
        />

        <Product
          image_url="../../../public/img/13.jpg"
          image_alt="GraphQL T-Shirt"
          name="GraphQL"
          price="25"
        />

        <Product
          image_url="../../../public/img/14.jpg"
          image_alt="WordPress T-Shirt"
          name="WordPress"
          price="25"
        />
      </section>
    </main>
  )
}

export default Store
