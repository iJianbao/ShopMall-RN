/**
 * Created by kk on 2018/4/10.
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

export default class FourItem extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

      render () {
          let size = {width: this.props.frame.width/4, height: this.props.frame.height};
          let textAry = ["诚品推荐", "分类", "购物车", '我的'];
          let itemList = [<Fitem frame={size} title={textAry[0]}/>,
              <Fitem frame={size} title={textAry[1]}/>,
              <Fitem frame={size} title={textAry[2]}/>,
              <Fitem frame={size} title={textAry[3]}/>];
          //取位置
          let frame = {marginLeft: this.props.frame.x, marginTop: this.props.frame.y, width: this.props.frame.width, height: this.props.frame.height};
          return (
              <View style={[FouritemStyle.four_view, frame]}>
                  {itemList}
              </View>
          )
      }
}

class Fitem extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.fitemTouch = this.fitemTouch.bind(this);

      }

      render() {
          let frame = {width: this.props.frame.width, height: this.props.frame.height};
          let itemImageSize = {width: frame.width, height: frame.height-20};
          let itemTextSize = {width: frame.width, height: 20};
          return (
              <TouchableHighlight
                                  onPress={this.fitemTouch}
                                  underlayColor={CommObject.underlayColor}>
                 <View style={[FitemStyle.fitem_view, frame]}>
                     <View style={[FitemStyle.fitem_image, itemImageSize]}/>
                     <Text style={[FitemStyle.fitem_text, itemTextSize]}>
                         {this.props.title}
                     </Text>
                 </View>
              </TouchableHighlight>
          )
      }
      //点击
    fitemTouch() {
          console.log('fitemTouch');
    }
}

const FouritemStyle = StyleSheet.create({
    four_view: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

const FitemStyle = StyleSheet.create({
    fitem_view: {
        flex: 1,
    },
    fitem_image: {
        // textAlign: 'center',
        backgroundColor: '#ffff11',
    },
    fitem_text: {
        backgroundColor: '#ffffff',
        textAlign: 'center',
    }
});