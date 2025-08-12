import { useEffect, useState } from "react"

export default function ApiTest(){
    const [mobileData, setData] = useState([]);
    useEffect(()=>{
        const fetchDataEvent = async()=>{
            const response = await fetch(
                "https://api.restful-api.dev/objects"
            );
            const data = await response.json();
            console.log(data);
            setData(()=>data);
        }
        fetchDataEvent();
    },[]);
    
    return(
        <>
            <h1>Api Example Test</h1>
            <div>
                <p>{mobileData}</p>
            </div>
        </>
    )
}