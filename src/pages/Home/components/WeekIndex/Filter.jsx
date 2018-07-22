import React, { Component } from 'react';
import './Filter.scss';

const data = [
  {
    label: '专业',
    value: [
      '全部',
      'CSS',
      'DB',
      'Flutter',
      'Java',
      'JS',
      'Mini Programs',
      'React',
      'Spring',
    ],
  }
];

export default class Filter extends Component {
  static displayName = 'Filter';

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleClick = (value) => {
    console.log(value);
    this.setState({
      activeIndex: value
    });
  };

  render() {
    const { activeIndex } = this.state;
    return (
        <div style={styles.filterContent} className='filterContent'>
          {data.map((item, index) => {
            const lastItem = index === data.length - 1;
            const lastItemStyle = lastItem ? { marginBottom: 0 } : null;
            return (
              <div
                style={{ ...styles.filterItem, ...lastItemStyle }}
                key={index}
                className="filterItem"
              >
                <div style={styles.filterList} className="filterList">
                  {item.value.map((text, idx) => {
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
          })}
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
