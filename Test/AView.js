/**
 * Created by kk on 2018/4/13.
 */
import React from 'react';
import {
    View,
    Text,
} from 'react-native';
export default class A extends React.Component {
    //这里定义界面的title
    static navigationOptions = {
        title: '首页A'//对页面的配置
    };

    render () {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#aaaaff'}}>
                <Text onPress={()=>this.push_b()}>
                    点击
                </Text>
            </View>
        )
    }

    //跳转到B界面
    push_b() {
        const { navigate } = this.props.navigation;
        navigate('B', { title: '页面B', des: '说明' })
    }
}