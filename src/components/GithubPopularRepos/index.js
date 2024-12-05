import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {statusId: 'ALL', list: [], isLoading: true}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const {statusId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${statusId}`
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      this.setState({list: updatedData, isLoading: false})
    }
  }

  onBtn = id => {
    this.setState({statusId: id, isLoading: true}, this.getList)
  }

  render() {
    const {list, statusId, isLoading} = this.state
    const a = (
      <ul className="ul-1">
        {list.map(each => (
          <RepositoryItem details={each} key={each.id} />
        ))}
      </ul>
    )
    const b = (
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
      </div>
    )

    return (
      <div className="bg">
        <h1 className="head">Popular</h1>
        <ul className="ul-2">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              onBtn={this.onBtn}
              details={each}
              key={each.id}
              isMatch={each.id === statusId}
            />
          ))}
        </ul>
        {isLoading ? b : a}
      </div>
    )
  }
}

export default GithubPopularRepos
