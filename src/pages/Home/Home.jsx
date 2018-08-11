import React, { Component } from 'react';
import NormalFooter from '../../components/NormalFooter';
import Header from '../../components/Header';
import WeekIndex from './components/WeekIndex';


export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      value: "1"
    };
  }

  changeValue = (value) => {
    this.setState({
      value
    });
  }

  render() {
    return (
      <div className="home-page" style={styles.homepage}>
        <Header value={this.state.value} changeValue={this.changeValue}/>
        <WeekIndex value={this.state.value}/>
        <div></div>
        <NormalFooter />
      </div>
    );
  }
}

const styles = {
  homepage: {
    // background: '#fff',
    overflow: 'hidden',
  },
};
