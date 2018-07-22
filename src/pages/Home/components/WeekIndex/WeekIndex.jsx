/* eslint react/jsx-no-bind:0 */
import { Menu, Button, Feedback } from '@icedesign/base';
import React, { Component } from 'react';
import Filter from './Filter';
import MainPost from './MainPost';
import Posts from './Posts';

const SplitButton = Button.Split;

export default class WeekIndex extends Component {
  static displayName = 'WeekIndex';

  constructor(props) {
    super(props);
    const ua = navigator.userAgent;
    let osType = 'darwin-x64-prod'; // mac for default
    if (/Mac/.test(ua)) {
      // this is macOS ha
    } else if (/Windows/.test(ua)) {
      osType = 'win-x64-prod';
    }
    this.state = {
      osType,
      loading: false,
      data: {
        'darwin-x64-prod': {
          name: 'iceworks',
          description: 'ICE Desktop Application.',
          install:
            'http://iceworks.oss-cn-hangzhou.aliyuncs.com/mac/Iceworks-1.6.2.dmg',
          version: '1.6.2',
          releaseDate: '2018-04-23',
        },
        'win-x64-prod': {
          name: 'iceworks',
          description: 'ICE Desktop Application.',
          install:
            'http://iceworks.oss-cn-hangzhou.aliyuncs.com/win/Iceworks-setup-1.6.2.exe',
          version: '1.6.2',
          releaseDate: '2018-04-23',
        },
      },
    };
  }

  changeSelectMenu = (select) => {
    this.setState({ osType: select });
  };

  download = () => {
    const { data, loading, osType } = this.state;
    if (loading) {
      Feedback.toast.success('请稍等');
    } else {
      // 开始下载
      location.href = data[osType].install;
    }
  };

  render() {
    const { data, loading, osType } = this.state;
    const ver = loading ? '0' : data[osType].version;

    return (
      <div style={styles.wrapperContainer}>
        <div style={styles.bgImage2} />
        <div style={styles.wrapper}>
          {/* <div style={styles.bgImage}>
            <div style={styles.bgImageMask} />
          </div> */}
          <div style={styles.wrapperBody}>
            <Filter/>
            <MainPost/>
            <Posts/>
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
  wrapperBody: {
    maxWidth: 1190,
    // height: 750,
    position: 'relative',
    margin: '0 auto',
    zIndex: 2,
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
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: 750,
    backgroundSize: 'cover',
    backgroundImage: `url(${require('./images/TB1eoehpKOSBuNjy0FdXXbDnVXa-3798-1500.jpg')})`,
  },
  bgImageMask: {
    width: '100%',
    height: 750,
    background:
    'linear-gradient(135deg, rgba(94,136,255,0.85) 0%,rgba(111,48,254,0.85) 100%)' /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */,
  },
};