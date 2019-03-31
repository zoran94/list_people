import React from "react"
import formatEmail from "./../services/HiddenEmail"

const UserInfo = (props) => (

    props.users.map((user, i) => (
        <div className="card" key={i}>
            <div className="card-body">
                <img src={user.picture} className="" alt="..." />
                <div className="col-lg-5 offset-1">
                    <h5 className="card-title">{user.name} {user.lastName}</h5>
                    <p className="card-text m-0"><i className="fas fa-envelope"></i> Email: {formatEmail(user.email)}</p>
                    <p className=""><i className="fas fa-birthday-cake"></i> {user.date}</p>
                </div>
            </div>
        </div>
    
    ))
    )
    

        
        export default UserInfo