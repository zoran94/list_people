import React from "react"
import formatEmail from "./../services/HiddenEmail"

import "../userCard.css";

const UserCard = (props) => {

  return props.users.map(user => {
    return (

      <div className="row col-4">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src={user.picture} className="" alt="" />
              <span className="card-title">{user.name} {user.lastName}</span>
            </div>
            <div className="card-content">
              <p>{formatEmail(user.email)}</p>
              <p>{user.date}</p>
            </div>


          </div>
        </div>
      </div >
    )
  })
}


export default UserCard;