import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import ApiTest from '../api/ApiTest';
import Posts from './Posts';

const Search = () => {

   console.log("test")
   

const [query, setQuery] = useState('');


useEffect(() => {
ApiTest((isOk:boolean,data:any)=>{
if(isOk){

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        
    }
    console.log(data);
}else {
    console.log(data.message);
}
});

    console.log("testeee");
    
}, [query]);

    return (
        <div>
            <input onChange={e=>setQuery(e.target.value)}  ></input>
            <input type='text' value={query}></input>
        </div>
    )
}

export default Search
