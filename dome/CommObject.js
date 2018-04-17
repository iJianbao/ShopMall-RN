/**
 * Created by kk on 2018/4/11.
 */
import {Platform} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
let IsIos = Platform.OS === 'ios';

module.exports.Dimensions = Dimensions;
module.exports.ScreenWidth = ScreenWidth;
module.exports.ScreenHeight = ScreenHeight;
module.exports.ScreenScale = ScreenScale;

let underlayColor = '#c1c1c1';
module.exports.underlayColor = underlayColor;

module.exports.IsIos = IsIos;