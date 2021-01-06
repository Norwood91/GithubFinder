import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import axios from 'axios'
import './App.css';


export default class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }

  /*lifecycle method component did mount
  //this will allow there to be users showing up on the page when you go to the site
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
  */

  //Search Github users
  searchUsers = async (text) => {

    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)

    this.setState({
      users: res.data.items,
      loading: false
    })
  }

  //Clear Users
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    })
  }


  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg, type
      }
    })
    setTimeout(() => this.setState({ alert: null }), 3000)
  }
  render() {
    const { users, loading } = this.state
    //we are passing in loading and users from our state, as props to the Users component

    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClearButton={users.length > 0 ? true : false}
                    setAlert={this.setAlert} />

                  <Users
                    loading={loading}
                    users={users} />

                </Fragment>
              )} />

              <Route exact path="/about" component={About} />
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

