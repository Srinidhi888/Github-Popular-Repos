// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {name, id, issuesCount, forksCount, starsCount, avatarUrl} = details
  return (
    <li className="li-1">
      <img src={avatarUrl} alt={name} className="ima" />
      <h1>{name}</h1>
      <div>
        <div className="inner-bg">
          <img
            className="ima-logo"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p>{starsCount}</p>
        </div>
        <div className="inner-bg">
          <img
            className="ima-logo"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p>{forksCount}</p>
        </div>
        <div className="inner-bg">
          <img
            className="ima-logo"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
            alt="open issues"
          />
          <p>{issuesCount}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
