/**
 * Created by kk on 2018/4/23.
 */
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class ProductNumber extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            productNum: 1,
        };
        this.reduce = this.reduce.bind(this);
        this.add = this.add.bind(this);
      }

      render() {
          return(
              <View style={ProductNumberStyle.productNumber_view1}>
                  <Text style={ProductNumberStyle.productNumber_text1}>数量</Text>
                  <View style={ProductNumberStyle.productNumber_view2}>
                      <Text style={[ProductNumberStyle.productNumber_text2,
                          {color: this.state.productNum===1?'#c1c1c1':'#000000'}]}
                            onPress={this.reduce}>−</Text>
                      <Text style={ProductNumberStyle.productNumber_text2}>{this.state.productNum}</Text>
                      <Text style={ProductNumberStyle.productNumber_text2}
                            onPress={this.add}>+</Text>
                  </View>
              </View>
          )
      }

      reduce() {
          this.setState({
              productNum: this.state.productNum===1?1:this.state.productNum-1
          })
      }

      add() {
          this.setState({
              productNum: this.state.productNum+1
          })
      }
}

const ProductNumberStyle = StyleSheet.create({
    productNumber_view1: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#ffffff',
        alignItems: 'center',
     },
    productNumber_view2: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 60,
        alignItems: 'center',
    },
    productNumber_text1: {
        marginLeft: 20,
        fontSize: 15,
    },
    productNumber_text2: {
        marginLeft: 40,
        fontSize: 25,
    }
});