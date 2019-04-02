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
      listView: true,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => {
      return { listView: !state.listView }
    })
  }

  updateClick =() => {
    localStorage.setItem("time", JSON.stringify(new Date()))
    data.fetchData();
  }





  componentDidMount() {
    data.fetchData()
      .then((myUsers) => {
        this.setState({ users: myUsers });
      
      })

      if(localStorage.getItem("listView")) {
        this.setState({
          listView: JSON.parse(localStorage.getItem("listView"))
        })
      }
  }


  render() {
    const user = this.state.users;
    if (!user.length) {
      return (<h2>Loading..</h2>)
    }

    

    return (
      <>
        <Header onChangeLayout={this.handleClick}  reload={this.updateClick}/>
        <Main users={this.state.users}  listViewInUse={this.state.listView} />
        <Footer />
      </>
    );
  }
}

export default App;
