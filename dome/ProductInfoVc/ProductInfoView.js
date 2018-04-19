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
    Button,
} from 'react-native';

var thisMain;

var llll = function () {
    console.log('sssss');
    thisMain = this;
};

llll();

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
        headerRight: (
            <View style={{flexDirection: 'row'}}>
                <Button title="客服" onPress={()=>{
                    console.log('客服')
                    llll()
                }}/>
                <Button title="我的" onPress={()=>{
                    console.log('我的')
                }}/>
            </View>
        )
    });

      render() {
          let size = {width: CommObject.ScreenWidth, height: CommObject.ScreenWidth};
          return(
              <ScrollView>
                  <View style={[ProductInfoViewStyle.productInfoView_view1, size]}>

                  </View>
              </ScrollView>
          )
      }

      //客服按钮
    callBtnAction() {

    }
}

const ProductInfoViewStyle = StyleSheet.create({
    productInfoView_view1: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d1d1d1',
        backgroundColor: '#ddaaaa',
    }
});