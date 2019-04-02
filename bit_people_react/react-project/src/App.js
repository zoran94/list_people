import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import * as data from "./services/fetchDataUsers"

import Main from "./components/Main"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      usersSearch: [],
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
        this.setState({ users: myUsers });
      })

  }


  onSearchInput = (e) => {
    const inputValue = e.target.value;
    const filteredUsers = this.state.users.filter((user) => {
      return user.name.includes(inputValue)
    })
    this.setState({
      usersSearch: filteredUsers
    })

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


    const user = this.state.users;
    if (!user.length) {
      return (<h2>Loading..</h2>)
    }
    return (
      <>
        <Header onChangeLayout={this.handleClick} onReload={this.reloadClick} />
        <div className="searchDiv">
          <input type="text" className="search" placeholder="search Users" onChange={this.onSearchInput} />
        </div>
        <Main users={this.state.usersSearch} listViewInUse={this.state.listView} />
        <Footer />
      </>
    );
  }
}

// if (localStorage.getItem("listView")) {
//   this.setState({
//     listView: JSON.parse(localStorage.getItem("listView"))


//   })
// }
// updateClick = () => {
//   localStorage.setItem("time", JSON.stringify(new Date()))
//   data.fetchData();
// }


export default App;
