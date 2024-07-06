import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'


const Sidebar = () => {

    const [extended, setExtended] = React.useState(false)
  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick = {()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
            <div className='new-chat'>
                <img src={assets.plus_icon} alt="" />
                {extended ? <p>New Game</p>: null}
            </div>
           
        </div>
        <div className="bottom">
            <div className='bottom-item recent-entry'>
                <img src={assets.question_icon} alt="" />
                {extended? <span className='activitybox'> Help</span> : null}
            </div>
            <div className='bottom-item recent-entry'>
                <img src={assets.history_icon} alt="" />
               {extended ? <span className='activitybox'> Activity</span> : null} 
            </div>
            <div className='bottom-item recent-entry'>
                <img src={assets.setting_icon} alt="" />
                {extended ? <span className='activitybox'> Settings</span>: null}
            </div>

        </div>
    </div>
  )
}

export default Sidebar