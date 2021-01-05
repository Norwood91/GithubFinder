//Create the navbar component, and then export it, so it can be imported into app.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Navbar extends Component {
    //you can set default props, if you decide to not pass the props down from app.js. So, if no props were passed down, these two default props will take over. And since they aren't in the render function, to access them, you'll need to use the "this" keyword
    static defaultProps = {
        title: 'GithubFinder',
        icon: 'fab fa-github'
    }
    //your app will work without propTypes, but it's good to use so that you can make sure you're using the correct datatypes for your props
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    render() {
       
        return (
            <nav className='navbar bg-primary'>
                <h1><i className={this.props.icon}></i> {this.props.title}</h1>
            </nav>
        )
    }
}
