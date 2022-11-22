import React from 'react';
import {MessagesType} from "../../types";

interface Props {
  messages: MessagesType[];
}

const Chat: React.FC<Props> = ({messages}) => {
  return (
    <>
      {messages.map(message => (
      <div key={message._id}>
        <p><b>Author:</b>{message.author}</p>
        <p><b>Message:</b>{message.message}</p>
      </div>))}
    </>  );
};

export default Chat;