import React, { Component } from 'react';
import NormalFooter from '../../components/NormalFooter';
import Header from '../../components/Header';
import WeekIndex from './components/WeekIndex';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page" style={styles.homepage}>
        <Header />
        <WeekIndex />
        <div></div>
        <NormalFooter />
      </div>
    );
  }
}

const styles = {
  homepage: {
    background: '#fff',
    overflow: 'hidden',
  },
};
