import React from 'react'
import UserCard from '../UserCard/UserCard'
import style from './UserList.module.css'

const UserList = () => {
  return (
      <div className={style.user_list}>
          <h2 className={style.user_head}>
           USER LIST
          </h2>
          <div className={style.user_flex_cont}>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
          </div>
      </div>
  )
}

export default UserList