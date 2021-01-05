//Create the navbar component, and then export it, so it can be imported into app.js
import React from 'react'
import PropTypes from 'prop-types'

//another way to destructure the props is to pass it as an argument to the UserItem function like so
export default function Navbar({ icon, title }) {

    return (
        <div>
            <nav className='navbar bg-light'>
                <h1><i className={icon}></i> {title}</h1>
            </nav>
        </div>
    )
}

//you can set default props, if you decide to not pass the props down from app.js. So, if no props were passed down, these two default props will take over. And since they aren't in the render function, to access them, you'll need to use the "this" keyword
Navbar.defaultProps = {
    title: 'GithubFinder',
    icon: 'fab fa-github'
}
//your app will work without propTypes, but it's good to use so that you can make sure you're using the correct datatypes for your props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}