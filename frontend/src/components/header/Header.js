import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';

import './Header.css'

export default function Header() {
  return (
    <div className='header'>
    <div className="admin-profile">
        <img src="/images/saeedi.jpeg" alt="Admin Profile" />
        <div>
            <h1>محمدامین سعیدی راد</h1>
            <h3>برنامه نویس فرانت اند</h3>
        </div>
    </div>

    <div className='header-left-section'>
        <div className="search-box">
            <input type="text" placeholder='جست و جو بکنید ...'  />
            <button>جست و جو</button>
        </div>

        <button className='header-left-icon'>
            <NotificationsNoneIcon/>
        </button>
        <button className='header-left-icon'>
            <LightModeIcon/>
        </button>
    </div>
</div>

  )
}
