import React, { Component } from 'react';
import Header from "./components/Header"
import './App.css';
import * as data from "./services/fetchDataUsers"
import UserInfo from './components/UserInfo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    data.fetchData()
      .then((myUsers) => {
        // console.log(myUsers);
        this.setState({ users: myUsers });

      })
  }

  render() {

    return (
      <>
        <Header />
        <UserInfo users={this.state.users} />
      </>
    );
  }
}

export default App;
