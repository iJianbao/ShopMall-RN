/**
 * Created by kk on 2018/4/13.
 */
import React, {
    Component
} from 'react';

//push
import ProductInfoView from './ProductInfoVc/ProductInfoView';
import MainView from './MainView';
import HeartProductListView from './ProductInfoVc/HeartProductListView';

//引用导航栏组件
import {StackNavigator} from 'react-navigation';
//定义导航栏
export const SimpleApp = StackNavigator({
    MainView: { screen: MainView },
    ProductInfoView: { screen: ProductInfoView },
    HeartProductListView: {screen: HeartProductListView},
});
export default class RootView extends Component {
    render() {
        return <SimpleApp/>;
    }
}