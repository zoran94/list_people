import React from "react"
import UserInfo from "./UserInfo"
import UserCard from "./userCardInfo"
import FailedSearch from "./failedSearch"
import {Switch, Route} from "react-router-dom"
const Main = (props) => {

    if (!props.users.length) {
        return <FailedSearch />
    }


    return props.listViewInUse
        ? <UserInfo users={props.users} />
        : <UserCard users={props.users} />;
}

export default Main