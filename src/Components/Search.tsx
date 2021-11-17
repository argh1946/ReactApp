import React, { useEffect, useState } from 'react'

const Search = () => {

   console.log("test")

const [query, setQuery] = useState('');


useEffect(() => {
    console.log("testeee");
    
}, [query]);

    return (
        <div>
           
            <input onChange={e=>setQuery(e.target.value)}  ></input>
        </div>
    )
}

export default Search
