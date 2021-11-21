import React from 'react'

interface FullName {
    firstName: string;
    lastName: string;
}



const PropTest = (p:FullName) => {
    return (
        <div>
            <p>{p.firstName + " "+ p.lastName}</p>
        </div>
    )
}

export default PropTest
