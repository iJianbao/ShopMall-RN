/**
 * Created by kk on 2018/4/23.
 */
import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class ProductChoice extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            choiceNum: 0,
        };

        this.choiceText = this.choiceText.bind(this);
        this.choiceBtnAction = this.choiceBtnAction.bind(this);
      }

      static defaultProps = {
          productChoice_title: '套餐',
          productChoice_ary: ['1080P摄像机(无内存卡)',
              '1080P摄像机(8G内存卡)',
              '1080P摄像机(16G内存卡)',
              '1080P摄像机(32G内存卡)'],
      };

      render() {
          let view = this.choiceText();
          return(
              <View style={ProductChoiceStyle.productChoice_view1}>
                  <Text style={ProductChoiceStyle.productChoice_text2}>{this.props.productChoice_title}</Text>

                  <View style={ProductChoiceStyle.productChoice_view2}>
                      {view}
                  </View>
              </View>
          )
      }

      choiceText() {
          const doList = this.props.productChoice_ary.map((obj, index)=>{
              return(
                  <Text key={'li'+global.reactid++} style={[ProductChoiceStyle.productChoice_text1,
                      {color: this.state.choiceNum===index?'#ffffff':'#000000'},
                      {backgroundColor: this.state.choiceNum===index?'#ff0000':'#ffffff'}]}
                        onPress={()=>this.choiceBtnAction(index)}>{obj}</Text>
              )
          });
          return doList;
      }

      choiceBtnAction(index) {
          this.setState({
              choiceNum: index
          })
      }
}

const ProductChoiceStyle = StyleSheet.create({
     productChoice_view1: {
         backgroundColor: '#ffffff',
         flexDirection: 'row',
         padding: 20,
         marginBottom: 20
     },
    productChoice_view2: {
         flex: 1,
         alignItems: 'center',
        // justifyContent: 'center',
    },
    productChoice_text1: {
        borderWidth: 0.5,
        borderColor: '#000000',
        padding: 5,
        marginBottom: 10,
    },
    productChoice_text2: {
        fontSize: 15,
    },
});