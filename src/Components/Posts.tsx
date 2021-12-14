import React, { useEffect, useState, HTMLAttributes } from 'react'
import ApiTest from '../api/ApiTest';


const Posts = () => {
    const [dataItem, setdataItem] = useState([{ temperatureC: 0 }]);

    useEffect(() => {
        ApiTest((isOk: boolean, data: []) => {
            if (isOk) {
                setdataItem(data);
                console.log(data);
            } else {
                console.log(data);
            }
        });
        console.log("testeee");
    }, []);

    const click = () => {
        console.log(dataItem);
    };

    return (
        <div>
            <button onClick={() => click()}>test</button>
            {
                dataItem.map(it => <div>{it.temperatureC}<br /></div>)
            }
        </div>
    )
}

export default Posts
