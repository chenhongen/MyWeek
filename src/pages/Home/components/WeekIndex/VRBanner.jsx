import 'aframe';
// import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

export default class VRScene extends React.Component {
  render () {
    return (
      <Scene embedded>
        {/* <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/> */}
        {/* <Entity particle-system={{preset: 'snow'}}/> */}

        {/* <Entity light={{type: 'point'}}/>
        <a-text value="Week" width="6" position="-2.5 0.25 -1.5"
              rotation="0 15 0"></a-text> */}

        {/* <a-sky src={require('./images/tessascape.jpg')} rotation="0 -130 0"></a-sky> */}
        {/* <Entity primitive='a-sky' src='gitee/chenhongen/DangAn/raw/master/img/tessascape.jpg' /> */}
        <Entity primitive='a-sky' src={require('./images/pano.jpg')} />
      </Scene>
    );
  }
}