import './product.css'

const Product = ({ image_url, image_alt, name, price }) => {
  return (
    <>
      <div className="product">
        <a href="#">
          <img className='product__image' src={image_url} alt={image_alt} />

          <div className='product__info'>
            <p className='product__name'>{name}</p>
            <p className='product__price'>${price}</p>
          </div>
        </a>
      </div>
    </>
  )
}

export default Product