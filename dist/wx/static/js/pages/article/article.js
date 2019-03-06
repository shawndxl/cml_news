var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([12],{

/***/ "../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/chameleon.js\"}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/article/article.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getSystemInfo/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/showToast/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/get/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var First = function () {
    function First() {
        _classCallCheck(this, First);

        this.data = {
            winHeight: 0,
            title: '',
            from: '',
            time: '',
            imgSrc: '',
            content: ''
        };
        this.computed = {};
        this.watch = {};
        this.methods = {
            goback: function goback() {
                // cml.showToast({
                //     message: 'goback'
                // })
            }
        };
    }

    _createClass(First, [{
        key: 'beforeCreate',
        value: function beforeCreate(res) {
            var _this = this;

            var id = res.id;
            if (!id) return;

            (0, _index6.default)({
                url: '/api/articles',
                data: {
                    id: id
                }
            }).then(function (res) {
                if (res.errno !== 0) {
                    (0, _index4.default)({
                        message: res.msg,
                        duration: 2000
                    });
                    return;
                }
                var data = res.data;
                _this.title = data.title;
                _this.from = data.from;
                _this.time = data.time;
                _this.imgSrc = data.imgSrc || 'https://static.didialift.com/pinche/gift/resource/xf3nrmq87w-48e89cd9b298a818488d6af6228a27e5.jpeg';
                _this.content = data.content;
            }, function (err) {
                (0, _index4.default)({
                    message: JSON.stringify(err),
                    duration: 2000
                });
            });
        }
    }, {
        key: 'created',
        value: function created() {}
    }, {
        key: 'beforeMount',
        value: function beforeMount() {}
    }, {
        key: 'mounted',
        value: function mounted() {
            var _this2 = this;

            (0, _index2.default)().then(function (info) {
                _this2.winHeight = Number(info.viewportHeight);
            });
        }
    }, {
        key: 'beforeDestroy',
        value: function beforeDestroy() {}
    }, {
        key: 'destroyed',
        value: function destroyed() {}
    }]);

    return First;
}();

exports.default = new First();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/article/article.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/article/article.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/article/article.cml");
var __cml__script = __webpack_require__("../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/chameleon.js\"}!../../.nvm/versions/node/v8.11.4/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/article/article.cml");


/***/ })

},["./src/pages/article/article.cml"]);