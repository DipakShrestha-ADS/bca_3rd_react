import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <div style={
            {
                color: "white",
                backgroundColor: "teal",
                height: "80px",
                width: "100%",
                padding: "5px 10px",
            }
        }>
            <h4>Navbar</h4>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar