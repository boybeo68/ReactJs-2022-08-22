import React, {useEffect, useState, useRef} from 'react';
import {Container} from 'react-bootstrap';
import {MessageBox, MessageList, Input, Button} from 'react-chat-elements';
import Menu from '../components/Menu2';
import {db, auth} from '../config/firebase';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';
import io from 'socket.io-client';

export default function Chat() {
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [messages, setmessages] = useState([]);
  const [inputValue, setinputValue] = useState('');
  const [user] = useAuthState(auth);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        messages.push({
          ...doc.data(),
          id: doc.id,
          position: doc.data().uid === user.uid ? 'right' : 'left',
        });
      });
      setmessages(messages);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    scrollToBottom();
    console.log(messages);
  }, [messages]);

  async function sendMessage() {
    try {
      await addDoc(collection(db, 'messages'), {
        uid: user.uid,
        text: inputValue.trim(),
        timestamp: serverTimestamp(),
        position: 'right',
        type: 'text',
        title: 'Other',
      });
      setinputValue('');
      inputRef.current.value = '';
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Menu />
      <div className='chat-wrap'>
        <div className='wrap'>
          <MessageList
            className='message-list'
            // lockable={true}
            toBottomHeight={'100%'}
            dataSource={messages}
          />
          <div ref={messagesEndRef} className='end'></div>
        </div>

        <Input
          value={inputValue}
          referance={inputRef}
          defaultValue={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          placeholder='Type here...'
          multiline={true}
          rightButtons={
            <Button text={'Send'} onClick={sendMessage} title='Send' />
          }
        />
      </div>
    </Container>
  );
}
