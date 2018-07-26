import { loadWechatJSSDK, isWechat, getWechatConfig } from './tools';
import localData from '../localData/index';

function wxGetLocation() {
  return new Promise(async (resolve, reject) => {
    wx.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: function(res) {
        // var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90

        // var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        // var speed = res.speed; // 速度，以米/每秒计
        // var accuracy = res.accuracy; // 位置精度
        resolve(res);
      },

      fail: function(res) {
        resolve(null);
      },
    });
  });
}

// 微信分享 export default
export default function wechatGetLocation() {
  return new Promise(async resolve => {
    if (!isWechat) {
      // alert('不是微信浏览器');
      // 服务器渲染时也是非微信浏览器, 非微信浏览器 不进行微信地理位置的获取
      return;
    }
    // 同时获取 微信签名, 和 微信 JS-SDK
    const [wechatConfig] = await Promise.all([
      getWechatConfig(),
      loadWechatJSSDK(),
    ]);
    wx.config(wechatConfig); // 配置微信参数, 为 jsapi 授权
    // return new Promise(async (resolve, reject) => {}
    wx.ready(async () => {
      const res = await wxGetLocation();
      localData.set('location', res, 120); // 第一次进入页面存储到本地 两个小时之后过期
      resolve(res);
    });
  });
}
