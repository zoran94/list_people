import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import * as data from "./services/fetchDataUsers"
//import UserInfo from './components/UserInfo';
//import UserCard from "./components/userCardInfo";
import Main from "./components/Main"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      listView: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => {
      return { listView: !state.listView }
    })
  }

  componentDidMount() {
    data.fetchData()
      .then((myUsers) => {
        this.setState({ users: myUsers });
      })
  }

  render() {
    const user = this.state.users;
    if (!user.length) {
      return (<h2>Loading..</h2>)
    }

    console.log(this.state.users);

    return (
      <>
        <Header onChangeLayout={this.handleClick} />
        <Main users={this.state.users} listViewInUse={this.state.listView} />
        <Footer />
      </>
    );
  }
}

export default App;
