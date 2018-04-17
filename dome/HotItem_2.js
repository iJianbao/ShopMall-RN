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

export default class HotItem_2 extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.hotItemTouch = this.hotItemTouch.bind(this);
      }

      render() {
          let size1 = {width: this.props.frame.width, height: this.props.frame.height};
          return(
              <TouchableHighlight style={[size1, HotItemStyle2.hotItem2_view1]}
                                  underlayColor={CommObject.underlayColor}
                                  onPress={this.hotItemTouch}>
                  <View style={HotItemStyle2.hotItem2_view2}>
                      <View>
                          <Text style={HotItemStyle2.hotItem2_text1}> {this.props.titleAry[0]} </Text>
                          <Text style={HotItemStyle2.hotItem2_text2}> {this.props.titleAry[1]} </Text>
                      </View>
                      <Image style={HotItemStyle2.hotItem2_image}/>
                  </View>
              </TouchableHighlight>
          )
      }

      //点击
      hotItemTouch() {

      }
}

const HotItemStyle2 = StyleSheet.create({
    hotItem2_view1: {
        flexDirection: 'column',
        borderBottomWidth: 0.5,
    },
    hotItem2_text1: {
        marginTop: 10,
        marginLeft: 15,
        fontSize: 13,
    },
    hotItem2_text2: {
        marginLeft: 15,
        fontSize: 11,
    },
    hotItem2_view2: {
        flex: 1,
        flexDirection: 'row',
    },
    hotItem2_image: {
        flex: 1,
        backgroundColor: '#aaff11',
    }
});