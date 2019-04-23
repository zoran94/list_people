import React from "react"

const Footer = (props) => {
    return (
        <footer className="position-sticky">
            <span>&copy; 2018 Copyright BIT</span>
            <p>Last update: {props.timeVisited}</p>
        </footer>
    )
}

export default Footer