import React, {useEffect, useState} from 'react';
import Chat from "./components/Chat/Chat";
import NewMessForm from "./components/NewMessForm/NewMessForm";
import { MessagesType } from "./types";
import axios from "axios";

const url = 'http://146.185.154.90:8000/messages';

function App() {
  const [messages, setMessages] = useState<MessagesType[]>([]);
  const [newMessages, setNewMessages] = useState<MessagesType[]>([]);
  const [message, setMessage] = useState({author: '', message: ''});

  useEffect(() => {
    let lastDate = '';

    const fetchData = async () => {
      const response = await axios.get<MessagesType[]>(url + lastDate);
      const data = response.data;

      const promises = data.map(async post => {
        return {
          _id: post._id,
          message: post.message,
          author: post.author,
          datetime: post.datetime,
        };
      });

      const posts = await Promise.all(promises);

      if (lastDate.length === 0) {
        setMessages([...posts]);
      }

      if (lastDate.length > 0) {
        setNewMessages([...posts]);
      }

      if (data.length > 0) {
        lastDate = '?datetime=' + data[data.length - 1].datetime;
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
  }, [newMessages]);

  const onChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setMessage(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const addMessage = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new URLSearchParams();
    data.set('message', message.message);
    data.set('author', message.author);

    axios.post(url, data).then();
  };

    return (
      <div className="App">
        <NewMessForm onChanges={onChanges} onAdd={addMessage}/>
        <Chat messages={messages}/>
      </div>
    );
  }

export default App;