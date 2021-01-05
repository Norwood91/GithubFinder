import React, { Component } from 'react'
import UserItem from './UserItem'

export default class Users extends Component {


    render() {

        //the props for "users" is being passed in to the User component (this one) from the app.js main file since we decided to set the state inside of that file. 
        //when you display a list, the child needs a key which in this case will be the user.id

        return (
            <div style={userStyle}>
                {this.props.users.map(user => {
                    return <UserItem key={user.id} user={user} />
                })}

            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
