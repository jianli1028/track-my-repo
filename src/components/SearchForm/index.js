import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';


function SearchForm({ getResult }) {

    const [inputValue, setInputValue] = useState("");
    const [submitValue, setSubmitValue] = useState("");
    const [repoData, setRepoData] = useState([]);
    const [repoAvatar, setRepoAvatar] = useState( {avatar_url: ""} );

    useEffect(() => {

        async function searchApi(searchString) {
            try {
                const result = await axios.get(`https://api.github.com/users/${searchString}/repos`);
                setRepoData(result.data);
                console.log(result.data);
            } catch (err) {
                console.log(err);
            }
        }

        searchApi(submitValue);

    }, [submitValue]);

    function renderRepos() {
        return repoData.map((s, i) =>
            <>
                <div className="repo-box">
                    <li className="show-link"
                        key={i}
                        onClick={() => { navigate(`/search/${s.full_name}`) }}>
                        {s.full_name}
                    </li>
                </div>
            </>
        )
    };

    function handleInput(e) {
        const newValue = e.target.value;
        setInputValue(newValue);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitValue(inputValue);
        setInputValue("");
    };

    return (
        <>
            <h2>Enter repo name</h2>
            <p>Search and check how many public repo this git has!</p>
            <form onSubmit={handleSubmit}>
                <div><input type="text" onChange={handleInput} value={inputValue}></input></div>
                <div className="btn-spacing"><button type="submit">Search</button></div>
                <div className="input-show-name">
                    {submitValue}
                </div>
            </form>
            <ol>{renderRepos()}</ol>
        </>
    )

};

export default SearchForm;
