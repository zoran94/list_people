import React from "react"
import {Link} from "react-router-dom"

const Header = (props) => {

    return (
        <header>

            
            <Link to="/"><h2>User Search</h2></Link>
         <Link to="/about" style={{color: "white"}}>About</Link> 
            <div>

                <i className="fa fa-th icon" onClick={props.onChangeLayout}></i>
                <i className="fas fa-redo-alt right icon" onClick={props.onReload}></i>
            </div>


        </header>
    )

}

export default Header;