// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {onBtn, details, isMatch} = props
  const {id, language} = details
  const spcl = isMatch ? 'btn' : 'language-btn'
  const onChangeBtn = () => {
    onBtn(id)
  }
  return (
    <li className="li-2">
      <button onClick={onChangeBtn} type="button" className={spcl}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
