import React from 'react';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
    return (
        
        <div className="header">
            <div className="header_left"></div>
        <MenuIcon />
        <img 
        className="header_logo"
        src="https://neilpatel.com/wp-content/uploads/2015/09/youtube.png" 
        alt =""
        />

        <div className="header_input">
        <input type="text"/>
        <SearchIcon/>
        </div>

        <div className="header_icon">
        <VideoCallIcon/>
        <AppsIcon/>
        <NotificationsIcon/>
        <Avatar 
            alt="Aravindh"
            src="https://yt3.ggpht.com/yti/ANoDKi5MnDQknPqaca6M92qc-YXsqyIfDoifT3cboWZJ=s88-c-k-c0x00ffffff-no-rj-mo"/>
        </div>
        </div>
    )
}

export default Header;