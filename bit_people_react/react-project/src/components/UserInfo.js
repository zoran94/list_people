import React from "react"


const UserInfo = (props) => (

    props.users.map((user) => (
        <div className="card">
            <div className="card-body">
                <img src={user.picture} className="" alt="..." />
                <div className="col-lg-5 offset-1">
                    <h5 className="card-title">{user.name} {user.lastName}</h5>
                    <p className="card-text m-0"><i className="fas fa-envelope"></i>Email: {user.email}</p>
                    <p className=""><i className="fas fa-birthday-cake"></i>Date of birth: {user.date}</p>
                </div>
            </div>
        </div>))
)


export default UserInfo
