import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
//The Users component, is imported into the app.js because it is the component that is "housing" each (all of the) "UserItems" from the UserItem component. The UserItem component is only displaying the information for each user, so it doesn't need to be imported into app.js, but instead it needs to be imported into the Users component so that the Users component can display the UserItems inside of itself. In other words, the Users component is being rendered, with the UserItems component inside of it. 
import Users from './components/users/Users'
import './App.css';

export default class App extends Component {
 
  render() {
    return (
      <div className='App'>
       <Navbar />
       <div className="container">
        <Users />
       </div>
        
      </div>
    );
  }
}

