import React from "react";

function GithubDetails({ res }) {
    return (
        <>
            <div>
                <h3>Username: {res.login}</h3>
                <h3>Profile Avatar: </h3>
                <img
                    src={res.avatar_url}
                    className="profile-img"
                    alt={res.login}
                />
            </div>
        </>
    );
}

export default GithubDetails;
