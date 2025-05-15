import { Link } from "react-router-dom"
import CallService from "../img/Call Service.svg"
import ChatHeader from "./ChatHeader";
import MessageBubble from './MessageBubble'
import ImagePreview from './ImagePreview'
import FileAttachment from './FileAttachment'
import ChatInput from './ChatInput'


const ChatApp = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto bg-[#f7f9fc] py-[5rem] space-y-6">
        <p className="text-center text-xs text-gray-400">Today</p>
        <MessageBubble text="Hi 👋, How are ya ?" time="0:12" sent={false} />
        <MessageBubble text="Hi 👋 Panda, not bad, u ?" time="8:17" sent={true} />
        <MessageBubble text="Can you send me an abstract image?" time="8:17" sent={true} />
        <ImagePreview src="https://via.placeholder.com/128" time="10:35" />
        <MessageBubble text="Can you send it as file ?" time="11:12" sent={true} />
        <FileAttachment name="Abstract.png" time="11:25" />
        <MessageBubble text="Thnx!" time="11:26" sent={true} />
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatApp
