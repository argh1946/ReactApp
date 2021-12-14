import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Components/Test';
import Search from './Components/Search';
import PropTest from './Components/PropTest';
import Posts from './Components/Posts';
import { Button, DatePicker, notification, Progress, Switch } from 'antd';
import TsTest from './Components/TsTest';




function App() {
  const onChange = () => {
    openNotification();
  }


  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <div className="App">

      
      <Posts />


    </div>
  );
}

export default App;
