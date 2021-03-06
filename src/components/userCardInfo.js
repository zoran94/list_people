import React from "react"
import formatEmail from "./../services/HiddenEmail"
import "../userCard.css";
import isSensitive from "./../services/caseInsensitive"

const UserCard = (props) => {
  if (!props.users.length) {
    return (
      <h2 className="noSearch">No such user</h2>
    )
  }
  
  return (
    <div className="clearfix maindDiv heigh">
    {props.countGender()}
    {props.users.map((user, index) => {
    const color = { backgroundColor: user.gender === "female" ? "#ffebee" : "" }

    return (
      <div className="cards" key={index}>
        <div className="">
          <div className="card" style={color}>
            <div className="card-image">
              <img src={user.picture} className="" alt="" />
              <span className="card-title">{isSensitive(user.name)}{isSensitive(user.lastName)}</span>
            </div>
            <div className="card-content">
              <p>{formatEmail(user.email)}</p>
              <p>{user.date}</p>
            </div>


          </div>
        </div>
      </div>
    )
  })}
  </div>
  )
}


export default UserCard;