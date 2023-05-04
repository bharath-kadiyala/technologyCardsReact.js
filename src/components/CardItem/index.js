import './index.css'

const TechnologyCards = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  const eachList = `list-item ${className}`
  return (
    <li className={eachList}>
      <h1 className="title">{title}</h1>
      <p className="pera">{description}</p>
      <div className="img-container">
        <img className="img-sty" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCards
