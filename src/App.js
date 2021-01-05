import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
//The Users component, is imported into the app.js because it is the component that is "housing" each (all of the) "UserItems" from the UserItem component. The UserItem component is only displaying the information for each user, so it doesn't need to be imported into app.js, but instead it needs to be imported into the Users component so that the Users component can display the UserItems inside of itself. In other words, the Users component is being rendered, with the UserItems component inside of it. 
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'
import './App.css';

export default class App extends Component {

  state = {
    users: [],
    loading: false
  }

  //lifecycle method component did mount
  async componentDidMount() {

    this.setState({
      //this is loading(set to true) while gathering the data from the get requests, once the data is received, it will be set back to false
      loading: true
    })
    //get request to the url for the data
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)

    this.setState({
      //set the users state to be the array of data we receive back from the get request
      users: res.data,
      //sets the loading state back to false
      loading: false
    })
  }


  render() {
    //we are passing in loading and users from our state, as props to the Users component
    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>

      </div>
    );
  }
}

