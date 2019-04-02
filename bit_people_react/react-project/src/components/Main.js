import React from "react"
import UserInfo from "./UserInfo"
import UserCard from "./userCardInfo"
import Loading from "./Load"
//import Search from "./Search"

const Main = (props) => {

    if (!props.users.length) {
        return <Loading />;
    }

    return props.listViewInUse
        ? <UserInfo users={props.users} />
        : <UserCard users={props.users} />;
}

export default Main