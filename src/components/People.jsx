import React from 'react'
import Person from './Person'

export default function People({ data }) {
    return (
        <div>
            {
                data.map((person, index) => {
                    return (
                        <div key={index}>
                            <Person name={person.name} age={person.age} email={person.email} number={person.number} />
                        </div>
                    )
                })
            }
        </div>
    )
}
