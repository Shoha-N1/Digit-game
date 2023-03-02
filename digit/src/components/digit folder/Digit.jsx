import React, { useState } from 'react'

export default function Digit() {
    const [randomNumber,setRandomNumber] = useState(random(0,100));
    const [enteredNumber,setEnteredNumber] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();

        if(randomNumber === enteredNumber){
            alert("You win!");
            setRandomNumber(random(0,100))

            return;
        }

        if(randomNumber > enteredNumber) alert("Hight")
        if(randomNumber < enteredNumber) alert("Lower")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input onChange={(evt) => setEnteredNumber(+evt.target.value)} value={enteredNumber} type="number" />
        <button type="submit">Guess</button>
    </form>
  )
}

function random(start, end) {
    return Math.trunc(start + Math.random() * end)
}
