/*서브페이지_소개_*/
$(function(){
    // 메인메뉴 열기
    $('.btn_toggle').on('click',function(){
      $('#gnb').show();
    });
    // 메인메뉴 닫기
    $('.btn_close').on('click',function(){
      $('#gnb').hide();
    });
});