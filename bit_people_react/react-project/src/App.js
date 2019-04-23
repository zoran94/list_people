import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer";
import './App.css';
import * as data from "./services/fetchDataUsers";
import Main from "./components/Main";
import Search from "./components/Search";
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
      time: parseInt(new Date().getTime() / 1000).toFixed(0),
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
    this.updateTime();
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

  updateTime = () => {
    const newTime = parseInt(new Date().getTime() / 1000).toFixed(0);
    const dif = newTime - this.state.time;
    this.state.time = newTime
    if (dif < 60) {
      return "" + dif + " seconds"
    }

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
    //console.log(users);
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
      
        <Header onChangeLayout={this.handleClick} onReload={this.reloadClick} />
        <Switch>
          <Route exact path="/"  render={()=>(<Main users={this.state.usersSearch} onSearchInput={this.onSearchInput} listViewInUse={this.state.listView} />)} /> 
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer time={this.updateTime()} />
      </>
    );
  }
}


export default App;
