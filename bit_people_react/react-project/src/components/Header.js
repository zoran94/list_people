import React from "react"
import {Link} from "react-router-dom"

const Header = (props) => {
       const {listView} = props;
    return (
        <header>

            
            <div className="headerSide">
            <div>
            <Link to="/"><h2>User Search</h2></Link>
            </div>
            <div className="lista">
            <ul className="right">
         <Link to="/about" style={{color: "white"}}><li className="aboutP">About</li></Link> 
                <li>{listView ? <i className="fa fa-th icon" onClick={props.onChangeLayout}></i> 
                : <i className="fas fa-th-list icon" onClick={props.onChangeLayout}></i> }</li>
                <li><i className="fas fa-redo-alt right icon" onClick={props.onReload}></i></li>
            </ul>
            </div>
            </div>


        </header>
    )

}

export default Header;