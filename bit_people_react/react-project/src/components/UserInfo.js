import React from "react"
import formatEmail from "./../services/HiddenEmail"
import isSensitive from "./../services/caseInsensitive"

const UserInfo = (props) => {
    if (!props.users.length) {
        return (
            <h2 className="noSearch">No such user</h2>
        )
    }
    return props.users.map((user, i) => {
        const color = { backgroundColor: user.gender === "female" ? "#ffebee" : "" }

        return (
            <div className="card newDiv" >
                <div className="card-body" style={color}>
                    <img src={user.picture} className="" alt="..." />
                    <div className="col-lg-5 offset-1">
                        <h5 className="card-title">{isSensitive(user.name)}{isSensitive(user.lastName)}</h5>
                        <p className="card-text m-0"><i className="fas fa-envelope"></i> Email: {formatEmail(user.email)}</p>
                        <p className=""><i className="fas fa-birthday-cake"></i> {user.date}</p>
                    </div>
                </div>
            </div>

        )
    })
}



export default UserInfo