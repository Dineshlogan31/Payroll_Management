import React from 'react'
import { UserSideBarData } from './UserSideBarData'

const UserSidebar = () => {
  return (
   <>
    <div className='SideBar'>
            <div className='ProfileInfo'>
                 User
            </div>
            <ul className='SidebarList'>
                {
                    UserSideBarData.map((value, key) => {
                        return <li id={window.location.pathname === value.link ? "active" : ""} key={key} className='SidebarRow' onClick={()=>{window.location.pathname = value.link}}><div id='icon'>{value.icon}</div>
                            <div id='title'>{value.title}</div></li>
                    })
                }
            </ul>

        </div>
        <div>
        </div>
   </>
  )
}

export default UserSidebar