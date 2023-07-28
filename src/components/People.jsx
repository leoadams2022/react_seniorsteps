import React, { useState } from 'react'
import Person from './Person'

export default function People({ data }) {
    const [searchStr, setSearchStr] = useState(null);
    const handelSearch = (e) => {
        setSearchStr(e.target.value);
    }
    return (
        <div>
            <input type="text" onChange={(e) => handelSearch(e)} placeholder='search by name' />
            {
                (searchStr === '' ? data : data.filter((person) => (person.name.includes(searchStr)))).map((person, index) => {
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
