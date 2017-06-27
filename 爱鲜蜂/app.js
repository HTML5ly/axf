/**
 * Created by YZTC on 2017/6/20.
 */
require.config({
   paths:{
       'jquery':'js/libs/jquery',
       'css':'js/libs/css',
       'text':'js/libs/text',
       'underscore':'js/libs/underscore',
       'backbone':'js/libs/backbone',
       'zepto':'js/libs/zepto',
       'swiper':'component/home/swiper.min',
       'home':'component/home/home',
       'supermarket':'component/supermarket/supermarket'
   }
});
require(['backbone','zepto'],function (Backbone, $) {
    document.documentElement.style.fontSize=innerWidth/16+'px';
    window.onresize=function () {
        document.documentElement.style.fontSize=innerWidth/16+'px';
    }
    var Router = Backbone.Router.extend({
        routes:{
            '':'home',
            'home':'home',
            'supermarket':'supermarket',
            'shopcar':'shopcar',
            'mine':'mine'
        },
        home:function () {
            require(['home'],function (home) {
                home.render();
                home.ajax();
            })
        },
        supermarket:function () {
            require(['supermarket'],function (supermarket) {
                supermarket.render();
                supermarket.ajax();
            })
        }
    })
    var router =new Router();
    Backbone.history.start();

});