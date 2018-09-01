import React, { Component } from 'react';
// import NormalFooter from '../../components/NormalFooter';
// import Header from '../../components/Header';
// import WeekIndex from './components/WeekIndex';
import Loadable from 'react-loadable';
import { Loading } from "@icedesign/base";

const NormalFooter = Loadable({
  loader: () => import(/* webpackChunkName: "NormalFooter" */'../../components/NormalFooter'),
  loading: Loading,
  delay: 300,
});
const Header = Loadable({
  loader: () => import(/* webpackChunkName: "Header" */'../../components/Header'),
  loading: Loading,
  delay: 300
});
const WeekIndex = Loadable({
  loader: () => import(/* webpackChunkName: "WeekIndex" */'./components/WeekIndex'),
  loading: Loading,
  delay: 300
});

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      tag: null
    };
  }

  changeValue = (value) => {
    this.setState({
      value
    });
  }

  changeTagValue = (tag) => {
    this.setState({
      tag
    });
  }

  render() {
    return (
      <div className="home-page" style={styles.homepage}>
        <Header value={this.state.value} changeValue={this.changeValue} changeTagValue={this.changeTagValue}/>
        <WeekIndex value={this.state.value} mtag={this.state.tag} />
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
