import React, {useState} from 'react';

export default function TodoInput(props) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            props.addTodoProps(inputValue);
            setInputValue('');
          }
        }}
        value={inputValue}
        type='text'
        name=''
        id=''
      />
      <button
        onClick={() => {
          props.addTodoProps(inputValue);
          setInputValue('');
        }}
      >
        Add todo
      </button>
    </div>
  );
}
