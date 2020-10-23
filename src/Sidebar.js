import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import SettingsIcon from "@material-ui/icons/Settings";
import HeadsetIcon from "@material-ui/icons/Headset";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Hossein</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar />
        <div className="sidebar__profileInfo">
          <h3>MHP</h3>
          <p>#MyID</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
