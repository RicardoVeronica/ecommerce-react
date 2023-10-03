import './icon.css'

const Icon = ({ image, image_alt, title, text }) => {
  return (
    <>
      <div className="icon">
        <img className="icon__image" src={image} alt={image_alt} />
        <h3 className="icon__title">{title}</h3>
        <p className="icon__text">{text}</p>
      </div>
    </>
  )
}

export default Icon