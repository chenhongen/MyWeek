import React, { Component } from 'react';
import { Icon } from '@icedesign/base';
import './MainPost.scss';

export default class MainPost extends Component {
    static displayName = 'MainPost';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="intro-banner-wrap" style={style.introBannerWrapStyles}>
                <img
                className="intro-banner-img"
                src={require('./images/greatwall.jpg')}
                style={style.introBannerImgStyles}
                alt=""
                />
                <div
                className="intro-banner-img-mask"
                style={style.introBannerImgMaskStyles}
                />
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
                    <div style={style.introBannerStartStyles}>
                        <Icon type="favorite" data-id="" />
                    </div>
                </div>
                <div className="intro-banner-text" style={style.introBannerTextStyles}>
                <h2
                    className="intro-banner-title"
                    style={style.introBannerTitleStyles}
                >
                    一周事儿，都在这儿
                </h2>
                <p
                    className="intro-banner-subtitle"
                    style={style.introBannerSubtitleStyles}
                >
                    最近整的东西比较杂，LDAP校验、CXF Webservice接口、selenium自动填单、基于JodConvert的office文档转pdf/react-pdf在线播放等。当然，这些都没来得及时间整理。累到不想说话，并向你丢了以下干货。噗嗤(Week开发中，功能未完善...)
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
    },
    introBannerImgStyles: {
      position: 'absolute',
      top: '0',
      left: '50%',
      display: 'block',
      width: '1190px',
      height: '100%',
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
    introBannerTextStyles: {
      position: 'absolute',
      top: '62px',
      zIndex: '15',
      width: '100%',
      boxSizing: 'border-box',
      paddingLeft: '40px',
      color: '#fff',
      pointerEvents: 'none',
    },
    introBannerTitleStyles: {
      fontWeight: '400',
      fontSize: '50px',
      lineHeight: '70px',
    },
    introBannerSubtitleStyles: {
      marginTop: '8px',
      marginBottom: '48px',
      maxWidth: '768px',
      fontSize: '16px',
      lineHeight: '25px',
    },
  };