/**
 * Created by kk on 2018/4/9.
 */

//react 构建用户界面的 JAVASCRIPT 库
import React, {
    Component
} from 'react';

//react-native 与原生对应的库
import {
    StyleSheet,
    View,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import TopScrollView from './TopScrollView';
import FourItem from './FourItem';
import HotView from './HotView';
import ProductItemList from './ProductItemList';

import CommObject from './CommObject';

//创建一个类
export default class MainView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

          this.main_touch_go = this.main_touch_go.bind(this);
          this.main_touch_list = this.main_touch_list.bind(this);
          this.get_mainView = this.get_mainView.bind(this);
      }

      //main界面
    get_mainView() {
          return(
              <ScrollView vertical={true} >
                  <View style={MainViewStyleSheet.main_view}>
                      <TopScrollView frame={{x: 0, y:60, width: CommObject.ScreenWidth, height: 180}}/>

                      <FourItem frame={{x: 0, y: 0, width: CommObject.ScreenWidth, height: 80}}/>

                      <HotView frame={{x: 0, y: 20, width: CommObject.ScreenWidth, height: 240}}/>

                      <TouchableHighlight style={[MainViewStyleSheet.main_goView]}
                                          onPress={this.main_touch_go}
                                          underlayColor={CommObject.underlayColor}>
                          <View/>
                      </TouchableHighlight>

                      <ProductItemList ProductItemListTouchAction={(key)=>this.main_touch_list(key)}/>

                  </View>
              </ScrollView>
          )
    }

    static navigationOptions = {
        title: '商城',
    };

      render () {
          return (
              this.get_mainView()
          )
      }

      //主界面点击go
    main_touch_go() {
        const { navigate } = this.props.navigation;
        // navigate('ProductInfoView', { user: '爆款热销' })
        navigate('HeartProductListView', { user: '诚品推荐' })
    }

    //主界面列表点击
    main_touch_list(key) {
       // console.log('main_touch_list', key);
        const { navigate } = this.props.navigation;
        navigate('ProductInfoView', {user: '商品详情'})
    }
}

const MainViewStyleSheet = StyleSheet.create({
    main_view: {
        flex: 1,
        alignItems: 'center',
    },
    main_navigator: {
        flex: 1,
    },
    main_goView: {
        marginTop: 10,
        marginBottom: 10,
        width: CommObject.ScreenWidth-10,
        height: 65,
        backgroundColor: '#00eeaa',
    }
});

//注册组件
// AppRegistry.registerComponent('MainView', ()=>MainView);
