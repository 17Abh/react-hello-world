import React from'react'

const FunctionalClick = () => {
    const clickHandler = () =>{
        console.log("button clicked")
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionalClick