import React from 'react'
import style from './UserDetail.module.css'
import avatar from '../UserList/avatars.json'
const UserDetail = ({userData}) => {
  return (
    <div className={style.user_detail}>
      <h3 className={style.user_detail_head}>USER DETAILS</h3>
      <div className={style.user_detail_flex}>
        {!userData ? <div className={style.avatar}></div>: <img src={avatar[userData.id - 1].img} alt="" srcset="" className={style.user_detail_img}/>}
        <div className={style.user_name}>
          {userData? userData.profile.username:"No Data Available"}
        </div>
        <div className={style.user_bio}>
          {userData? userData.Bio : 'No data available'}
        </div>
        <div className={style.user_full_name}>
          <label className={style.label}>Full Name</label>
          <div className={style.text}>
          {userData ? `${userData.profile.firstName} ${userData.profile.lastName}` : 'No data available'}
          </div>
        </div>
        <div className={style.user_job_title}>
          <label className={style.label}>Job Title</label>
          <div className={style.text}>
          {userData ? userData.jobTitle : 'No data available'}
          </div>
        </div>
        <div className={style.user_email}>
          <label className={style.label}>Email</label>
          <div className={style.text}>
          {userData ? userData.profile.email : 'No data available'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail