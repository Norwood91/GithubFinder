import React, { Component } from 'react'
import Spinner from "../layout/Spinner"
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'


export default class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)

    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }
    render() {
        const { name, avatar_url, location, bio, html_url, followers, following, hireable, company } = this.props.user

        const { loading } = this.props

        if (loading) return <Spinner />

        return (
            <Fragment>
                <Link to="/" className="btn btn-dark">Back to Search</Link>
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt="user profile" style={{ width: '150px' }} />
                        <h1>{name}</h1>
                        <h4>Location: {location}</h4>
                    </div>

                    <div>
                        {
                            { bio } && <Fragment>
                                <h3>{name}'s Bio:</h3>
                                <hr />
                                <p>{bio}</p>
                            </Fragment>
                        }
                        <div className="my-1">
                            Hireable: {' '}
                            {
                                hireable
                                    ?
                                    <i className="fas fa-check text-success" />
                                    :
                                    <i className="fas fa-times-circle text-danger" />
                            }
                            <p>Company: {company}</p>
                            <p>Followers: {followers}</p>
                            <p>Following: {following}</p>
                        </div>
                        <a href={html_url} className="btn btn-dark my-1">See more on Github</a>
                    </div>
                </div>
            </Fragment>
        )
    }
}


