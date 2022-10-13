import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';
import {Container} from 'react-bootstrap';
export const App = () => {
  const [listProject, setlistProject] = useState([
    {name: 'Random number project', path: '/random'},
    {name: 'Todo project', path: '/todo'},
    {name: 'Shop app', path: '/shopApp'},
  ]);

  const navigate = useNavigate();
  const navigateProject = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Container>
        <ul>
          {listProject.map((item, index) => {
            return (
              <li
                onClick={() => {
                  navigateProject(item.path);
                }}
                style={{cursor: 'pointer'}}
                key={index + 'listproject'}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

// export default : khi import có thể đổi tên được
// export const => khi import phải import đúng tên
