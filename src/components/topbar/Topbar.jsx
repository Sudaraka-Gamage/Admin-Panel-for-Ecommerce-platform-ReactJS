import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">

                <div className="topbarLeft">
                    <span className="logo">
                        Main Admin Panel
                    </span>
                </div>

                <div className="topbarRight">
            
                        <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                        </div>

                        <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                        </div> 

                        <div className="topbarIconContainer">
                        <Settings/>
                        
                        </div>   
                        <img src="./images/image1.jpg" alt="" className="topbarImg" />
                </div>


            </div>
        </div>
    )
} 
