import React from "react"

const Header = (props) => {


    return (
        <header>

            <h2>Bit persons</h2>
            <button onClick={props.reload}>Refresh</button>
            <button onClick={props.onChangeLayout}>Switch</button>

        </header>
    )

}

export default Header;