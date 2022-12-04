import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate()
    const { isAuthenticated } = useSelector((state)=>state.user)

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/login')
        }
    }, []);

  return (
    <div>Profile</div>
  )
}

export default Profile