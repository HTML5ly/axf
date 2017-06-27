/**
 * Created by YZTC on 2017/6/23.
 */
angular.module("supermarketModule",[])
    .config(["$routeProvider",function ($routeProvider) {
        $routeProvider
            .when("/supermarket",{
                templateUrl:"component/supermarket/supermarket.html",
                controller:"supermarketCtrl",
                css:"component/supermarket/supermarket.css"
            })
    }])
    .controller("supermarketCtrl",["$scope","$http",function ($scope,$http) {
        $http.get("json/category.json").then(function (res){
            console.log(res);
            $scope.leftObj = res.data.data.categories;
            $scope.rightObj2 =  res.data.data.products[104749];
            $scope.categoryObj=$scope.leftObj[0].cids.name;
            var rightObj2;
              $scope.ck=function (id,name){
              $scope.rightObj2 =res.data.data.products[id];
              $scope.categoryObj=name;
              rightObj2= $scope.rightObj2;
        };

        var arr = [];
        $scope.ck2=function (id) {
            //清空数组
            arr=[];
            //forEach循环
           angular.forEach(rightObj2,function (data) {
               //判断id 是否相等
               if(id==data.child_cid){
                   arr.push(data);
                   $scope.rightObj2=arr;
               }
           })
        };
    $scope.ck3=function () {
    };

        //隐藏与显现
            $scope.shows1=false;
            $scope.toggle1=function () {
                $scope.shows1=!$scope.shows1;
            }
            $scope.shows2=false;
            $scope.toggle2=function () {
                $scope.shows2=!$scope.shows2;
            }
        })

    }]);
