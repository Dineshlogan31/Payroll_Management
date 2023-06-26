import React from 'react'
import '../App.css'

import { SideBarData } from './SideBarData'
// import Employee from './Employee/Employee'
// import Task from './Tasks/Task'
// import Dashboard from './Dashboard/Dashboard'
// import Mailcomponent from './MailBox/Mailcomponent'


const SideBar = () => {
    return (
        <>
        <div className='SideBar'>
            <div className='ProfileInfo'>
                Admin User
            </div>
            <ul className='SidebarList'>
                {
                    SideBarData.map((value, key) => {
                        return <li id={window.location.pathname === value.link ? "active" : ""} key={key} className='SidebarRow' onClick={()=>{window.location.pathname = value.link}}><div id='icon'>{value.icon}</div>
                            <div id='title'>{value.title}</div></li>
                    })
                }
            </ul>
        </div>
        
        </>
    )
}

export default SideBar