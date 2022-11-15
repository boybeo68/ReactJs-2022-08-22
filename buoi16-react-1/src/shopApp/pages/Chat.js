import React from 'react';
import {Container} from 'react-bootstrap';
import Menu from '../components/Menu2';
import {MessageList, Input, Button} from 'react-chat-elements';

export default function Chat() {
  return (
    <Container>
      <Menu></Menu>
      <div className='wrap-chat'>
        <div className='chat-list'>
          <MessageList
            className='message-list'
            lockable={true}
            toBottomHeight={'100%'}
            dataSource={[
              {
                position: 'left',
                type: 'text',
                title: 'Kursat',
                text: 'Give me a message list example !',
              },
              {
                position: 'right',
                type: 'text',
                title: 'Emre',
                text: "That's all.",
              },
              {
                position: 'left',
                type: 'text',
                title: 'Kursat',
                text: 'Give me a message list example !',
              },
              {
                position: 'right',
                type: 'text',
                title: 'Emre',
                text: "That's all.",
              },
              {
                position: 'left',
                type: 'text',
                title: 'Kursat',
                text: 'Give me a message list example !',
              },
              {
                position: 'right',
                type: 'text',
                title: 'Emre',
                text: "That's all.",
              },
              {
                position: 'left',
                type: 'text',
                title: 'Kursat',
                text: 'Give me a message list example !',
              },
              {
                position: 'right',
                type: 'text',
                title: 'Emre',
                text: "That's all.",
              },
              {
                position: 'left',
                type: 'text',
                title: 'Kursat',
                text: 'Give me a message list example !',
              },
              {
                position: 'right',
                type: 'text',
                title: 'Emre',
                text: "That's all.",
              },
            ]}
          />
        </div>

        <Input
          placeholder='Type here...'
          multiline={true}
          rightButtons={
            <Button text={'Send'} onClick={() => {}} title='Send' />
          }
        />
      </div>
    </Container>
  );
}
