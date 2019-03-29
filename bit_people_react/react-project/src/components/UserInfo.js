import React from "react"


const UserInfo = (props) => {

    return props.users.map((user) => {
        return <p>{user.name}</p>
    })



}

export default UserInfo