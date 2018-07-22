import React, { Component } from 'react';
import { Button, Grid, Icon } from '@icedesign/base';
import { enquireScreen } from 'enquire-js';
import './Posts.scss';
import IceLabel from '@icedesign/label';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;

const dataSource = () => {
    return [
      {
        id: 1,
        username: 'QCon',
        title: '美团配送系统架构演进实践',
        url: 'https://mp.weixin.qq.com/s/m7koYfAVAyvN55lQjhD4dw',
        cover: require('./images/TB13xyECxGYBuNjy0FnXXX5lpXa-484-488.png'),
        description:
          '如何在业务高速增长、可用性越来越高的背景下实现系统架构的快速有效升级？',
      },
      {
        id: 2,
        username: '人人都是产品经理',
        title: '你看不懂的美团版图，是帝国的拼图游戏',
        url: 'https://mp.weixin.qq.com/s/IAb1XSYr61AfIgkEYObIbg',
        cover: require('./images/TB13xyECxGYBuNjy0FnXXX5lpXa-484-488.png'),
        description:
          '美团现在的业务越发多元，也让人越发的看不懂了。',
      },
      {
        id: 3,
        username: '美团技术团队',
        title: 'Picasso：开启大前端的未来',
        url: 'https://mp.weixin.qq.com/s/lqyo7YzQ_DkBnA3O271rdQ',
        cover: require('./images/TB13xyECxGYBuNjy0FnXXX5lpXa-484-488.png'),
        description:
          'Picasso是大众点评移动研发团队自研的高性能跨平台动态化框架，经过两年多的孕育和发展，目前在美团多个事业群已经实现了大规模的应用。',
      },
    ];
  };
  
  const { Row, Col } = Grid;

export default class Posts extends Component {
    static displayName = 'Posts';

    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
        };
    }

    componentDidMount() {
        this.enquireScreenRegister();
    }

    enquireScreenRegister = () => {
        const mediaCondition = 'only screen and (max-width: 720px)';
    
        enquireScreen((mobile) => {
          this.setState({
            isMobile: mobile,
          });
        }, mediaCondition);
    };
    
    startToggle = (e) => {
        console.log(e.target.getAttribute("data-id"));
    }

    linkPost = (e) => {
        window.open(e.target.getAttribute("data-url"), "_blank");
    }

    render() {
        const data = dataSource();
        const { isMobile } = this.state;
        return (
            <div className="postContainer">
                {/* <ScrollOverPack always={false} playScale={0.5} style={styles.features}>
                <QueueAnim key="anim" type="bottom"> */}
                    {data.map((item, index) => {
                    return (
                        <div style={styles.row} key={index}>
                        <Row wrap>
                            <Col xxs="24" s="2">
                            <div style={styles.imageWrap}>
                                <img
                                style={styles.image}
                                src={item.cover}
                                alt="username"
                                />
                                <br />
                                <span>{item.username}</span>
                            </div>
                            </Col>
                            <Col
                                xxs="24"
                                s="18"
                                data-url={item.url}
                                style={{
                                    ...styles.itemBody,
                                    ...(isMobile && styles.mobileContentCenter),
                                }}
                                onClick={this.linkPost.bind(this)}
                            >
                            <span
                                // style={
                                // item.validate
                                //     ? styles.itemStatusSuccess
                                //     : styles.itemStatusFail
                                // }
                            >
                                <IceLabel style={{backgroundColor: '#108ee9'}}>Java</IceLabel>
                                <span data-url={item.url} style={styles.itemStatusText}> {item.title} </span>
                            </span>
                            <div
                                data-url={item.url}
                                style={{
                                ...styles.itemDescription,
                                ...(isMobile && styles.removeContentWidth),
                                }}
                            >
                                {item.description}
                            </div>
                            </Col>
                            <Col xxs="24" s="4">
                                <div style={styles.operationWrap} onClick={this.startToggle.bind(this)}>
                                    {/* <a href={item.url} target="_blank">
                                    {item.operation}
                                    </a> */}
                                    {/* <Icon type="favorite" data-id={item.id} /> */}
                                </div>
                            </Col>
                        </Row>
                        </div>
                    );
                    })}
                  {/* </QueueAnim>
                </ScrollOverPack> */}
            </div>
        );
    }
}

const styles = {
    row: {
      backgroundColor: '#fff',
      marginTop: '32px',
      padding: '10px 20px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.07)',
    },
    imageWrap: {
      textAlign: 'center',
    },
    image: {
      width: '40px',
      height: '40px',
      borderRadius: '40px',
      marginBottom: '6px',
    },
    itemBody: {
      padding: '10px 20px 0',
    },
    itemDescription: {
      color: '#666',
      marginTop: '20px',
      maxWidth: '600px',
    },
    operationWrap: {
    //   marginTop: '40px',
      textAlign: 'right',
      color: '#ff6',
    },
    itemFooter: {
      textAlign: 'center',
      color: '#666',
      marginTop: '40px',
    },
    nextBtn: {
      marginTop: '40px',
    },
    itemStatusSuccess: {
      color: '#1be25c',
    },
    itemStatusFail: {
      color: '#f33',
      fontSize: '16px',
    },
    itemStatusText: {
      marginLeft: '10px',
    },
    mobileContentCenter: {
      textAlign: 'center',
      padding: '20px 0 0 0',
    },
    removeContentWidth: {
      maxWidth: 'none',
    },
  };