<div className="row col-4">
<div className="col s12 ">
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
</div>