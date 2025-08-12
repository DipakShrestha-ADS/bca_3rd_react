import { useEffect, useState } from "react"

const ApiCalling = ()=>{
    // preparing state for todos to accept array of object
    const [todos, setTodos] = useState([])
    // fetching data of todo, initially
    useEffect(
        ()=>{
            const fetchTodos = async ()=>{
                let response = await fetch("https://jsonplaceholder.typicode.com/todos")
                let todosRes = await response.json()
                console.log("all todos : ", todosRes)
                // updating state
                setTodos(todosRes)
            }
            // calling fetch todo function
            fetchTodos()
        },
        []
    )
    return(
        <>
            <h3>Api Request Example</h3>
            <ul>
                {
                    todos.map(
                        (todo)=>{
                            return(
                                <div key={todo.id} style={{
                                    backgroundColor: todo.completed ? "green" : "red",
                                    borderRadius: "10px",
                                    boxShadow: "4px 4px 5px grey",
                                    padding: "5px 10px",
                                    marginBottom: "20px",
                                }}>
                                    <h5>{todo.id}. {todo.title}</h5>
                                    <p>User ID : {todo.userId}</p>
                                </div>
                            )
                        }
                    )
                }
            </ul>
        </>
    )
}
export default ApiCalling