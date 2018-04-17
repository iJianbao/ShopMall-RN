/**
 * Created by kk on 2018/4/13.
 */
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Navigator,
    ScrollView,
} from 'react-native';

import CommObject from '../CommObject';

export default class ProductInfoView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    // 导航栏的选项可以被定义为屏幕属性的函数
    static navigationOptions = ({ navigation }) => ({
        //${navigation.state.params.user} 是一个动态的参数，参数名为user
        title: `${navigation.state.params.user}`,
    });

      render() {
          return(
              <ScrollView>

              </ScrollView>
          )
      }
}

const ProductInfoViewStyle = StyleSheet.create({
    productInfoView_view1: {
        flex: 1,
        backgroundColor: '#ddaaaa',
    }
});