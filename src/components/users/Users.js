import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

//destructuring the props that are being passed in from the app.js file
export default function Users({ users, loading }) {
    if (loading) {
        return <Spinner />
    } else {
        //the props for "users" is being passed in to the User component (this one) from the app.js main file since we decided to set the state inside of that file. 
        //when you display a list, the child needs a key which in this case will be the user.id

        return (
            <div style={userStyle}>
                {users.map(user => {
                    return <UserItem key={user.id} user={user} />
                })}

            </div>
        )

    }
}


Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}


