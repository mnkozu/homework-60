import React, {useEffect, useState} from 'react';
import { MessagesType } from "./types";
import Chat from "./components/Chat/Chat";

const url = 'http://146.185.154.90:8000/messages';

function App() {
  const [messages, setMessages] = useState<MessagesType[]>([]);
  const [newMessages, setNewMessages] = useState<MessagesType[]>([]);

  useEffect(() => {
    let lastDate = '';

    const fetchData = async () => {
      const response = await fetch(url + lastDate);

      if (response.ok) {
        const data: MessagesType[] = await response.json();

        if (lastDate.length === 0) {
          setMessages([...data]);
        }

        if (lastDate.length > 0) {
          setNewMessages([...data]);
        }

        if (data.length > 0) {
          lastDate = '?datetime=' + data[data.length - 1].datetime;
        }
      }
    };

    setInterval(() => {
      setNewMessages([]);
      fetchData().catch(e => console.error(e));
    }, 2000);
  }, []);

  useEffect(() => {
    if (newMessages.length > 0) {
      setMessages(prev => [...prev, ...newMessages]);
    }
  }, newMessages);

  return (
    <div className="App">
      <Chat messages={messages}/>
    </div>
  );
}

export default App;
