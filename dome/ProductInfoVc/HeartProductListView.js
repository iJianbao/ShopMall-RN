/**
 * Created by kk on 2018/4/16.
 */

/** 诚品列表 **/
import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    View,
    FlatList,
    TouchableHighlight,
} from 'react-native';

import HeartProductItem from './HeartProductItem';
import CommObject from '../CommObject';

export default class HeartProductListView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            soureData: [{title1: '【C型手柄反向伞】', title2: '反向收伞/双层设计/多色选择', title3: '原价59元', title4: '30', title5: '29', key: '1'},
                {title1: '【C型手柄反向伞】', title2: '反向收伞/双层设计/多色选择', title3: '原价59元', title4: '39', title5: '29', key: '2'},
                {title1: '【C型手柄反向伞】', title2: '反向收伞/双层设计/多色选择', title3: '原价59元', title4: '30', title5: '29', key: '3'},
                {title1: '【C型手柄反向伞】', title2: '反向收伞/双层设计/多色选择', title3: '原价59元', title4: '30', title5: '29', key: '4'},
                {title1: '【C型手柄反向伞】', title2: '反向收伞/双层设计/多色选择', title3: '原价59元', title4: '30', title5: '29', key: '5'},
                {title1: '【C型手柄反向伞】', title2: '反向收伞/双层设计/多色选择', title3: '原价59元', title4: '30', title5: '29', key: '6'}]
        };
      }

    componentWillUnmount() {
        console.log(this.props.className, 'componentWillUnmount');
    }

      render() {
          return(
              <View style={HeartProductListViewStyle.heartProductListView_view1}>
                  <TouchableHighlight>
                      <View>

                      </View>
                  </TouchableHighlight>
                  <FlatList ref="heartProductFlatList"
                            data={this.state.soureData}
                            renderItem={(item)=>this.renderItemView(item)}
                            ItemSeparatorComponent={this.separatorView}/>
              </View>
          )
      }

    static navigationOptions = ({ navigation }) => ({
        //${navigation.state.params.user} 是一个动态的参数，参数名为user
        title: `诚品推荐`,
    });

    renderItemView(item) {
        item = item.item;
        return(
            <HeartProductItem frame={{width: CommObject.ScreenWidth, height: 250}}
                              titleAry={item}
                              image='1'
                              heartProductItemTouchAction={(key)=>{ console.log('heartProductItemTouchAction',key) }}/>
        )
    }

    separatorView() {
          return(
              <View style={HeartProductListViewStyle.heartProductListView_separatorView}></View>
          )
    }
}

const HeartProductListViewStyle = StyleSheet.create({
    heartProductListView_view1: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
    heartProductListView_separatorView: {
        // backgroundColor: '#c1c1c1',
        height: 15,
    },

});