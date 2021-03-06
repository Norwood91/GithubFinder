import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

export default function User({ match }) {
	const githubContext = useContext(GithubContext);
	const { getUser, loading, user, repos, getUserRepos } = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		//to mimic componentdidmount, put an empty bracket at the end of useEffect.
		// eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		html_url,
		followers,
		following,
		hireable,
		company,
	} = user;

	if (loading) return <Spinner />;

	return (
		<Fragment>
			<Link to='/' className='btn btn-dark text-center'>
				Back to Search
			</Link>
			<div className='card grid-2'>
				<div className='all-center'>
					<img
						src={avatar_url}
						className='round-img'
						alt='user profile'
						style={{ width: '150px' }}
					/>
					<h1>{name}</h1>
					<h4>Location: {location}</h4>
				</div>

				<div>
					{{ bio } && (
						<Fragment>
							<h3 style={{ borderBottom: '2px solid lightgrey' }}>
								{name}'s Bio:
							</h3>
							<p>{bio}</p>
						</Fragment>
					)}
					<div className='my-1'>
						Hireable:{' '}
						{hireable ? (
							<i className='fas fa-check text-success' />
						) : (
							<i className='fas fa-times-circle text-danger' />
						)}
						<p>Company: {company}</p>
						<p>Followers: {followers}</p>
						<p>Following: {following}</p>
					</div>
					<a href={html_url} className='btn btn-dark my-1'>
						See more on Github
					</a>
				</div>
			</div>
			<Repos repos={repos} />
		</Fragment>
	);
}
