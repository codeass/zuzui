import {
    Platform,
    Dimensions
} from "react-native";
import Constants from 'expo-constants';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const statusBarHeight = Constants.statusBarHeight;
const deviceName = Constants.deviceName;
const platform = Platform.OS;
const isIPhoneX = platform === "ios" && (deviceHeight === 812 || deviceWidth === 812 || deviceHeight === 896 || deviceWidth === 896);

export default {
    platform,
    deviceName,
    deviceWidth,
    deviceHeight,
    statusBarHeight,
    isIPhoneX
}