import React from 'react'

const Person = ({person}) => {
    return(
        <div>
            <h2>
               {person.id} i am {person.name} i am {person.age} yeras old and i have {person.skill} </h2>
        </div>
    )
}
export default Person