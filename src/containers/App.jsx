import React from 'react';
import { connect } from 'react-redux';

import styles from '../styles/styles.scss';

import {
  UserActions
} from './../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles.blue}>Hello world!</div>
      </div>
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