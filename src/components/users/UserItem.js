import React from 'react'
import PropTypes from 'prop-types'

//another way to destructure the props is to pass it as an argument to the UserItem function like so
export default function UserItem({ user: { login, avatar_url, html_url } }) {

    //So, since we passed in props from the Users component, we can now destructure those props and pull out what we need. We are pulling the below three things from the user objects in the Users' component's state(represented by the "user" variable in the map function), and setting them to this.props.user. The "user" keyword at the end of this.props.user, has all of the user information inside of it (this is the same user variable from the map function), and we are just pulling the pieces of info that we need to use.

    //const { login, avatar_url, html_url } = props.user;

    //essentially the UserItem component is just displaying the information from the props that were passed in from the Users component.
    return (
        <div className="card text-center">
            <img
                src={avatar_url}
                alt="user-avatar"
                className="round-img"
                style={{ width: '60px' }} />

            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}