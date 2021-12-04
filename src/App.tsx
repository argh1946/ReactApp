import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Components/Test';
import Search from './Components/Search';
import PropTest from './Components/PropTest';
import Posts from './Components/Posts';
import { Button, DatePicker, notification, Progress, Switch } from 'antd';




function App() {
const onChange = ()=>{
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
<Search/>

      <Button type="primary">Button</Button>
      <DatePicker />
      <Switch defaultChecked onChange={onChange} />
      <Progress percent={50} status="active" />
 <Posts/>

      
       
       
       
       
    </div>
  );
}

export default App;
