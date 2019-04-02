import React from "react"
import UserInfo from "./UserInfo"
import UserCard from "./userCardInfo"


const Main = (props) => {

    if (props.listViewInUse === true) {
        return (
            <UserInfo users={props.users} />
        )
    } else {
        return (
            <UserCard users={props.users} />
        )
    }



}

export default Main