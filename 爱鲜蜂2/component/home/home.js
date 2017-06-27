/**
 * Created by YZTC on 2017/6/23.
 */
angular.module("homeModule",[])
.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
        .when("/home",{
            templateUrl:"component/home/home.html",
            controller:"homeCtrl",
            css:"component/home/home.css"
        })
}])
.controller("homeCtrl",["$scope","$http","$timeout",function ($scope,$http,$timeout) {

    $http.get("json/home.json").then(function (res) {

        $scope.swiperData = res.data.data.act_info[0].act_rows;
        $timeout(function () {
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                autoplay:500,
                // 如果需要分页器
                pagination: '.swiper-pagination'
            })
        },1000)
            $scope.module= res.data.data.act_info[1].act_rows;
            // $scope.shop  = res.data.data.act_info[2].act_rows;
            $scope.textImg = res.data.data.act_info[3];
            $scope.textObj = res.data.data.act_info[3].act_rows;
            // $scope.textObj2 =res.data.data.act_info[4].act_rows;
             $scope.textObj2 =res.data.data.act_info[4].act_rows[0].act_rows;
             $scope.textObj3 =res.data.data.act_info[4].act_rows[1].act_rows;
             $scope.textObj4 =res.data.data.act_info[4].act_rows[2].act_rows;
             $scope.textObj5 =res.data.data.act_info[4].act_rows[3].act_rows;
             $scope.textObj6 =res.data.data.act_info[5].act_rows;

    })
}])