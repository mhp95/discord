import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Message from "./Message";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/appSlice";
function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  return (
    <div className="chat">
      <ChatHeader user={user} channelId={channelId} channelName={channelName} />
      <div className="chat__messages">
        <Message />
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={`Message #TestChannel`} />
          <button type="submit" className="chat__inputButton">
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
