/**
 * Created by kk on 2018/4/13.
 */
import React from 'react';

import AView from './AView';
import BView from './BView';

//引用导航栏组件
import {StackNavigator} from 'react-navigation';

//定义导航栏
export const SimpleApp = StackNavigator({
    A: { screen: AView },
    B: { screen: BView },
});
export default class Nav extends React.Component {
    render() {
        return <SimpleApp/>;
    }
}