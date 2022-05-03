import React from 'react'
import UserDetail from '../UserDetail/UserDetail'
import UserList from '../UserList/UserList'
import style from './UserContainer.module.css'
const UserContainer = () => {
  return (
    <div className={style.user_container}>
        <UserList/>
        <UserDetail/>
    </div>
  )
}

export default UserContainer