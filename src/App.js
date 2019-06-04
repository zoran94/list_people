import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer";
import './App.css';
import * as data from "./services/fetchDataUsers";
import Main from "./components/Main";
import Loading from "./components/Load";
import About from "./components/About";
import {Switch, Route, Router} from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);

    const cachedUsers = JSON.parse(localStorage.getItem('save'));

    this.state = {
      users: cachedUsers || [],
      usersSearch: cachedUsers || [],
      listView: JSON.parse((localStorage.getItem("state"))),
      time: localStorage.setItem("time", Date.now())
    }

    this.handleClick = this.handleClick.bind(this);
    this.reloadClick = this.reloadClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      localStorage.setItem("state", !prevState.listView)
      return { listView: !prevState.listView }
    })
  }

  reloadClick() {
    this.fetchUsers();
    this.updateTime()
  }

  onSearchInput = (e) => {
    const inputValue = e.target.value;
    const filteredUsers = this.state.users.filter((user) => {
      return user.fullName.includes(inputValue.toLowerCase())
    })

    this.setState({
      usersSearch: filteredUsers,
    });
  }

  updateTime = (e) => {
    let lastUpdate = localStorage.getItem("time");
    let nowTime = Date.now();
    let pastTime = nowTime - lastUpdate;

    let sec, min, hour;
    sec = Math.floor(pastTime/1000);
    min = Math.floor(sec/60);
    hour = Math.floor(min/24);

    if(sec >= 0 && sec <= 60){
      return `Last update: ${sec} seconds ago`
    }else if(min > 0 && min <= 60){
      return `Last update: ${min} minutes ago`
    }else if(hour > 0 && hour <= 1){
      return `Last update: ${hour} hours ago `
    }
  }

 

  countGender = () => {
    var male = 0;
    var female =0;
      this.state.users.map(user => {
      user.gender === "female" ? female++ : male++
  
    })
   return <p className="counter"><b>Male: </b>{male} <b>Female: </b>{female}</p>
  }



  componentDidMount() {
    if (this.state.users.length) {
      return;
    }
    this.fetchUsers();
  }

  fetchUsers = () => {
    data.fetchData()
      .then((myUsers) => {
        this.setState({
          users: myUsers,
          usersSearch: myUsers,
        });
        localStorage.setItem("save", JSON.stringify(myUsers))
        this.updateTime();
      })
  }

  render() {
    const users = this.state.users;
    if (!users.length) {
      return (
        <>
          <Header />
          <Loading />
          <Footer />
        </>
      )
    }
    
    return (
      <>
      
        <Header onChangeLayout={this.handleClick} onReload={this.reloadClick} listView={this.state.listView}/>
        <Switch>
          <Route exact path="/"  render={()=>(<Main countGender={this.countGender}  users={this.state.usersSearch} onSearchInput={this.onSearchInput} listViewInUse={this.state.listView} />)} /> 
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer updateTime={this.updateTime}/>
      </>
    );
  }
}


export default App;
