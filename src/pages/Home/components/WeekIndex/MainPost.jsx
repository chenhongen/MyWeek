import React, { Component } from 'react';
import { Icon } from '@icedesign/base';
import './MainPost.scss';

// import 'aframe-particle-system-component';
import VRScene from './VRBanner';

export default class MainPost extends Component {
    static displayName = 'MainPost';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="intro-banner-wrap" style={style.introBannerWrapStyles}>
                {/* <img
                className="intro-banner-img"
                src={require('./images/greatwall.jpg')}
                style={style.introBannerImgStyles}
                alt=""
                />
                <div
                className="intro-banner-img-mask"
                style={style.introBannerImgMaskStyles}
                />
                 */}
                <VRScene />
                {/* <div className="intro-banner-img" style={style.introBannerImgStyles}>
                    <VRScene />
                </div> */}
                <div className="intro-banner-top">
                    <div style={style.introBannerUserStyles}>
                        <img
                        src={require('./images/我不是码神.png')}
                        style={style.avatar}
                        alt="头像"
                        />
                        <div style={style.baseInfo}>
                        <h5 style={style.name}>土著</h5>
                        <p style={style.deptName}>CHE Studio</p>
                        </div>
                    </div>
                    {/* <div style={style.introBannerStartStyles}>
                        <Icon type="favorite" data-id="" />
                    </div> */}
                </div>
                <div className="intro-banner-text">
                    <h2 className="intro-banner-title">
                        周 · 讯
                    </h2>
                    <p
                        className="intro-banner-subtitle"
                        style={style.introBannerSubtitleStyles}
                    >
                        延禧攻略完结撒花。VR背景根据故宫博物院素材制作。<br/>
                        这周基本都在客户现场调试Webservice接口，来回四个小时。。<br/>
                        抽空刷了《ZooKeeper分布式专题与Dubbo微服务入门》，确实很入门，不值100多，还好没花钱。。<br/>
                        (Week开发中，功能未完善...)
                    </p>
                </div>
            </div>
        );
    }
}

const style = {
    avatar: {
        width: '40px',
        height: '40px',
        borderRadius: '40px',
        border: '1px solid #eee',
    },
    name: {
        padding: '0 10px',
        margin: 0,
    },
    deptName: {
        padding: '0 10px',
        margin: 0,
        fontSize: '12px',
    },
    
    introBannerWrapStyles: {
      width: '100%',
      height: '300px',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '75px',
    },
    introBannerImgStyles: {
      position: 'absolute',
      top: '0',
      left: '50%',
      display: 'block',
      width: '1190px',
    //   height: '100%',
      height: '300px',
      transform: 'translateX(-50%)',
      zIndex: '10',
    },
    introBannerImgMaskStyles: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      background: '#000',
      opacity: '.45',
      zIndex: '15',
    },
    introBannerUserStyles: {
        zIndex: '15',
        paddingLeft: '20px',
        color: '#fff',
        display: 'flex',
    },
    introBannerStartStyles: {
        color: '#fff',
        paddingRight: '20px',
    },
    introBannerSubtitleStyles: {
      marginTop: '8px',
      marginBottom: '48px',
      maxWidth: '768px',
      fontSize: '16px',
      lineHeight: '25px',
    },
  };