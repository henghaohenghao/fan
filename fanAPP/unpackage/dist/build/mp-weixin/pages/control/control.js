(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/control/control"],{"25ed":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return i}));var i={pageHead:function(){return a.e("components/page-head/page-head").then(a.bind(null,"57f0"))}},n=function(){var e=this,t=e.$createElement;e._self._c},c=[]},"383d":function(e,t,a){"use strict";(function(e){a("9f88");i(a("66fd"));var t=i(a("665a"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])},"665a":function(e,t,a){"use strict";a.r(t);var i=a("25ed"),n=a("86b1");for(var c in n)"default"!==c&&function(e){a.d(t,e,(function(){return n[e]}))}(c);var o,r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=s.exports},"7f68":function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=c(i("b336"));function c(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{title:"风扇控制",disabled:[!1,!1,!1,!0,!0,!0,!0,!0,!0,!0,!0,!1],newDeviceLoad:!1,searchLoad:!1,maskShow:!1,equipment:"",adapterState:{discovering:!1,available:!1},connected:!1,showMaskType:"device",servicesData:"",characteristicsData:"",valueChangeData:{},isStop:!0,list:[]}},onLoad:function(e){this.equipment=t.getStorageSync("deviceId"),this.servicesData=t.getStorageSync("serviceId"),this.characteristicsData=t.getStorageSync("characteristicId")},methods:{str2ab:function(e){for(var t=new ArrayBuffer(2*e.length),a=new Uint8Array(t),i=0,n=e.length;i<n;i++)a[i]=e.charCodeAt(i);return a},openGear:function(){var e={command:"3",method:!0};this.writeBLECharacteristicValue(e)},oneGear:function(){var e={command:"4",speed:"1"};this.writeBLECharacteristicValue(e)},twoGear:function(){var e={command:"4",speed:"2"};this.writeBLECharacteristicValue(e)},threeGear:function(){var e={command:"4",speed:"3"};this.writeBLECharacteristicValue(e)},offGear:function(){var e={command:"3",method:!1};this.writeBLECharacteristicValue(e)},writeBLECharacteristicValue:function(a){var i=this.equipment[0].deviceId,n=this.servicesData[0].uuid,c=this.characteristicsData[0].uuid;console.log(i),console.log(n),console.log(c),console.log(a);var o=JSON.stringify(a),r=this.str2ab(o);t.writeBLECharacteristicValue({deviceId:i,serviceId:n,characteristicId:c,value:r,success:function(e){console.log("写入成功")},fail:function(t){console.log("写入失败"),setTimeout((function(){thit.writeBLECharacteristicValue(e)}),100)}})},toWIFI:function(){t.navigateTo({url:"../WIFI/wifi",success:function(){console.log("跳转成功")},fail:function(e){console.log("跳转失败")}})},toBind:function(){var e=this,a=t.getStorageInfoSync("DeviceList");console.log(a),console.log(this.equipment[0]);for(var i=0,c=0;c++;c<a.length)a[i]==this.equipment[0].deviceId&&i++;if(0==i){var o=this.equipment[0].deviceId;console.log(this.equipment[0].deviceId);var r=this.equipment[0].name;console.log(this.equipment[0].name);var s=t.getStorageSync("UserName");console.log(s),t.request({url:n.default.hostUrl+"/UserDevice",method:"POST",data:{UserName:s,DeviceUUID:o,DeviceName:r},success:function(i){1==i.data.status?t.showToast({title:i.data.message,icon:"success",duration:1e3,success:function(){a.push(e.equipment[0].deviceId),t.setStorageSync("DeviceList")}}):t.showToast({title:i.data.message,icon:"error",duration:1e3})},fail:function(){console.log("传数据失败")}})}else t.showToast({title:"设备已经注册",duration:1e3})}}};a.default=o}).call(this,i("543d")["default"])},"86b1":function(e,t,a){"use strict";a.r(t);var i=a("7f68"),n=a.n(i);for(var c in i)"default"!==c&&function(e){a.d(t,e,(function(){return i[e]}))}(c);t["default"]=n.a}},[["383d","common/runtime","common/vendor"]]]);