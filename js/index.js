(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //首页tab切换
    $('#tab').on('click','li',function () {
        var $this = $(this);
        $this.addClass('active').siblings().removeClass('active');
        if($this.text() == '我是新生'){
            $('.xs').show();
            $('.ls').hide();
        }else if($this.text() == '我是老生'){
            $('.ls').show();
            $('.xs').hide();
        }
    });
    //首页三种套餐卡点击跳转
    $('.swiper-slide').on('click',function () {
        if($(this).hasClass('swiper-slide-active')){
            window.location.href = 'http://service.bj.10086.cn/m/num/num/xyyxNumConfig/showFontPage.action?xyyxNumConfigVO.campusCode=999999999999999999';
        }
    });
    //首页立即选号跳转
    $('#addJump').on('click',function () {
        window.location.href = 'http://service.bj.10086.cn/m/num/num/xyyxNumConfig/showFontPage.action?xyyxNumConfigVO.campusCode=999999999999999999'
    });
    //老生ICON跳转
    $('#lsJump').on('click',function () {
        window.location.href = '';
    });
    //二级页面6个尊享特权领取立即办理按钮
    $('#zx1').on('click',function () {
        $('#aa').fadeIn();
        showMask();
    });
    $('#zx2').on('click',function () {
        $('#bb').fadeIn();
        showMask();
    });
    $('#zx3').on('click',function () {
        $('.tc5').fadeIn();
        showMask();
    });
    //OFO
    $('#zx4').on('click',function () {
        $('#cc').fadeIn();
        showMask();
    });
    $('#zx5').on('click',function () {
        $('#dd').fadeIn();
        showMask();
    });
    $('#zx6').on('click',function () {
        $('#ee').fadeIn();
        showMask();
    });
    $('#zx7').on('click',function () {
        $('#ff').fadeIn();
        showMask();
    });
    $('#zx8').on('click',function () {
        $('#gg').fadeIn();
        showMask();
    });
    //弹窗X关闭
    $('.tcClose').on('click',function () {
        $('.tc').fadeOut();
        hideMask();
    });
    //验证弹窗确定按钮
    $('#aa div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        //验证通过
        $('#yi').fadeIn();
        //验证失败
        //$('.tc3').fadeIn();
    });
    $('#bb div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        //验证通过
        $('#suc1').fadeIn();
        //验证失败
        //$('.tc3').fadeIn();
    });
    $('#suc1 div:last-child').on('click',function () {
        window.location.href = 'http://service.bj.10086.cn/m/llzz2017/llzz2017.action';
    });
    $('#cc div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        //验证通过
        $('#suc3').fadeIn();
        //验证失败
        //$('.tc3').fadeIn();
    });
    //OFO
    $('#suc3 div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        $('.tcOfo').fadeIn();
    });
    $('.tcOfo div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    //中青旅
    $('#dd div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        //验证通过
        $('#suc4').fadeIn();
        //验证失败
        //$('.tc3').fadeIn();
    });
    $('#suc4 div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        $('.tc4').fadeIn();
    });
    $('.tc4 div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    //中国银行
    $('#ee div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        //验证通过
        $('#suc5').fadeIn();
        //验证失败
        //$('.tc3').fadeIn();
    });
    //美团
    $('#ff div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        //验证通过
        $('#suc6').fadeIn();
        //验证失败
        //$('.tc3').fadeIn();
    });
    //微回收
    $('#gg div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        //验证通过
        $('#suc7').fadeIn();
        //验证失败
        //$('.tc3').fadeIn();
    });
    $('#suc5 div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        $('.tc6').fadeIn();
    });
    $('#suc6 div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        $('.tc7').fadeIn();
    });
    $('#suc7 div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        $('.tc8').fadeIn();
    });
    $('.tc6 div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    $('.tc7 div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    //视频特权验证弹窗验证按钮
    $('.tc5 div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        //验证通过
        $('#suc2').fadeIn();
        //验证失败
        //$('.tc3').fadeIn();
    });
    $('#suc2 div:last-child').on('click',function () {
        window.location.href = 'index2.html';
    });
    //第一个同学圈验证弹窗确定按钮
    $('#yi div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });


    //失败弹窗确定按钮
    $('.tc3 div:last-child').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    //视频特权领取
    $('#tvWrap').on('click','li',function () {
        var $this = $(this);
        if($('#tvWrap').find('li.active').length < 3){
            $this.addClass('active');
            window.setTimeout(function () {
                window.location.href = 'index3.html';
            },500);
        }
    });
    //激活码页返回按钮
    $('.goBack').on('click',function () {
        history.go(-1);
    });
    //新老生go按钮跳转到二级页面
    $('.gogogo').on('click','li',function () {
        window.location.href = 'index1.html';
    });
    //手机终端
    $(".zdBtn").on('click',function () {
        window.location.href = 'http://service.bj.10086.cn/m/jsp/mobileXyyx2017/index.jsp';
    });
    //更多推荐跳转
    //1元阅读包
    $('.tj1').on('click',function () {
        window.location.href = 'http://service.bj.10086.cn/m/jsp/2017410/hydyyydb/index.jsp';
    });
    //云视界
    $('.tj2').on('click',function () {
        window.location.href = ' http://appdownload.taipan.bja.bcs.ottcn.com/bjxiaoyuanyingxiao/';
    });
    //NFC
    $('.tj3').on('click',function () {
        window.location.href = 'https://www.17jifen.com/hd/huayisummary/joy/joy_nfc_active2.html';
    });
    //和多号
    $('.tj4').on('click',function () {
        window.location.href = 'http://sc.bj.chinamobile.com/andmore/index.html';
    });
    
    //复制激活码
    function Copy(str){
        var save = function(e){
            e.clipboardData.setData('text/plain', str);
            e.preventDefault();
        }
        document.addEventListener('copy', save);
        document.execCommand('copy');
        document.removeEventListener('copy',save);
        alert('复制成功！如无法粘贴请手动复制再进行粘贴！');
    }
    $('.copyBtn').on('click', function(){
        Copy($(this).prev('li').find('p.keyCode').text());
    });
    //查看活动规则按钮
    $('#hdgzBtn').on('click',function () {
        $('.hdgzBox').slideToggle();
    });
    //查询兑换码按钮
    $('#queryCodeBtn').on('click',function () {
        window.location.href = 'index4.html';
    });
    //激活码查询页隐藏展开切换
    $('#fir div:first-child').on('click',function () {
        $('.sec').css('display','none');
        $('.thir').css('display','none');
        $('.fou').css('display','none');
        $('.fif').css('display','none');
        $('.six').css('display','none');
        $('.sev').css('display','none');
        $('.eig').css('display','none');
        $('.nin').css('display','none');
        $('.ten').css('display','none');
        $('.fir').slideToggle();
    });
    $('#sec div:first-child').on('click',function () {
        $('.fir').css('display','none');
        $('.thir').css('display','none');
        $('.fou').css('display','none');
        $('.fif').css('display','none');
        $('.six').css('display','none');
        $('.sev').css('display','none');
        $('.eig').css('display','none');
        $('.nin').css('display','none');
        $('.ten').css('display','none');
        $('.sec').slideToggle();
    });
    $('#thir div:first-child').on('click',function () {
        $('.sec').css('display','none');
        $('.fir').css('display','none');
        $('.fou').css('display','none');
        $('.fif').css('display','none');
        $('.six').css('display','none');
        $('.sev').css('display','none');
        $('.eig').css('display','none');
        $('.nin').css('display','none');
        $('.ten').css('display','none');
        $('.thir').slideToggle();
    });
    $('#fou div:first-child').on('click',function () {
        $('.sec').css('display','none');
        $('.thir').css('display','none');
        $('.fir').css('display','none');
        $('.fif').css('display','none');
        $('.six').css('display','none');
        $('.sev').css('display','none');
        $('.eig').css('display','none');
        $('.nin').css('display','none');
        $('.ten').css('display','none');
        $('.fou').slideToggle();
    });
    $('#fif div:first-child').on('click',function () {
        $('.sec').css('display','none');
        $('.thir').css('display','none');
        $('.fou').css('display','none');
        $('.fir').css('display','none');
        $('.six').css('display','none');
        $('.sev').css('display','none');
        $('.eig').css('display','none');
        $('.nin').css('display','none');
        $('.ten').css('display','none');
        $('.fif').slideToggle();
    });
    $('#six div:first-child').on('click',function () {
        $('.sec').css('display','none');
        $('.thir').css('display','none');
        $('.fou').css('display','none');
        $('.fif').css('display','none');
        $('.fir').css('display','none');
        $('.sev').css('display','none');
        $('.eig').css('display','none');
        $('.nin').css('display','none');
        $('.ten').css('display','none');
        $('.six').slideToggle();
    });
    $('#sev div:first-child').on('click',function () {
        $('.sec').css('display','none');
        $('.thir').css('display','none');
        $('.fou').css('display','none');
        $('.fif').css('display','none');
        $('.six').css('display','none');
        $('.fir').css('display','none');
        $('.eig').css('display','none');
        $('.nin').css('display','none');
        $('.ten').css('display','none');
        $('.sev').slideToggle();
    });
    $('#eig div:first-child').on('click',function () {
        $('.sec').css('display','none');
        $('.thir').css('display','none');
        $('.fou').css('display','none');
        $('.fif').css('display','none');
        $('.six').css('display','none');
        $('.sev').css('display','none');
        $('.fir').css('display','none');
        $('.nin').css('display','none');
        $('.ten').css('display','none');
        $('.eig').slideToggle();
    });
    $('#nin div:first-child').on('click',function () {
        $('.sec').css('display','none');
        $('.thir').css('display','none');
        $('.fou').css('display','none');
        $('.fif').css('display','none');
        $('.six').css('display','none');
        $('.sev').css('display','none');
        $('.eig').css('display','none');
        $('.fir').css('display','none');
        $('.ten').css('display','none');
        $('.nin').slideToggle();
    });
    $('#ten div:first-child').on('click',function () {
        $('.sec').css('display','none');
        $('.thir').css('display','none');
        $('.fou').css('display','none');
        $('.fif').css('display','none');
        $('.six').css('display','none');
        $('.sev').css('display','none');
        $('.eig').css('display','none');
        $('.nin').css('display','none');
        $('.fir').css('display','none');
        $('.ten').slideToggle();
    });

    //视频特权验证弹窗获取验证码按钮
    $('#getCode').on('click',function () {
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $(this).text('60 S');
            var setTime;
            var time=parseInt($("#getCode").text());
            setTime=setInterval(function(){
                if(time<=0){
                    clearInterval(setTime);
                    $('#getCode').removeClass('active');
                    $('#getCode').text('获取验证码');
                    return;
                }
                time--;
                $("#getCode").text(time+' S');
            },1000);
        }
    });
    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
    }
});
