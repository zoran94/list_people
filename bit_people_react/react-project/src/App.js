import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
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

        this.setState({ users: myUsers });
        // console.log(this.state);
      })
  }


  render() {
    const user = this.state.users;

    if (!user.length) {
      return (<h2>Loading..</h2>)
    }

    return (
      <>
        <Header />
        <UserInfo users={this.state.users} />
        <Footer />
      </>
    );
  }
}

export default App;
