import React from "react"

const Header = (props) => {


    return (
        <header>

            <h2>Bit persons</h2>
            <div>

                <i className="fa fa-th icon" onClick={props.onChangeLayout}></i>
                <i className="fas fa-redo-alt right icon" onClick={props.onReload}></i>
            </div>


        </header>
    )

}

export default Header;