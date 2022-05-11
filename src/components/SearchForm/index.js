import React, { useState } from 'react';

function SearchForm({ getResult }) {

    const [ location, setLocation ] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        getResult(location);
    }

    const updateInput = e => {
        const location = e.target.value 
        setLocation(location)
    }


    return (
        <form role="form" onSubmit={handleSubmit}>
            <input aria-label="Location" type="text" onChange={updateInput} value={location}/>
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;
