import React, { Component } from 'react';
import {Motion, StaggeredMotion, spring} from 'react-motion';
import { Input, Balloon, Icon } from '@icedesign/base';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import './Header.scss';

const MENUS = [
  {
    name: '最新',
    path: '#',
  },
  {
    name: '收藏',
    path: '#',
  },
  // {
  //   name: '社区',
  //   children: [
  //     {
  //       name: '知乎专栏',
  //       path: 'https://zhuanlan.zhihu.com/ice-design',
  //     },
  //     {
  //       name: '万能群',
  //       path:
  //         require('./images/ice-group.png'),
  //     },
  //   ],
  // },
];

const data = [
  '全部',
  'CSS',
  'DB',
  'Flutter',
  'Java',
  'JS',
  'Mini Programs',
  'React',
  'Spring',
];

/**
 * <ButtonGroup />
 */
const ButtonGroup = (props) => <div className="button-group" style={props.style}>{props.children}</div>;

/**
 * <Button />
 */
const Button = (props) => <button className='button' style={props.style} onClick={props.onClick}>{props.children}</button>;

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    }
  }

  renderBalloonContent = (menu) => {
    return (
      <Menu.Item key={menu.name}>
        <Balloon
          className="header-balloon-content"
          closable={false}
          triggerType="click"
          trigger={
            <a>
              {menu.name}{' '}
              <Icon
                size="xxs"
                type="arrow-down-filling"
                className="arrow-down-filling-icon"
              />
            </a>
          }
        >
          {menu.children.map((subMenu, index) => {
            return (
              <a href="#" className="custom-sub-menu" key={index}>
                {subMenu.name}
              </a>
            );
          })}
        </Balloon>
      </Menu.Item>
    );
  };

  renderMenuItem = () => {
    return MENUS.map((menu, index) => {
      if (menu.children) {
        return this.renderBalloonContent(menu);
      }
      return (
        <Menu.Item key={index}>
          <a href={menu.path}>{menu.name}</a>
        </Menu.Item>
      );
    });
  };

  filterClick = () => {
    this.setState({ 
      active: !this.state.active 
    });
  };
  

  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <div className="header-left">
            <Logo />
            <div className="header-navbar">
              <Menu className="header-navbar-menu" mode="horizontal">
                {this.renderMenuItem()}
              </Menu>
              <div className="header-search-input">
                <Input placeholder="搜索..." />
              </div>
            </div>
          </div>
          <div className="header-right">
            <ButtonGroup>
              <Motion
                defaultStyle={{ s: 0.675 }}
                style={{ s: spring(this.state.active ? 1 : 0.675, { stiffness: 330, damping: 14 }) }}
              >
                {interpolatingStyles =>
                  <span className="header-button"  onClick={() => this.filterClick()}>
                    <span className={this.state.active ? 'nav-icon active' : 'nav-icon'}/>
                  </span>
                }
              </Motion>

              <StaggeredMotion
                defaultStyles={[
                  { y: -45, o: 0 },
                  { y: -45, o: 0 },
                  { y: -45, o: 0 },
                  { y: -45, o: 0 },
                  { y: -45, o: 0 },
                  { y: -45, o: 0 },
                  { y: -45, o: 0 },
                  { y: -45, o: 0 },
                  { y: -45, o: 0 },
                ]}
                styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                  return i === 0
                    ? {
                      y: spring(this.state.active ? 0 : -50, { stiffness: 330, damping: 20 }),
                      o: spring(this.state.active ? 1 : 0, { stiffness: 330, damping: 20 }),
                    } : {
                      y: spring(prevInterpolatedStyles[i - 1].y, { stiffness: 330, damping: 20 }),
                      o: spring(prevInterpolatedStyles[i - 1].o, { stiffness: 330, damping: 20 }),
                    };
                })}
              >
                {interpolatingStyles =>
                  <ButtonGroup>
                  {interpolatingStyles.map((style, i) =>
                      <Button
                        key={i}
                        style={{
                          position: 'relative',
                          top: style.y,
                          opacity: style.o,
                          pointerEvents: this.state.active ? 'auto' : 'none',
                        }}
                      >
                        {data[i]}
                      </Button>
                    )}
                  </ButtonGroup>
                }
              </StaggeredMotion>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}
