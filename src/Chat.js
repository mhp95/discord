import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import AddCircleIcon from "@material-ui/icons/AddCircle";
function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages"></div>
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