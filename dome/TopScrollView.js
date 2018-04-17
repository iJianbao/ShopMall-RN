/**
 * Created by kk on 2018/4/9.
 */
import React, {
    Component
} from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Platform,
} from 'react-native';

import CommObject from './CommObject';
//导出定义的TopScrollView
export default class TopScrollView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            currentIndex: 0,
            scrollList: [
                <View style={[TopStyleSheet.cont_view1,
                     {width: CommObject.ScreenWidth, height: this.props.frame.height}]}/>,

                <View style={[TopStyleSheet.cont_view2,
                      {width: CommObject.ScreenWidth, height: this.props.frame.height}]}/>,

                <View style={[TopStyleSheet.cont_view3,
                      {width: CommObject.ScreenWidth, height: this.props.frame.height}]}/>
            ]
        };
        this.onScrollAnimationEnd = this.onScrollAnimationEnd.bind(this);
        this.dotClick = this.dotClick.bind(this);
      }

      //点击item
    dotClick(index) {
          // index = CommObject.IsIos?index:(index+1);
          console.log('dotClick', index, Platform.OS);
        this.setState({
            currentIndex:index
        }, ()=>{
            let ScrollView = this.refs.topScrollView;
            const currentX = this.state.currentIndex*CommObject.ScreenWidth;
            ScrollView.scrollResponderScrollTo({x:currentX, animated:true})
        });
    }

    //ScrollView的一些方法
    onScrollAnimationEnd (e) {
        console.log('onScrollAnimationEnd');
        // 求出当前的页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / CommObject.ScreenWidth);
        // currentPage = CommObject.IsIos?currentPage:(currentPage+1);
        // 更新状态机
        this.setState({
            currentIndex: currentPage
        });
    };

      render() {
          const dotList = this.state.scrollList.map((elem,index)=>{
              //只是遍历，不可以修改原来的元素，返回一个新的数组
              let off_index = CommObject.IsIos?0:1;
              return (
                  <Text onPress={()=>this.dotClick(index)}
                        key={index}
                        style={[TopStyleSheet.cont_dotStyle,
                            {backgroundColor:this.state.currentIndex===index+off_index?"#ffffff":"#00ff00"}]}>
                  </Text>
              )
          });
          //取位置
          let frame = {marginLeft: this.props.frame.x,
              marginTop: this.props.frame.y,
              width: this.props.frame.width,
              height: this.props.frame.height};
          return (
              <View style={[TopStyleSheet.top_view, frame]}>
                  <Text style={TopStyleSheet.top_text}>
                      ScrollView轮播图
                  </Text>
                  <ScrollView style={{flex: 1, backgroundColor: '#ad1111'}}
                      contentContainerStyle={TopStyleSheet.top_scrollView}
                      ref="topScrollView"
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      pagingEnabled={true}
                      onMomentumScrollEnd={this.onScrollAnimationEnd}>

                      {this.state.scrollList}
                  </ScrollView>
                  <View style={TopStyleSheet.cont_dotView}>{dotList}</View>
              </View>
          )
      }
}

const TopStyleSheet = StyleSheet.create({
    top_view: {
        backgroundColor: '#f1d433',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top_text: {
        fontSize: 15,
        color:'#000',
        textAlign:'center',
    },
    cont_view1: {
        flex: 1,
        backgroundColor: '#ffdd00',
    },
    cont_view2: {
        flex: 1,
        backgroundColor: '#ff00aa',
    },
    cont_view3: {
        flex: 1,
        backgroundColor: '#aa0000',
    },
    top_scrollView: {
        marginBottom: 20,
    },
    cont_dotStyle: {
        width:12,
        height:12,
        borderRadius: 6,
        marginRight:10,
    },
    cont_dotView:{
        flexDirection:'row',
        position:'absolute',
        bottom:10
    }
});