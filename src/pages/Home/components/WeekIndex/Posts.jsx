import React, { Component } from 'react';
import { Grid, Icon } from '@icedesign/base';
import IceLabel from '@icedesign/label';
import { enquireScreen } from 'enquire-js';
import { Loading } from '@icedesign/base';
import ReactList from 'react-list';
import axios from 'axios';
import avatar from './images/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png';
import config from './../../../../const.js';

const data = config.TAGS;
const { Row, Col } = Grid;

export default class Posts extends Component {
  static displayName = 'Posts';

  static defaultProps = {
    height: '348px',
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      total: 0,
      isLoading: false,
      pageSize: 4,
      pageNo: 1,
      isMobile: false,
    };
  }

  componentDidMount() {
    this.enquireScreenRegister();
  }

  componentWillReceiveProps(nextProps) {
    var that = this;
    axios.post(`/posts/list`, {
        "criteria": {
          "criterion": [
            {
              "in": true,
              "property": "tags",
              "value": nextProps.tag,
            }
          ],
          "orCriterion": [
            {
              "criterion": [
                {
                  "like": true,
                  "property": "description",
                  "value": nextProps.value,
                }
              ]
            } ,{
              "criterion": [
                {
                  "like": true,
                  "property": "title",
                  "value": nextProps.value,
                }
              ]
            }
          ],
        },
        
        "pageIndex": 1,
        "pageSize": this.state.pageSize
      })
    .then(function (response) {
      if(response.data.message === "SUCCESS") {
        that.setState({
            list: response.data.data.list,
            total: response.data.data.total,
            pageNo: 2,
            isLoading: false,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  enquireScreenRegister = () => {
      const mediaCondition = 'only screen and (max-width: 720px)';

      enquireScreen((mobile) => {
        this.setState({
          isMobile: mobile,
        });
      }, mediaCondition);
  };

  // fetchDataMethod = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(dataSource);
  //     }, 500);

  //   });
  // };

  fetchData = () => {
    if(this.state.total > 0 && this.state.total === this.state.list.length)
      return;
    this.setState({
      isLoading: true,
    });
    var that = this;
    // this.fetchDataMethod().then((res) => {
    //   if (res.status === 'SUCCESS') {
    //     this.setState((prevState) => {
    //       return {
    //         list: [...prevState.list, ...res.data.list],
    //         total: res.data.total,
    //         pageNo: prevState.pageNo + 1,
    //         isLoading: false,
    //       };
    //     });
    //   }
    // });
    var params = new URLSearchParams();
    // params.append('vinCode', value);
    axios.post(`/posts/list`, {
        "pageIndex": this.state.pageNo,
        "pageSize": this.state.pageSize
      })
    .then(function (response) {
      if(response.data.message === "SUCCESS") {
        that.setState((prevState) => {
          return {
            list: [...prevState.list, ...response.data.data.list],
            total: response.data.data.total,
            pageNo: prevState.pageNo + 1,
            isLoading: false,
          };
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  startToggle = (e) => {
    console.log(e.target.getAttribute("data-id"));
  }

  linkPost = (e) => {
      window.open(e.target.getAttribute("data-url"), "_blank");
  }

  renderItem = (index, key) => {
    const { isMobile } = this.state;
    const datum = this.state.list[index];
    return datum ? (
      // <div key={key} style={styles.listItem}>
      //   <img src={avatar} style={styles.avatar} />
      //   <div style={styles.info}>
      //     <div style={styles.infoItem}>{this.state.list[index].name}</div>
      //     <div>This is the {index + 1} row</div>
      //   </div>
      // </div>
      <div style={styles.row} key={index}>
        <Row wrap>
            <Col xxs="24" s="2">
            <div style={styles.imageWrap}>
                <img
                style={styles.image}
                src={avatar}
                alt="username"
                />
                <br />
                <span>{datum.userName}</span>
            </div>
            </Col>
            <Col
                xxs="24"
                s="18"
                data-url={datum.url}
                style={{
                    ...styles.itemBody,
                    ...(isMobile && styles.mobileContentCenter),
                }}
                onClick={this.linkPost.bind(this)}
            >
            <span
                // style={
                // datum.validate
                //     ? styles.itemStatusSuccess
                //     : styles.itemStatusFail
                // }
            >
                <IceLabel style={{backgroundColor: '#108ee9'}}>{data[datum.tags]}</IceLabel>
                <span data-url={datum.url} style={styles.itemStatusText}> {datum.title} </span>
            </span>
            <div
                data-url={datum.url}
                style={{
                ...styles.itemDescription,
                ...(isMobile && styles.removeContentWidth),
                }}
            >
                {datum.description}
            </div>
            </Col>
            <Col xxs="24" s="4">
                <div style={styles.operationWrap} onClick={this.startToggle.bind(this)}>
                    {/* <a href={datum.url} target="_blank">
                    {datum.operation}
                    </a> */}
                    {/* <Icon type="favorite" data-id={datum.id} /> */}
                </div>
            </Col>
        </Row>
      </div>
    ) : (
      ''
    );
  };

  handleScroll = () => {
    const lastVisibleIndex = this.refs.list.getVisibleRange()[1];
    // 提前 5条 预加载
    if (
      lastVisibleIndex >= this.state.pageNo * this.state.pageSize - 5 &&
      !this.state.isLoading
    ) {
      this.fetchData();
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Loading
        shape="fusion-reactor"
        color="#66AAFF"
        style={{ display: 'block' }}
        visible={this.state.isLoading}
      >
        <div
          style={{ height: this.props.height, overflow: 'auto' }}
          onScroll={this.handleScroll}
        >
          <ReactList
            ref="list"
            itemRenderer={this.renderItem}
            length={this.state.total}
            pageSize={this.state.pageSize}
          />
        </div>
      </Loading>
    );
  }
}

const styles = {
  listItem: {
    padding: 10,
    // background: '#fff',
    borderBottom: '1px solid #ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    verticalAlign: 'middle',
  },
  info: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: 20,
  },
  infoItem: {
    marginBottom: '4px',
  },

  row: {
    backgroundColor: '#fff',
    padding: '10px 20px',
    marginTop: '20px',
    marginBottom: '10px',
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
