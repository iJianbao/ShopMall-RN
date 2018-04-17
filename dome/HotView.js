/**
 * Created by kk on 2018/4/11.
 */
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import HotItem_1 from './HotItem_1';
import HotItem_2 from './HotItem_2';

import CommObject from './CommObject';


export default class HotView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

      render() {
          let frame = {
              marginLeft:this.props.frame.x,
              marginTop:this.props.frame.y,
              width: this.props.frame.width,
              height: this.props.frame.height};
          return(
              <View style={[HotViewStyle.hotView_view1, frame]}>
                  <HotItem_1 frame = {{width: frame.width*2/5, height: frame.height}}
                             titleAry={['今日抢购', '1080P摄像机', '原价：299', '￥249']}
                             image=""/>

                  <View style={HotViewStyle.hotView_view2}>
                      <HotItem_2 frame = {{width: frame.width*3/5, height: 90}}
                                 titleAry={['人气套装', '智能家居联动']}
                                 image=""/>

                      <View style={HotViewStyle.hotView_view3}>
                          <HotItem_1 frame = {{width: frame.width*3/10, height: frame.height-90}}
                                     titleAry={['在线客服', '您有问题我解决', '', '']}
                                     image=""/>
                          <HotItem_1 frame = {{width: frame.width*3/10, height: frame.height-90}}
                                     titleAry={['新品体验', '小k情景照明灯泡', '', '']}
                                     image=""/>
                      </View>

                  </View>

              </View>
          )
      }
}

const HotViewStyle = StyleSheet.create({
    hotView_view1: {
        flexDirection: 'row',
        backgroundColor: '#ffaadd',
    },
    hotView_view2: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffaa11',
    },
    hotView_view3: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#aaaa11',
    }
});
