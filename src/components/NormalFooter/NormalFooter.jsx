import React, { Component } from 'react';
import IceContainer from '@icedesign/container';

export default class NormalFooter extends Component {
  static displayName = 'NormalFooter';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="normal-footer">
        <IceContainer>
          <div style={{ ...styles.nav, ...styles.pullCenter }}>
            <a href="./" style={styles.navLink}>
              Home
            </a>
            <span href="#" onClick={() => { window.open("http://rebey.cn", "_blank");}} style={styles.navLink}>
              Blog
            </span>
            <span href="#" onClick={() => { window.open("https://github.com/chenhongen/", "_blank");}} style={styles.navLink}>
              Github
            </span>
            <a href="#" style={styles.navLink}>
              About
            </a>
          </div>
          <div style={styles.line} />
          <div style={{ ...styles.copyright, ...styles.pullCenter }}>
            © Copyright 2018. All rights reserved.
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  nav: {
    alignItems: 'center',
    padding: '10px 0',
  },
  pullCenter: {
    textAlign: 'center',
  },
  pullRight: {
    textAlign: 'right',
  },
  navLink: {
    marginRight: '20px',
    color: 'rgba(0, 0, 0, 0.7)',
    cursor: 'pointer',
  },
  line: {
    margin: '16px 0',
    borderBottom: '1px solid rgba(120,130,140,.13)',
  },
  copyright: {
    color: '#999',
    fontSize: '12px',
  },
};
