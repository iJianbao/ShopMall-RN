/**
 * Created by kk on 2018/4/13.
 */
import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class B extends React.Component {
    //接收上一个页面传过来的title显示出来
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#faaaff'}}>
                <Text onPress={()=>this.pop_a()}>
                    返回{this.props.navigation.state.params.des}
                </Text>
            </View>
        )
    }

    pop_a() {
        this.props.navigation.goBack();
    }
}