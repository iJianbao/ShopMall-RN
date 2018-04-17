/**
 * Created by kk on 2018/4/11.
 */
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';

import CommObject from './CommObject';

/*
 frame: 定义大小
 titleAry: 内部文字
 image: 图片
 */

export default class HotItem_1 extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        this.hotItemTouch = this.hotItemTouch.bind(this);
          this.needText23 = this.needText23.bind(this);
      }

      render() {
          let view = this.needText23();
          let size1 = {width: this.props.frame.width, height: this.props.frame.height};
          return(
            <TouchableHighlight
                                onPress={this.hotItemTouch}
                                underlayColor={CommObject.underlayColor}>
              <View style={[size1, HotItemStyle.hotItem_view1]}>
                  <Text style={HotItemStyle.hotItem_text1}> {this.props.titleAry[0]} </Text>
                  <Text style={HotItemStyle.hotItem_text2}> {this.props.titleAry[1]} </Text>
                  {view}
                  <Image style={[HotItemStyle.hotItem_image]}/>
              </View>
            </TouchableHighlight>
          )
      }

      //判断是否需要第三个和第四个text
      needText23 () {
          let title_2 = this.props.titleAry[2];
          let need = title_2.length>0;
          console.log('长度', need);
          if (need) {
              return (
                  <View style={HotItemStyle.hotItem_view2}>
                      <Text style={HotItemStyle.hotItem_text3}> {this.props.titleAry[2]} </Text>
                      <Text style={HotItemStyle.hotItem_text4}> {this.props.titleAry[3]} </Text>
                  </View>
              )
          }
          return (
              <View style={HotItemStyle.hotItem_view2}>
              </View>
          )
      }

      //点击
    hotItemTouch () {
          console.log('hotItemTouch');
    }
}

const HotItemStyle = StyleSheet.create({
    hotItem_view1: {
        flex: 1,
        paddingTop: 10,
        borderRightWidth: 0.5,
    },
    hotItem_text1: {
        marginLeft: 15,
        fontSize: 13,
    },
    hotItem_text2: {
        marginLeft: 15,
        fontSize: 11,
    },
    hotItem_text3: {
        marginLeft: 15,
        fontSize: 10,
    },
    hotItem_text4: {
        marginLeft: 2,
        fontSize: 13,
        color: '#ff0000',
    },
    hotItem_view2: {
        marginTop: 5,
        flexDirection: 'row',
    },
    hotItem_image: {
        flex: 1,
        backgroundColor: '#aaff11',
    }
});