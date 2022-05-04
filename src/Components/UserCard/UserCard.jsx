import React from 'react'
import style from './UserCard.module.css'

const UserCard = ({imgsrc,userData,selectUser}) => {
  return (
    <div className={style.user_card} onClick={() => {selectUser(userData)}}>
        <img src={imgsrc} alt="" srcset="" className={style.user_img} />
        <h5 className={style.user_card_name}>{userData ? `${userData.profile.firstName} ${userData.profile.lastName}` : ''}</h5>
    </div>
  )
}

export default UserCard