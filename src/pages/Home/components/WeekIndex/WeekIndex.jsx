/* eslint react/jsx-no-bind:0 */
import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Loading } from "@icedesign/base";
import './WeekIndex.scss';
// import Filter from './Filter';
// import MainPost from './MainPost';
// import Posts from './Posts';
const Filter = Loadable({
  loader: () => import(/* webpackChunkName: "Filter" */'./Filter'),
  loading: Loading,
  delay: 300,
});
const MainPost = Loadable({
  loader: () => import(/* webpackChunkName: "MainPost" */'./MainPost'),
  loading: Loading,
  delay: 300
});
const Posts = Loadable({
  loader: () => import(/* webpackChunkName: "Posts" */'./Posts'),
  loading: Loading,
  delay: 300
});

export default class WeekIndex extends Component {
  static displayName = 'WeekIndex';

  constructor(props) {
    super(props);
    this.state = {
      tag: null,
    };
  }

  // header搜索框传值
  // componentWillReceiveProps = (nextProps) => {
  //   this.setState({ value: nextProps.value});
  // }

  onTagChange = (tag) => {
    this.setState({ tag: tag});
  }

  render() {

    return (
      <div style={styles.wrapperContainer}>
        {/* <div style={styles.bgImage2} /> */}
        <div style={styles.wrapper}>
          {/* <div style={styles.bgImage}>
            <div style={styles.bgImageMask} />
          </div> */}
          <MainPost/>
          <div className='wrapperBody'>
            
            <Filter onChange={this.onTagChange}/>
            
            <Posts tag={this.state.tag} value={this.props.value} mtag={this.props.mtag} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapperContainer: {
    // marginBottom: -400,
    // height: 750 + 400,
    position: 'relative',
  },
  bgImage2: {
    width: 1400,
    // height: 782,
    borderRadius: 782 / 2,
    background:
      'linear-gradient(135deg, rgba(94,136,255,1) 0%,rgba(111,48,254,1) 100%)',
    transform: 'rotate(-45deg)',
    boxShadow: '2px 2px 60px rgba(0,0,0,0.06)',
    position: 'absolute',
    left: '35%',
    bottom: 550,
    zIndex: 1,
  },
  wrapper: {
    // height: 750,
    backgroundColor: '#f6f6f6',
    position: 'relative',
    width: '100%',
  },
  softwareIntro: {
    position: 'absolute',
    left: '5%',
    paddingTop: '230px',
    zIndex: 3,
  },
  title: {
    fontSize: 46,
    color: '#fff',
    fontWeight: 500,
    lineHeight: '66px',
    textShadow: '0 0 3px rgba(0,0,0,0.3)',
    marginBottom: 16,
  },
  slogan: {
    fontSize: 24,
    color: '#fff',
    lineHeight: '34px',
    textShadow: '0 0 3px rgba(0,0,0,0.3)',
  },
  softwareDetail: {
    paddingTop: 24,
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    fontSize: 16,
    fontWeight: 300,
    width: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: '#fff',
  },
  version: {
    width: 80,
    lineHeight: '20px',
    textAlign: 'center',
  },
  history: {
    width: 80,
    lineHeight: '20px',
    textAlign: 'center',
  },
  bgImageMask: {
    width: '100%',
    height: 750,
    background:
    'linear-gradient(135deg, rgba(94,136,255,0.85) 0%,rgba(111,48,254,0.85) 100%)' /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */,
  },
};
