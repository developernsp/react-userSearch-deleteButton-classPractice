import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {userDetailsList: initialUserDetailsList, inputSearch: ''}

  onChangeSearchInput = event => {
    const {inputSearch} = this.state
    this.setState({inputSearch: event.target.value})
  }

  onDeleteUser = uniqueNo => {
    const {userDetailsList} = this.state

    const filteredUserDate = userDetailsList.filter(
      user => user.uniqueNo !== uniqueNo,
    )

    this.setState({userDetailsList: filteredUserDate})
  }

  render() {
    const {userDetailsList, inputSearch} = this.state

    const filteredUserDetailsList = userDetailsList.filter(user =>
      user.name.includes(inputSearch),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.onChangeSearchInput} />
        <ul className="list-container">
          {filteredUserDetailsList.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.onDeleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
