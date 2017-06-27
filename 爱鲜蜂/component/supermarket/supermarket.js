/**
 * Created by YZTC on 2017/6/20.
 */
define(['zepto','text!component/supermarket/supermarket.html','css!component/supermarket/supermarket.css'],function ($, html) {
   return{
       render:function () {
           $("#contener").html(html);
       },
       ajax:function () {
           $.getJSON("json/category.json",function (res) {
                console.log(res);
                showleft(res.data.categories);
                showright(res.data.products['104749']);

               $("#left-list li").on("tap",function () {
                   $('#left-list li').removeClass('lable');
                   $('#left-list li').eq($(this).index()).addClass('lable');
                   showright(res.data.products[$(this).attr("index")]);

                   $("#li-one").on("tap",function () {
                       $("#classify").show();
                   });

                   $('#li-two').on("tap",function () {
                       $("#classify").hide();
                       $("#rank").show();
                   })
               })
           });

            function showleft(arr){

                for(var i=0;i<arr.length;i++){
                    var obj1=arr[i];
                    var lisObj = $("<li index='"+ obj1.id +"'></li>");
                    lisObj.text(obj1.name);
                    $("#left-list>ul").append(lisObj);
                    // $("#classify").html("");

                }
                        for(var j=0;j<$('#left-list li').eq($(this).index()).length;j++){
                            var obj2 =$('#left-list li').eq($(this).index())[j];
                            var spanObj = $("<span></span>");
                            spanObj.text(obj2.name);
                            $("#classify").append(spanObj);
                        }
            }
            function showright(arr2) {
                //每点击一次 清空
                $('#right-list').html('');
                for(var i=0;i<arr2.length;i++){
                    var obj = arr2[i];
                   var classify = $("<div class='out-divs'><img src='' alt=''><div class='in-divs'><p></p><p class='p2-text'><span></span><span></span></p><p></p><p></p></div></div>");
                   classify.find("img").attr("src",obj.img);
                    classify.find(".in-divs>p").eq(0).text(obj.name);
                    // classify.find(".in-divs>.p2-text>span").eq(0).
                    classify.find(".in-divs>p").eq(2).text(obj.specifics);
                    classify.find(".in-divs>p").eq(3).text("￥："+obj.partner_price);
                   $("#right-list").append(classify);
                }
            }
       }
   }
});