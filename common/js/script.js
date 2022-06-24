$(function(){

  //トレーナーのタブエリア
  //--------------------------------------------
    //スタッフエリアを非表示
    $('.grid--staff').hide();
    //タブをクリック
    $(".tab-navigation__link").click(function(){
    //一度全てのコンテンツを非表示
      $(".grid").hide();
    //選択されたコンテンツを再表示  
      $($(this).attr("href")).show();
    //現在の付与しているクラスを削除
      $(".tab-navigation__link--active").removeClass("tab-navigation__link--active");
    //選択されたタブにクラスを追加
      $(this).addClass("tab-navigation__link--active");
  
      return false;
    })


  //swiper
  //--------------------------------------------
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

});