import React from 'react'
import style from './UserDetail.module.css'

const UserDetail = () => {
  return (
    <div className={style.user_detail}>
      <h3 className={style.user_detail_head}>USER DETAILS</h3>
      <div className={style.user_detail_flex}>
        <img src="https://avatars.dicebear.com/api/adventurer/Travis.Shanahan.svg" alt="" srcset="" className={style.user_detail_img}/>
        <div className={style.user_name}>
          Travis.Shanahan
        </div>
        <div className={style.user_bio}>
          Sit ipsa nihil ratione.
        </div>
        <div className={style.user_full_name}>
          <label className={style.label}>Full Name</label>
          <div className={style.text}>
            Hans Conelly
          </div>
        </div>
        <div className={style.user_job_title}>
          <label className={style.label}>Job Title</label>
          <div className={style.text}>
            National Accountability Architecht
          </div>
        </div>
        <div className={style.user_email}>
          <label className={style.label}>Email</label>
          <div className={style.text}>
            Jena33@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail