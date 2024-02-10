import React from 'react'
import './topbar.css'
import {Person, Search , Chat , Notifications} from '@mui/icons-material'

const Topbar = () => {
  return (
    <React.Fragment>
      <div className='topbarContainer'>
        <div className="topbarLeft">
      <span className="logo">
        RezaSocialMedia
      </span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search/>
            <input type="text" placeholder='Please Search' className="searchInput" />
          </div>
          </div>
          <div className="topbarRight">
            <div className="topbarLinks">
              <span className="topbarLink">HomePage</span>
              <span className="topbarLink">TimeLine</span>

            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person/>
                <span className="topbarIcobBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIcobBadge">2</span>
              </div>
              <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIcobBadge">1</span>
              </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          
          </div>

      </div>
    </React.Fragment>
  )
}

export default Topbar