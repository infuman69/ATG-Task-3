import React from 'react'

const UserCard = ({imgsrc,userData}) => {
  return (
    <div className="user-card">
        <img src={imgsrc} alt="" srcset="" />
        <h5>Name</h5>
    </div>
  )
}

export default UserCard