import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer";
import './App.css';
import * as data from "./services/fetchDataUsers";
import Main from "./components/Main";
import Search from "./components/Search"
import isSensitive from "./services/caseInsensitive"
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      usersSearch: "",
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
    data.fetchData()
      .then((myUsers) => {
        this.setState({
          users: myUsers,
          usersSearch: myUsers,
        });
      })

  }

  onSearchInput = (e) => {
    const inputValue = e.target.value;
    const filteredUsers = this.state.users.filter((user) => {
      return user.fullName.includes(inputValue)
    })
    
    this.setState({
      usersSearch: filteredUsers,
      
    });
  }

  componentDidMount() {
    data.fetchData()
      .then((myUsers) => {
        this.setState({
          users: myUsers,
          usersSearch: myUsers
        });
      })
  }

  render() {
   // console.log(this.state.users)
    return (
      <>
        <Header onChangeLayout={this.handleClick} onReload={this.reloadClick} />
        <Search onSearch={this.onSearchInput} />
        <Main users={this.state.usersSearch} listViewInUse={this.state.listView} />
        <Footer />
      </>
    );
  }
}


export default App;
