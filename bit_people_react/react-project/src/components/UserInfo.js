import React from "react"
import isSensitive from "./../services/caseInsensitive"

const UserInfo = (props) => {
    return (
        <div>
        {props.countGender()}
       
    
            {props.users.map((user, index) => {
               
                const color = { backgroundColor: user.gender === "female" ? "#ffebee" : "" }
                return (
                    <div className="newDiv" key={index}>
                        <div className="card-body" style={color}>
                            <img src={user.picture} className="" alt="..." />
                            <div className="col-lg-5 offset-1">
                                <h5 className="card-title">
                                    {isSensitive(user.name)}{isSensitive(user.lastName)}
                                </h5>
                                <p className="card-text m-0"><i className="fas fa-envelope"></i> Email: {user.email}</p>
                                <p className=""><i className="fas fa-birthday-cake"></i> Date of birth: {user.date}</p>
                            </div>
                        </div>
                    </div>)
            })}
        </div>
    );
}


export default UserInfo
