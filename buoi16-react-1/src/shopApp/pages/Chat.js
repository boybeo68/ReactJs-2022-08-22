import React, {useState, useEffect, useRef} from 'react';
import {Container} from 'react-bootstrap';
import Menu from '../components/Menu2';
import {MessageList, Input, Button} from 'react-chat-elements';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, db} from '../config/firebase';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

export default function Chat() {
  const [messages, setmessages] = useState([]);
  const [user] = useAuthState(auth);
  const [inputValue, setinputValue] = useState('');
  const inputRef = useRef(null);
  const endListRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unSub = onSnapshot(q, (querySnapsphot) => {
      let message = [];
      querySnapsphot.forEach((doc) => {
        message.push({
          ...doc.data(),
          id: doc.id,
          position: doc.data().uid === user.uid ? 'right' : 'left',
        });
      });
      setmessages(message);
    });
    return () => unSub();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    endListRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  async function sendMessage() {
    try {
      await addDoc(collection(db, 'messages'), {
        uid: user.uid,
        text: inputValue.trim(),
        timestamp: serverTimestamp(),
        position: 'right',
        type: 'text',
        title: user.email,
      });
      inputRef.current.value = '';
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Container>
      <Menu></Menu>
      <div className='wrap-chat'>
        <div className='chat-list'>
          <MessageList
            className='message-list'
            lockable={true}
            toBottomHeight={'100%'}
            dataSource={messages}
          />
          <div ref={endListRef} className='end'></div>
        </div>

        <Input
          referance={inputRef}
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
