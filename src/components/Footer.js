import React from "react"

const Footer = (props) => {
    return (
        <footer className="position-sticky page-footer">
            <span>&copy; 2018 Copyright BIT</span>
            <p> {props.updateTime()}</p>
        </footer>
    )
}

export default Footer