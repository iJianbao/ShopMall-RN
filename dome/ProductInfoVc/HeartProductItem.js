/**
 * Created by kk on 2018/4/16.
 */

/** 诚品item **/
import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Image,
} from 'react-native';

/**
 * frame: {width: 100, height: 100}
 * image: ''
 * titleAry: {title1: '', title2: '', title3: '', title4: '50元', title5: '20k币', key: 'id'}
 * heartProductItemTouchAction: '' 回调方法
 */

import CommObject from '../CommObject';

export default class HeartProductItem extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        this.productItemToucAction = this.productItemToucAction.bind(this);
      }

      render() {
          let frame = {marginLeft: 10, marginTop: 0, width: this.props.frame.width-20, height: this.props.height};
          let imageSize = {width: frame.width, height: this.props.frame.height*4/7};
          return(
              <TouchableHighlight onPress={this.productItemToucAction}
                                  underlayColor={CommObject.underlayColor}>
                  <View style={[HeartProductItemStyle.heartProductItem_view1, frame]}>
                      <Image style={[HeartProductItemStyle.heartProductItem_image, imageSize]}/>
                      <View style={HeartProductItemStyle.heartProductItem_view3}>
                          <Text style={HeartProductItemStyle.heartProductItem_text1}>{this.props.titleAry.title1}</Text>
                          <Text style={HeartProductItemStyle.heartProductItem_text2}>{this.props.titleAry.title2}</Text>
                          <Text style={HeartProductItemStyle.heartProductItem_text3}>{this.props.titleAry.title3}</Text>
                          <View style={HeartProductItemStyle.heartProductItem_view2}>
                              <Text style={HeartProductItemStyle.heartProductItem_text4}>新品秒杀价：
                                  {<Text style={HeartProductItemStyle.heartProductItem_text6}>{this.props.titleAry.title4}</Text>}元+{this.props.titleAry.title5}k币</Text>
                              <TouchableHighlight style={HeartProductItemStyle.heartProductItem_touch2}
                                                  onPress={this.productItemToucAction}
                                                  underlayColor={CommObject.underlayColor}>
                                  <Text style={HeartProductItemStyle.heartProductItem_text5}>立刻抢购</Text>
                              </TouchableHighlight>
                          </View>
                      </View>

                  </View>
              </TouchableHighlight>
          )
      }

      productItemToucAction() {
          this.props.heartProductItemTouchAction(this.props.key);
      }
}

const HeartProductItemStyle = StyleSheet.create({
    heartProductItem_touch1: {
        flex: 1,
    },
    heartProductItem_view1: {
        backgroundColor: '#ffffff',
        borderWidth: 1.5,
        borderColor: '#c1c1c1',
    },
    heartProductItem_image: {
        backgroundColor: '#ff0000',
    },
    heartProductItem_text1: {
        marginTop: 5,
        fontSize: 13,
        fontWeight: 'bold',
    },
    heartProductItem_text2: {
        fontSize: 11,
        color: '#c1c1c1',
    },
    heartProductItem_text3: {
        fontSize: 8,
        color: '#c1c1c1',
        textDecorationLine: 'line-through'
    },
    heartProductItem_view2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    heartProductItem_text4: {
        fontSize: 13,
        color: '#ff0000',
    },
    heartProductItem_touch2: {
        width: 90,
        height: 20,
        borderRadius:15,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
    },
    heartProductItem_text5: {
        fontSize: 13,
        color: '#ffffff',
        textAlign:'center',
        fontWeight: 'bold',
    },
    heartProductItem_view3: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
    },
    heartProductItem_text6: {
        fontSize: 17,
        color: '#ff0000',
        fontWeight: 'bold',
    },
});