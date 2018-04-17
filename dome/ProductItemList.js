/**
 * Created by kk on 2018/4/12.
 */
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
} from 'react-native';

import ProductItem from './ProductItem';
import CommObject from './CommObject';

/**
 * ProductItemListTouchAction: 方法
 */

export default class ProductItemList extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            soureData: [{topLeft: '1', topRight: '', cont: '1', title: '密码防撬1', price: '$65.00元', sonNum: '8234', productKey: '1'},
                {topLeft: '', topRight: '1', cont: '2', title: '密码防撬2', price: '$85.00元', sonNum: '8234', productKey: '2'},
                {topLeft: '1', topRight: '', cont: '1', title: '密码防撬3', price: '$25.00元', sonNum: '8234', productKey: '3'},
                {topLeft: '', topRight: '2', cont: '1', title: '密码防撬4', price: '$15.00元', sonNum: '8234', productKey: '4'},
                {topLeft: '', topRight: '', cont: '1', title: '密码防撬5', price: '$35.00元', sonNum: '8234', productKey: '5'},
                {topLeft: '1', topRight: '', cont: '', title: '密码防撬6', price: '$75.00元', sonNum: '8234', productKey: '6'},
                {topLeft: '', topRight: '1', cont: '', title: '密码防撬7', price: '$55.00元', sonNum: '8234', productKey: '7'},
                {topLeft: '2', topRight: '2', cont: '', title: '密码防撬8', price: '$125.00元', sonNum: '8234', productKey: '8'},
                {topLeft: '', topRight: '', cont: '', title: '密码防撬9', price: '$115.00元', sonNum: '8234', productKey: '9'},
                {topLeft: '1', topRight: '', cont: '', title: '密码防撬11', price: '$1225.00元', sonNum: '8234', productKey: '10'}]
        };

        // this.renderItemView = this.renderItemView.bind(this);
        this.headerView = this.headerView.bind(this);
        this.separatorView = this.separatorView.bind(this);
      }

      render() {
          return(
                <View>
                    <FlatList style={[ProductItemListStyle.productItemList_flatList]}
                              ref="productItemList"
                              data={this.state.soureData}
                              renderItem={(item)=>this.renderItemView(item)}
                              ListHeaderComponent={this.headerView}
                              ItemSeparatorComponent = {this.separatorView}
                              numColumns ={2}
                              // columnWrapperStyle={{ borderWidth: 1, borderColor: 'black' }}
                              onViewableItemsChanged={(info)=>{
                                  console.log(info);
                              }}
                     />
                </View>

          )
      }

      //itemView
    renderItemView(item) {
        item = item.item;
          console.log('renderItemView', item);
          return(
              <ProductItem frame={{width: CommObject.ScreenWidth/2, height: 200}}
                           imageDict={{topLeft: item.topLeft, topRight: item.topRight, cont: item.cont}}
                           titleDict={{title: item.title, price: item.price, sonNum: item.sonNum}}
                           productKey={item.productKey}
                           productItemTouchAction={(key)=>{
                               this.props.ProductItemListTouchAction(key)
                           }}/>
          )
    };

    headerView() {
          return(
              <View style={[ProductItemListStyle.productItemList_headView]}>
                  <Image style={ProductItemListStyle.productItemList_headImage}/>
                  <Text style={ProductItemListStyle.productItemList_headText}>商城精选</Text>
              </View>
          )
    }
    separatorView() {
          return(
              <View style={ProductItemListStyle.productItemList_separatorView}/>
          )
    }
}

const ProductItemListStyle = StyleSheet.create({
    productItemList_headView: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        backgroundColor: '#aaddaa',
        // alignItems: 'left',
    },
    productItemList_headImage: {
        height: 30,
        width: 10,
        backgroundColor: '#ff0000',
    },
    productItemList_headText: {
        marginLeft: 10,
        fontSize: 13,
        fontWeight: 'bold',
    },
    productItemList_separatorView: {
        flex: 1,
        backgroundColor: '#c1c1c1',
        height: 0.5,
    },
    productItemList_flatList: {
        // flex: 1,
        // backgroundColor: '#afaf33',
    }
});