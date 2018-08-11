import React, { Component } from 'react';
import './Filter.scss';
import config from './../../../../const.js';

const data = config.TAGS;

export default class Filter extends Component {
  static displayName = 'Filter';

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleClick = (value) => {
    this.setState({
      activeIndex: value
    });
    this.props.onChange(value);
  };

  render() {
    const { activeIndex } = this.state;
    return (
        <div style={styles.filterContent} className='filterContent'>
          <div style={styles.filterList} className="filterList">
            {data.map((text, idx) => {
              const activeStyle =
                activeIndex === idx ? styles.active : null;
              return (
                <span
                  onClick={() => this.handleClick(idx)}
                  style={{ ...activeStyle }}
                  className="filterText"
                  key={idx}
                >
                  {text}
                </span>
              );
            })}
          </div>
        </div>
    );
  }
}

const styles = {
  filterContent: {
    padding: '75px 0 20px ',
    color: '#fff',
  },
  filterItem: {
    display: 'flex',
    alignItems: 'center',
    height: '28px',
    marginBottom: '20px',
  },
  filterLabel: {
    width: '60px',
    fontSize: '15px',
    fontWeight: '450',
  },
  active: {
    minWeight: '60px',
    background: '#2784fc',
    color: '#fff',
  },
};
