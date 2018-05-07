/**
 * Created by kk on 2018/4/24.
 */
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import CommObject from '../CommObject';

export default class ProductDescribe extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

          this.titleView = this.titleView.bind(this);
          this.describeImageView = this.describeImageView.bind(this);
      }

      static defaultProps = {
          productDescribe_titleAry: ['用户须知'],
          productDescribe_imageAry: ['1', '2', '3']
      };

      render() {
          return(
              <View style={ProductDescribeStyle.productDescribe_view1}>
                  {this.titleView()}
                  {this.describeImageView()}
              </View>
          )
      }

      titleView() {
          return(
              <Text style={ProductDescribeStyle.productDescribe_text1}>商品介绍</Text>
          )
      }

      describeImageView() {
          return(
              <Image style={[{width: CommObject.ScreenWidth, height: 640}]} source={{uri: 'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2263582212.jpg'}}/>
          )
          const imageView = this.props.productDescribe_imageAry.map((obj, index)=> {
              // let str = '../imgs/rn'+(index+1)+'.jpg';
              return(
                  <Image  key={'li'+global.reactid++} source={{uri: 'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2263582212.jpg'}}/>
              )
          });
          return imageView;
      }
}

const ProductDescribeStyle = StyleSheet.create({
    productDescribe_view1: {
        backgroundColor: '#ffffff',
        marginTop: 20,
    },
    productDescribe_text1: {
        fontSize: 20,
        textAlign: 'center',
        margin: 15,
    },

});

