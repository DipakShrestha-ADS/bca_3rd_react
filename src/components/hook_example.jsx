import { useEffect, useState } from "react"

const HookExample = ()=>{
    const [value, setValue] = useState(0)
    const [counter, setCounter] = useState(0)
   
    const multiplyBy5 = ()=>{
        // optimized call: getting previous value from setValue function
        setValue(
            // callback function
            (prevValue)=>{
                if(prevValue == 0){
                    return 1
                }else{
                    return prevValue * 5
                }
            }
        )
    }
    // this will be called infinitely
    useEffect(
        // callback funciton
        ()=>{
            console.log("useEffect called")
        },
        // dependency array
    )
    // this will be called only one time i.e. at the first render when the dependency array is empty
    useEffect(
        ()=>{
            console.log("use efeect with empty dependency called")
            let interval = setInterval(
                ()=>{
                    console.log("called every 1 second")
                    setCounter((prev)=>prev + 1)
                },
                1000
            ) 
            return ()=>{
                clearInterval(interval)
            }
        },
        []
    )
    // this will be called when the counter value changes
    // useEffect is side effect of component
    useEffect(
        ()=>{
            console.log("useEffect with counter dependency called")
        },
        [value]
    )
    // fetching data from api using useEffect hook & fetch function
    useEffect(
        ()=>{
            fetch("https://jsonplaceholder.typicode.com/users").then(
                (result)=>{
                    result.json().then(
                        (data)=>{
                            console.log("data : ", data)
                        }
                    )
                }
            )
        },
        []
    )
    return(
        <>
            <h1>Hook Example</h1>
            <p>Use State Example</p>
            <b>My Value: {value}</b>
            {/* calling setValue directly */}
            <button onClick={()=>{
                setValue(value + 5)
            }}>Increment By 5</button>
            {/* calling custom function from button */}
            <button onClick={multiplyBy5}>Multiply By 5</button>

            {/* use Effect Example */}
            <h4 style={{color: "red", fontSize: "40px"}}>Counter Value : {counter}</h4>
        </>
    )
}
export default HookExample