/**
 * Created by YZTC on 2017/6/20.
 */
define(['zepto','text!component/home/home.html','css!component/home/home.css','css!component/home/swiper.min.css','swiper'],function ($,html) {
    return{
        render:function(){
            $('#contener').html(html);

        },
        ajax:function () {
            $.getJSON('json/home.json',function (res) {

                slider(res.data.act_info);
            });
            function slider(arr) {
                for(var i=0;i<arr.length;i++){
                    var obj =arr[i];

            showslider2(0);
            function showslider2(x) {
                    // var obj2=arr[x][0];
                    for(var j=0;j<arr[x].act_rows.length;j++){
                        var obj3=arr[x].act_rows[j];
                    var imgs = $("<div class='swiper-slide'><img src='' alt=''></div>");
                    imgs.find("img").attr('src',obj3.activity.img);
                    $(".swiper-wrapper").append(imgs);
                    }
                }
                var mySwiper = new Swiper ('.swiper-container', {
                    // direction: 'vertical',
                    loop: true,
                    autoplay:1000,
                    // // 如果需要分页器
                    pagination: '.swiper-pagination',
                    // // 如果需要前进后退按钮
                    // nextButton: '.swiper-button-next',
                    // prevButton: '.swiper-button-prev'
                });
              if(arr[i].type=="icon"){
               for(var k=0;k<obj.act_rows.length;k++){
                    var obj4 = obj.act_rows[k];
                  var twoText = $("<li><p class='pImg'><img src='' alt=''></p><p class='pText'></p></li>");
                  twoText.find(".pImg>img").attr("src",obj4.activity.img);
                  twoText.find('.pText').text(obj4.activity.name);
                  $("#two-text>ul").append(twoText);
                     }
                  }
                // if(arr[i].type=="hide"){
                //     for(var g=0;g<obj.act_rows.length;g++){
                //         var obj5 = obj.act_rows[g];
                //     var threeImg =  $("<li><img src='' alt=''></li>");
                //     threeImg.find("img").attr("src",obj5.activity.img);
                //     $("#three-text>ul").append(threeImg);
                //          }
                //      }

                    // if(arr[i].type=="brand"){
                    //     var headImg = $("<img src=''>");
                    //     headImg.attr('src',obj.act_rows.head_img);
                    //     $("#four-text").append(headImg);
                    //     // for(var n=0;n<obj.act_rows.length;n++){
                    //     //     var obj6=obj.act_rows[n];
                    //     //
                    //     // }
                    // }

                    if(arr[i].type=="category"){
                        for(var m=0;m<obj.act_rows.length;m++){
                            var obj6 = obj.act_rows[m];
                            var lastImg = $("<li><p class='p1'></p><img src='' alt=''></li>");
                            lastImg.find('p').eq(0).text(obj6.category_detail.name);
                            lastImg.find("img").attr('src',obj6.activity.img);
                            $("#last-text>ul").append(lastImg);
                            for(var q=0;q<obj6.category_detail.goods.length;q++){
                                var obj7 = obj6.category_detail.goods[q];
                             var objDivs =  $("<div class='list-divs'><img src='' alt=''><p></p><p></p><p></p></div>")
                                objDivs.find("img").attr('src',obj7.img);
                                objDivs.find("p").eq(0).text(obj7.keywords);
                                // objDivs.find("p").eq(1).text(obj7.long_name);
                                objDivs.find("p").eq(2).text("￥："+obj7.market_price);
                                $("#last-text>ul>li").append(objDivs);
                            }
                        }
                    }
                 }
            }
        }
    }
});