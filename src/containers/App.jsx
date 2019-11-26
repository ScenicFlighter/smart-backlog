import React from 'react';
import { connect } from 'react-redux';

import { Button } from "shards-react";

import BacklogApis from '../links/backlog';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async handleRequestAccessToken() {
    const response = await BacklogApis.requestAccessToken("test");
    console.log(response);
  }

  render() {
    return (
      <>
      <Button onClick={this.handleRequestAccessToken}>Backlogログイン</Button>
      <Button onClick={BacklogApis.requestOAuthCode}>Backlogログイン</Button>
</>
    );
  }
}

let mapStateToProps = state => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return {};
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;