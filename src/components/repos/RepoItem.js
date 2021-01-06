import React from 'react'


const RepoItem = ({repo}) => {
    return (
        <div className="card">
            <h2 className="text-center my-1" style={{borderBottom: '2px solid lightgrey'}}>LATEST REPOSITORY</h2>
            
            <h2 className="text-center"><a href={repo.html_url} className="text-dark"><br/>{repo.name}</a></h2>
        </div>
    )
}



export default RepoItem