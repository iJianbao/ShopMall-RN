/**
 * Created by kk on 2018/4/13.
 */
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Navigator,
    ScrollView,
    Button,
    Image,
    TouchableHighlight,
} from 'react-native';

var thisMain;

var llll = function () {
    console.log('sssss');
    // thisMain = this;
};

llll();

import ProductChoice from './ProductChoice';
import ProductNumber from './ProductNumber';
import ProductDescribe from './ProductDescribe';
import CommObject from '../CommObject';

export default class ProductInfoView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        thisMain = this;
        this.callBtnAction = this.callBtnAction.bind(this);
      }

      static defaultProps = {
          product_title: '[诚品]Baseus无线充电底座（到手机88元+50K币，反9K币）',
          product_price: '￥138.00',
          product_oldPrice: '￥198.00',
          product_explain: '最多可折扣50K币'
      };

    // 导航栏的选项可以被定义为屏幕属性的函数
    static navigationOptions = ({ navigation }) => ({
        //${navigation.state.params.user} 是一个动态的参数，参数名为user
        title: `${navigation.state.params.user}`,
        headerRight: (
            <View style={{flexDirection: 'row'}}>
                <Button title="客服" onPress={()=>{
                    console.log('客服');
                }}/>
                <Button title="我的" onPress={()=>{
                    {thisMain.callBtnAction()}
                }}/>
            </View>
        )
    });

      render() {
          let size = {width: CommObject.ScreenWidth, height: CommObject.ScreenWidth};
          return(
              <View style={{flex: 1}}>
                <ScrollView style={{backgroundColor: '#e1e1e1'}}>
                     <View style={[ProductInfoViewStyle.productInfoView_view1, size]}>

                     </View>

                     {this.productTitleAndPriceView()}

                     <ProductChoice/>

                    <ProductNumber/>

                    <ProductDescribe/>
                 </ScrollView>

                  <View style={{height: 60, flexDirection: 'row', alignItems:'center'}}>
                      <Image style={{height: 60, width: 80}} source={require('../imgs/rn_buy.jpg')} onPress={()=>{
                          console.log('加入购物车')
                      }}/>

                      <TouchableHighlight style={{flex: 1}}
                                          onPress={()=>{
                          console.log('加入购物车')
                      }} underlayColor={CommObject.underlayColor}>
                          <Text style={[ProductInfoViewStyle.productInfoView_text5, {paddingTop:20}]}>加入购物车</Text>
                      </TouchableHighlight>

                      <TouchableHighlight style={{flex: 1}}
                                          onPress={()=>{
                          console.log('立刻购买')
                      }} underlayColor={CommObject.underlayColor}>
                          <Text style={[ProductInfoViewStyle.productInfoView_text5,
                              {paddingTop:20, backgroundColor: '#ff0000', color: '#ffffff'}]}>立即购买</Text>
                      </TouchableHighlight>
                  </View>
              </View>

          )
      }

      //名称和描述
    productTitleAndPriceView() {
          return (
              <View style={ProductInfoViewStyle.productInfoView_view2}>
                  <Text style={ProductInfoViewStyle.productInfoView_text1}>{this.props.product_title}</Text>
                  <View style={ProductInfoViewStyle.productInfoView_view3}>
                      <Text style={ProductInfoViewStyle.productInfoView_text2}>{this.props.product_price}</Text>

                      <Text style={ProductInfoViewStyle.productInfoView_text3}>{this.props.product_oldPrice}</Text>

                      <Text style={ProductInfoViewStyle.productInfoView_text4}>{this.props.product_explain}</Text>
                  </View>
              </View>
          )
    }

      //客服按钮
    callBtnAction() {
          console.log('wode')
    }
}

const ProductInfoViewStyle = StyleSheet.create({
    productInfoView_view1: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d1d1d1',
        backgroundColor: '#ddaaaa',
    },
    productInfoView_view2: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 20,
    },
    productInfoView_text1: {
        fontSize: 16,
    },
    productInfoView_view3: {
        marginTop: 10,
        flexDirection: 'row',
    },
    productInfoView_text2: {
        fontSize: 15,
        color: '#ff0000',
    },
    productInfoView_text3: {
        marginLeft: 10,
        fontSize: 13,
        color: '#c1c1c1',
        textDecorationLine: 'line-through'
    },
    productInfoView_text4: {
        position: 'absolute',
        right: 0,
        fontSize: 13,
    },
    productInfoView_text5: {
        flex: 1,
        fontSize: 20,
        textAlign:'center',
    },
});