import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

export default function Search({ showClearButton, clearUsers, setAlert }) {
	const githubContext = useContext(GithubContext);

	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please enter a name', 'danger');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	const onChange = (e) => {
		setText(e.target.value);
	};
	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={onChange}
				/>

				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{showClearButton ? (
				<button className='btn btn-light btn-block' onClick={clearUsers}>
					Clear
				</button>
			) : null}
		</div>
	);
}
