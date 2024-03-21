import React from 'react'
import account from '../../assets/User.svg'

const Profile = () => {
  return (
    <div>
        <div className=' bg-blue h-[278px]'></div>
        <div>
            <div>
                <img src={account} alt="" />
            </div>
            <div>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Profile