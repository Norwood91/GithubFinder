import React, { Component } from 'react'
import UserItem from './UserItem'

export default class Users extends Component {
    
    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: '2',
                login: 'defunkt',
                avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/defunkt'
            },
            {
                id: '3',
                login: 'pjhyett',
                avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/pjhyett'
            }
        ]
    }
    render() {
        //for every user that is being looped through in the state(with the map function), the user variable (in the map function) represents the entire user object(each user in the state), and those users are now being passed in as a prop to the UserItem component

        //when you display a list, the child needs a key which in this case will be the user.id
       
        return (
            <div style={userStyle}>
                {this.state.users.map(user => {
                   return <UserItem key={user.id} user={user}/>
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
