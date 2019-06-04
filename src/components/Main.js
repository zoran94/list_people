import React from "react"
import UserInfo from "./UserInfo"
import UserCard from "./userCardInfo"
import FailedSearch from "./failedSearch"
import {Switch, Route} from "react-router-dom"
import Search from "./Search";
const Main = (props) => {

    if (!props.users.length) {
        return (
            <>
        <Search onSearch={props.onSearchInput} />
        <FailedSearch />
        </>
        )
    }


    return (<>
    
            <Search onSearch={props.onSearchInput} />
     {props.listViewInUse
        ? <UserInfo users={props.users} countGender={props.countGender}/>
        : <UserCard users={props.users} countGender={props.countGender}/>}
        
        </>
)
}

export default Main