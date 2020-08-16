import React from 'react'
import '../Components/Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import Home from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* TwitterIcon */}
            <TwitterIcon className="sidebar__twitterIcon" />

        {/* options */}
        <SidebarOption text="Home" Icon={Home} active />
        <SidebarOption text="Explore" Icon={Search} />
        <SidebarOption text="Notifcations" Icon={NotificationsNone} />
        <SidebarOption text="Message" Icon={MailOutlineIcon}/>
        <SidebarOption text="Bookmark" Icon={BookmarkBorderIcon}/>
        <SidebarOption text="Lists" Icon={ListAltIcon}/>
        <SidebarOption text="Profile" Icon={PermIdentityIcon}/>
        <SidebarOption text="More" Icon={MoreHorizIcon}/>

        
        {/* button  */}
        <Button variant="outlined" className="sidebar__tweet">Tweet</Button>
        </div>
    )
}

export default Sidebar;