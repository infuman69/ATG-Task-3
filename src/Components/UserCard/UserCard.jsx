import React from 'react'
import style from './UserCard.module.css'

const UserCard = ({imgsrc,userData}) => {
  return (
    <div className={style.user_card}>
        <img src="https://cdn.fakercloud.com/avatars/laasli_128.jpg" alt="" srcset="" className={style.user_img} />
        <h5 className={style.user_card_name}>Name</h5>
    </div>
  )
}

export default UserCard