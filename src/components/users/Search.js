import React, {useState} from 'react'


export default function Search({searchUsers, showClearButton, clearUsers, setAlert}) {
    const [text, setText] = useState('')
   
    const onSubmit = (e) => {
        e.preventDefault()
        if (text === "") {
            setAlert('Please enter a name', 'danger')
        } else {
            searchUsers(text)
            setText('')
        }

    }

    const onChange = (e) => {
        setText(e.target.value)
    }
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={text}
                        onChange={onChange}
                    />

                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block" />
                </form>
                {
                    showClearButton
                        ?
                        <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
                        :
                        null
                }
            </div>

    )
}

