import React from 'react'
import CalendarButton from './calendarButton';
import ToDoList from './todoList';
import Progress from './progress';
import GetHelp from './getHelp';



const Main = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <CalendarButton />
      <ToDoList />
      <Progress />
      <GetHelp />
      
    </>
  );
}

export default Main;