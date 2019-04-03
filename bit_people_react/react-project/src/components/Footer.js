import React from "react"

const Footer = (props) => {
    return (
        <footer>
            <span>&copy; 2018 Copyright BIT</span>

            <p>Last update: {props.time}</p>
        </footer>
    )
}

export default Footer