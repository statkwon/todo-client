import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'App.scss';
import Header from 'components/common/Header.jsx';

function App() {
  const navigate = useNavigate();
  const clickHandler = () => navigate('/');

  return (
    <div className="App">
      <Header clickHandler={clickHandler} />
    </div>
  );
}

export default App;
