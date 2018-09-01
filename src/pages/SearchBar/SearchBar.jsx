import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Button, Search } from '@icedesign/base';
import './SearchBar.scss';
import FoundationSymbol from 'foundation-symbol';
import Posts from './../Home/components/WeekIndex/Posts';

@withRouter
export default class SearchBar extends Component {
    static displayName = 'SearchBar';

    constructor(props) {
        super(props);
        this.state = {
            tag: null,
            mtag: null,
            value: null,
            dataSource: []
        };
    }

    onChange = (value) => {
        this.setState({
          value
        });
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
    
    // mobile - 返回首页
    backIndex = () => {
        this.props.history.push("/");
    }

    render() {
      return (
        <div>
            <div className="header-container">
                <div className="header-content">
                    <FoundationSymbol size="large" type='transfer-left' onClick={this.backIndex} />

                    <Search
                        inputWidth={250}
                        value={this.state.value}
                        onSearch={this.onSearch.bind(this)}
                        onChange={this.onChange}
                        dataSource={this.state.dataSource}
                        placeholder=" 兴趣..."
                        name="textName"
                        searchText=""
                        type="normal"
                        className="header-search-input-mini"
                    />
                </div>
            </div>
{/* BUG:单个字符的时候不触发搜索 */}
            <div className="container-mini">
                {this.state.value != null && this.state.value != "" ? 
                    <Posts tag={this.state.tag} value={this.state.value} mtag={this.state.mtag} height='100%' />
                    :<p></p>
                }
            </div>
        </div>
      )
    }
}