import React from 'react'
import '../App.css'

import { SideBarData } from './SideBarData'
import { Link ,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { loggedOut } from '../Store/LoggedUserSlicer'



const SideBar = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const user=useSelector((state)=>state.loggedUser)
    const loggedUser=user[0]
  const userLoggedOut=()=>{
    localStorage.clear()
       dispatch(loggedOut())
       navigate("/")
  }
   
    return (
        <>
        <div className='SideBar'>
            <div className='ProfileInfo'>
               
               <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Vomit&skinColor=Brown'
  alt='avatar'/>
        <h4>{loggedUser.name}</h4>
            </div>
            <ul className='SidebarList'>
                {
                    SideBarData.map((value, index) => {
                        return <Link to={value.link} key={index}>
                        <li   className='SidebarRow'><div id='icon'>{value.icon}</div>
                            <div id='title'>{value.title}</div></li>
                        </Link>
                    })
                }
            </ul>
            
                <div className='logoutDiv' onClick={userLoggedOut}>
                    <div className='logoutIcon'><i style={{color:"white"}} className="fa-solid fa-right-from-bracket"></i></div>
                    <div className='logoutButton' >Logout</div>
                </div>
            
        </div>
        
        </>
    )
}

export default SideBar