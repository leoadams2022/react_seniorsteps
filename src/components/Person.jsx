import React from 'react'

export default function Person({ name, age, email, number }) {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p>
            <p>{number}</p>
        </div>
    )
}
