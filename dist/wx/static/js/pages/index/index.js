var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([5],{63:function(e,t,n){n(64),n(65)},64:function(e,t){},65:function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),o=i(r),c=n(17),f=i(c),u=n(18),l=i(u),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),d=n(71),m=i(d),h=n(72),p=i(h),b=n(1),g=i(b),w=function(){function e(){a(this,e),this.data={winHeight:0,imgSrc:n(73),testArray:new Array(40).fill(),news:p.default,activeLabel:""},this.computed={},this.watch={},this.methods={getTabNews:function(){var e=this;(0,l.default)({url:"/api/tabs/news"}).then(function(t){if(0!==t.errno)return void(0,f.default)({message:"位置错误："+t.msg,duration:2e3});e.news=e.news.slice().concat(t.data)},function(e){(0,f.default)({message:"请求错误："+JSON.stringify(e),duration:2e3})})},handleItemClick:function(e){var t=e.currentTarget.dataset.url;m.default.openUrl(t)},handleScrollBottom:function(){}}}return s(e,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(e){var t=this;(0,o.default)().then(function(e){t.winHeight=Number(e.viewportHeight)})}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}();t.default=new w,t.default=g.default.createPage(t.default).getOptions()},71:function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),o=function(){function e(){i(this,e)}return a(e,[{key:"openUrl",value:function(e){return navigator.push({url:e})}}]),e}();t.default=new o,(0,r.copyProtoProperty)(t.default)},72:function(e,t){e.exports=[{title:"Chameleon 官方网站",from:"官方",time:"01/01",url:"https://cmljs.org",imgSrc:"https://static.didialift.com/pinche/gift/resource/WX20190305-213027@2x-84a74b76713979d63698af83d3d6d798.png"},{title:"Chameleon 原理首发：其它跨多端统一框架都是假的？",from:"开源中国",time:"02/24",url:"https://www.oschina.net/question/3820517_2303724",imgSrc:"https://static.didialift.com/pinche/gift/resource/31f9c9aeaab3cf415a85e6f0f623ec8e265-21991586c68bf528cfb24a61f49fd88a.jpg"},{title:"重磅开源 Chameleon(变色龙)让各种小程序一锅端！",from:"简书",time:"02/04",url:"https://www.jianshu.com/p/782e28d34586",imgSrc:"https://static.didialift.com/pinche/gift/resource/1551780844327-0bab512239d2d2fedee3b0ba4354d6d0.jpg"},{title:"滴滴开源跨平台统一 MVVM 框架 Chameleon",from:"前端之巅",time:"01/28",url:"https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247490363&idx=1&sn=f29d5605f5ff78b5b9901c183471f669&chksm=f951ae78ce26276edb290c364c2b5465601df8f891ec0c056375d48f921044247b3dba979b2e&mpshare=1&",imgSrc:"https://static.didialift.com/pinche/gift/resource/xf3nrmq87w-48e89cd9b298a818488d6af6228a27e5.jpeg"},{title:"跨端解决方案 Chameleon 正式发布并开源",from:"github",time:"01/01",imgSrc:"https://static.didialift.com/pinche/gift/resource/WX20190305-211735@2x-011a9ee468621346aa7653addd6bd308.png",url:"https://github.com/didi/chameleon"}]},73:function(e,t,n){e.exports=n.p+"static/img/chameleon_83ee00e.png"}},[63]);