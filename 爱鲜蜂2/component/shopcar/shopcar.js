/**
 * Created by YZTC on 2017/6/23.
 */
angular.module("shopcarModule",[])
    .config(["$routeProvider",function ($routeProvider) {
        $routeProvider
            .when("/shopcar",{
                templateUrl:"component/shopcar/shopcar.html",
                controller:"shopcarCtrl",
                css:"component/shopcar/shopcar.css"
            })
    }])
    .controller("shopcarCtrl",["$scope",function ($scope) {
        $scope.name="name3";
    }])