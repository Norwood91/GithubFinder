import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
    }
    //if you don't use an arrow function for the onSubmit function, you will need to include the e.preventDefault() behavior, as well as having to bind the "this" keyword to the function. You'll also need to put the .bind(this) on the form as an attribute
    onSubmit = (e) => {
        e.preventDefault()
        //We are calling a "searchUsers" function in the props and passing in the state of text
        this.props.searchUsers(this.state.text)
        //setting state back to an empty string
        this.setState({ text: "" })
    }

    onChange = (e) => {
        //this is a way to set the value of mulitple inputs that you may have. You set the name attribute to the target value. 
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange}
                    />

                    <input type="submit"
                        value="Search"
                        className="btn btn-dark btn-block" />

                </form>
            </div>
        )
    }
}



