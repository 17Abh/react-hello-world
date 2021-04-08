import React from 'react'
import Person from './Person'

const NameList = () => {
    const names = ["dragon", "zeref", "leon","dragon"]
    const persons = [
        {
            id:1,
            name:'dragon',
            age:99,
            skill:'instant kill',
        },
        
        {
            id:2,
            name:'zeref',
            age:400,
            skill:'imortal'
        },

        {
            id:3,
            name:'leon',
            age:23,
            skill:'light'
        }


    ]
   // const personList = persons.map(person => <Person key={person.id} person={person} />)
      const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2> ) 
    return(
        <div>
            {
                nameList
            }
        </div>
    )
}

export default NameList;