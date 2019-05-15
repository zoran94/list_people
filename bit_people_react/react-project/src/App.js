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

  updateTime = (e) => {
    localStorage.setItem("time", JSON.stringify(new Date()))
  
  }

  timeVisited = ()=>{
     Math.abs(JSON.parse(localStorage.getItem("time")) - new Date());

  }

  countGender = () => {
    var male = 0;
    var female =0;
      this.state.users.map(user => {
      user.gender === "female" ? female++: male++
  
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
        <Footer />
      </>
    );
  }
}


export default App;
