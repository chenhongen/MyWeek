import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {Motion, StaggeredMotion, spring} from 'react-motion';
import { Button, Search, Balloon, Icon } from '@icedesign/base';
import Menu from '@icedesign/menu';
import FoundationSymbol from 'foundation-symbol';
import Logo from '../Logo';
import './Header.scss';
import config from './../../const';

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

const data = [...config.TAGS, '热门', '收藏'];

/**
 * <ButtonGroup />
 */
const ButtonGroup = (props) => <div className="button-group" style={props.style}>{props.children}</div>;

/**
 * <Button />
 */
// const Button = (props) => <button className='button' style={props.style} onClick={props.onClick}>{props.children}</button>;

@withRouter
class Header extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      dataSource: [
        // {
        //   label: "Recent",
        //   value: "Recent",
        //   disabled: true
        // },
        // {
        //   label: "连衣裙",
        //   value: "连衣裙",
        //   disabled: false
        // },
        // {
        //   label: "墨镜",
        //   value: "墨镜",
        //   disabled: false
        // }
      ],
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
  
  onChange(value) {
    this.setState({
      value
    });
    this.props.changeValue(value);
  }

  // mobile - tag切换
  onTagChange = (e) => {
    this.props.changeTagValue(e.target.getAttribute("data-index"));
    this.filterClick();
  }

  // mobile - search
  onMiniSearch = () => {
    this.props.history.push("/search");
  }

  // 点击search按钮和在选中项上回车时触发
  // 参数为obj：
  // {
  //    filter: [],
  //    key: xx
  // }
  onSearch(obj) {
    console.log(obj);
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <div className="header-left">
            <Logo />
            <div className="header-navbar">
              <Search
                inputWidth={250}
                value={this.state.value}
                onSearch={this.onSearch.bind(this)}
                onChange={this.onChange.bind(this)}
                dataSource={this.state.dataSource}
                placeholder=" 兴趣..."
                name="textName"
                searchText=""
                type="normal"
                className="header-search-input"
                value={this.state.value}
              />
              
              <Menu className="header-navbar-menu" mode="horizontal">
                {this.renderMenuItem()}
              </Menu>
            </div>
          </div>
          <div className="header-right">
            <Button size="large" className="header-right-btn" onClick={this.onMiniSearch}>
                  <FoundationSymbol size="large" type='search' />
            </Button>
            
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
                  { y: -35, o: 0 },
                  { y: -35, o: 0 },
                  { y: -35, o: 0 },
                  { y: -35, o: 0 },
                  { y: -35, o: 0 },
                  { y: -35, o: 0 },
                  { y: -35, o: 0 },
                  { y: -35, o: 0 },
                  { y: -35, o: 0 },
                  { y: -35, o: 0 },
                  { y: -35, o: 0 },
                ]}
                styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                  return i === 0
                    ? {
                      y: spring(this.state.active ? 0 : -40, { stiffness: 330, damping: 20 }),
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
                        className='button'
                        key={i}
                        data-index={i}
                        style={{
                          position: 'relative',
                          top: style.y,
                          opacity: style.o,
                          pointerEvents: this.state.active ? 'auto' : 'none',
                        }}
                        onClick={this.onTagChange}
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

export default Header;