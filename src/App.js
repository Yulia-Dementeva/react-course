import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import Friends from "./components/friends/friends";

function App(props) {

  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header></Header>
      <Navbar pr = {props.state}></Navbar>
      <div className='app-wrapper-content'>

        <Route path='/dialogs' render= {() => <Dialogs dialogs = {props.state.dialogsPage.dialogs} messages = {props.state.dialogsPage.messages}></Dialogs>}></Route>
        <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}></Profile>}></Route>
        <Route path='/news' render = {() => <News></News>}></Route>
        <Route path='/music' render = {() => <Music></Music>}></Route>
        <Route path='/settings' render = {() => <Settings></Settings>}></Route>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
