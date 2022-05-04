import React from 'react'
import UserCard from '../UserCard/UserCard'
import style from './UserList.module.css'
import avatar from "./avatars.json"
import Loader from '../Loader/Loader'

const UserList = ({data,selectUser,loading,errmes}) => {
  return (
      <div className={style.user_list}>
          <h2 className={style.user_head}>
           USER LIST
          </h2>
          <div className={style.user_flex_cont}>
            {
              data ? data.map((user) => {
                  return (
                    <UserCard key={user.id} userData={user} imgsrc={avatar[user.id - 1].img}  selectUser={selectUser}/>
                  )
              }):''
            }
            {loading? <Loader/>:''}
            {
              errmes && <div className="error">{errmes}</div>
            }
          </div>
      </div>
  )
}

export default UserList