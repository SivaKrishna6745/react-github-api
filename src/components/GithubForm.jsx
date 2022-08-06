import axios from "axios";
import React, { useState } from "react";

function GithubForm({ res, setRes }) {
    const [search, setSearch] = useState("");
    function handleChange(e) {
        setSearch(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        axios
            .get(`https://api.github.com/users/${search}`)
            .then((response) => {
                const { data } = response;
                setRes(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <form className="form-group" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control"
                value={search}
                onChange={handleChange}
            />
            <button className="btn">Search</button>
        </form>
    );
}

export default GithubForm;
