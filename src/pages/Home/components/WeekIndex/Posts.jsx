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
        username: '组织/个人',
        title: '标题',
        url: require('./images/TB13xyECxGYBuNjy0FnXXX5lpXa-484-488.png'),
        operation: '查看',
        description:
          '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
      },
      {
        id: 2,
        username: '组织/个人',
        title: '标题',
        url: require('./images/TB13xyECxGYBuNjy0FnXXX5lpXa-484-488.png'),
        operation: '解决方式链接',
        description:
          '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
      },
      {
        id: 3,
        username: '组织/个人',
        title: '标题',
        url: require('./images/TB13xyECxGYBuNjy0FnXXX5lpXa-484-488.png'),
        operation: '查看',
        description:
          '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
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
        console.log(e.target.getAttribute("data-id"));
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
                                src={item.url}
                                alt="username"
                                />
                                <br />
                                <span>{item.username}</span>
                            </div>
                            </Col>
                            <Col
                                xxs="24"
                                s="18"
                                data-id={item.id}
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
                                <span data-id={item.id} style={styles.itemStatusText}> {item.title} </span>
                            </span>
                            <div
                                data-id={item.id}
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
                                    <Icon type="favorite" data-id={item.id} />
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