/**
 * Created by YZTC on 2017/6/22.
 */
angular.module("axf",['ngRoute','angularCSS','homeModule','supermarketModule'])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .otherwise({redirectTo:'/'})
    // .when("/component",{
    //     templateUrl:"component/index.html",
    //     controller:"indexCtrl"
    //
    // })
}])
    // .controller("indexCtrl",["$scope",function ($scope) {
    //     $scope.isActive=function (i){
    //         $scope.i=i;
    //         console.log(11);
    //     }
    // }])