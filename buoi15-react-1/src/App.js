import logo from './logo.svg';
import './App.css';
const students = [
  {name: 'Tung', age: 20, sex: 1},
  {name: 'Cuong', age: 30, sex: 0},
];
const App = () => {
  return (
    <div className='body'>
      <ul>
        {students.map((item, index) => {
          return <li className='testStyle'>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
