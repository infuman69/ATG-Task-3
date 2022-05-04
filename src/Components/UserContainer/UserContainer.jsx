import React, { useState ,useEffect} from 'react'
import UserDetail from '../UserDetail/UserDetail'
import UserList from '../UserList/UserList'
import style from './UserContainer.module.css'
import { Usercall } from '../../api/Userapi'

const UserContainer = () => {
  const [loading,setloading] = useState(false)
  const [userData,setuserData] = useState(null)
  const [data,setdata] = useState([])
  const [errmes,seterrmes] = useState('')
  
  useEffect(()=>{
    setloading(true)
    const fetchdata = async () => {
      try{
        const data = await Usercall()
        setdata(data);
        setloading(false)
      }catch(err){
        seterrmes("Unable to fetch user data")
        setloading(false)
      }
    }
    fetchdata()
  },[])

  const selectUser = (user) => {
    setuserData(user)
  }
  return (
    <div className={style.user_container}>
        <UserList data={data} selectUser={selectUser} loading={loading} errmes={errmes}/>
        <UserDetail/>
    </div>
  )
}

export default UserContainer