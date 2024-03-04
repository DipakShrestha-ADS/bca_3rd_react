import React from 'react'
import { number } from 'yup'
function Calculator() {
    let [a, setA] = React.useState(0)
    let [b, setB] = React.useState(0)
    let [res, setResult] = React.useState(0)
    
    return (
        <div>
            <h1>Calculator</h1>
            <div>
                <input type="number" onChange={
                    (e)=>{
                        setA(e.target.value)
                    }
                }></input>
                +
                <input type="number"  onChange={
                    (e)=>{
                        setB(e.target.value)
                    }
                }></input>
                =
                <input type="text" value={Number(a)+Number(b)}></input>
            </div>
        </div>
    )
}

export default Calculator