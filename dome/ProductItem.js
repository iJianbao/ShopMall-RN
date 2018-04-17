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


/**
 * 注意需要传递的参数
 * frame: {width: 100, height: 100}
 * imageDict: {topLeft: '', topRight: '', cont: ''}
 * titleDict: {title: '', price: '', sonNum: ''}
 * productKey: ''
 */

export default class ProductItem extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        this.productItemTouch = this.productItemTouch.bind(this);
        this.needLeftImage = this.needLeftImage.bind(this);
        this.needRightImage = this.needRightImage.bind(this);
        this.needTopView = this.needTopView.bind(this);
      }

      render() {
          let size = {width: this.props.frame.width, height: this.props.frame.height};
          let topView = this.needTopView();
          return(
              <TouchableHighlight style={size}
                                  onPress={this.productItemTouch}
                                  underlayColor={CommObject.underlayColor}>
                  <View style={ProductStyle.productitem_view1}>
                      {topView}

                      <View style={ProductStyle.productitem_view4}>

                          <View style={[ProductStyle.productitem_view3, {width: this.props.frame.width}]}>
                              <Text style={[ProductStyle.productitem_text2]}> {this.props.titleDict.price} </Text>
                              <Text style={[ProductStyle.productitem_text3]}> {this.props.titleDict.sonNum} </Text>
                          </View>

                          <Text style={[ProductStyle.productitem_text1]}> {this.props.titleDict.title} </Text>

                          <Image style={[ProductStyle.productitem_image3]}/>
                      </View>
                  </View>


              </TouchableHighlight>
          )
      }

      //点击
    productItemTouch() {
          this.props.productItemTouchAction(this.props.productKey);
    }



    needTopView() {
        let need1 = this.props.imageDict.topLeft;
        let need2 = this.props.imageDict.topRight;
        if (need1 || need2) {
            let leftImage = this.needLeftImage(need1);
            let rightImage = this.needRightImage(need2);
            let size = {width: this.props.frame.width, height: 40};
            return(<View style={[size, ProductStyle.productitem_view2]}>
                {leftImage}
                {rightImage}
                </View>
            )
        }
        return(
            <View/>
        )
    }

    needLeftImage(need) {
        if (need) {
            return(
                <Image style={ProductStyle.productitem_image1}/>
            )
        }
        return(
            <View/>
        )
    }
    needRightImage(need) {
        if (need) {
            return(
                <Image style={ProductStyle.productitem_image2}/>
            )
        }
        return(
            <View/>
        )
    }

}

const ProductStyle = StyleSheet.create({
    productitem_view1: {
        flex: 1,
        paddingTop: 10,
        borderLeftWidth: 0.5,
        borderBottomWidth: 0.5,
        alignItems: 'center',
    },
    productitem_view2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productitem_image1: {
        marginLeft: 5,
        width: 40,
        height: 40,
        backgroundColor: '#fa0011',
    },
    productitem_image2: {
        marginRight: 5,
        width: 40,
        height: 40,
        backgroundColor: '#aadd11',
    },
    productitem_image3: {
        flex: 1,
        backgroundColor: '#ffdd11',
    },
    productitem_text1: {
        fontSize: 13,
        textAlign: 'center',
    },
    productitem_view3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productitem_view4: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    productitem_text2: {
        fontSize: 13,
        color: '#ff0000',
        marginLeft: 5,
    },
    productitem_text3: {
        fontSize: 11,
        color: '#c1c1c1',
        marginRight: 5,
    },
});