import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        text: ''
    }
    //if you don't use an arrow function for the onSubmit function, you will need to include the e.preventDefault() behavior, as well as having to bind the "this" keyword to the function. You'll also need to put the .bind(this) on the form as an attribute
    onSubmit = (e) => {
        e.preventDefault()

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
                        value={this.state.text} />

                    <input type="submit"
                        value="Search"
                        className="btn btn-dark btn-block" />

                </form>
            </div>
        )
    }
}



