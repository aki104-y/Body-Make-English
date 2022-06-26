$(function () {

  //フェードイン(ふわっと)表示
  //--------------------------------------------
  $(window).scroll(function () {
    $(".fadein").each(function () {
      // 要素の位置を取得 
      var elemPos = $(this).offset().top;
      // スクロール位置を取得
      var scroll = $(window).scrollTop();
      // 画面幅を取得（画面の下側に入ったときに動作させるため）
      var windowHeight = $(window).height(); 
      if (scroll > elemPos - windowHeight + 100) {
        // 要素位置までスクロール出来たときに動作する
        $(this).addClass("fadein-scroll");
      }
    });
  });
  jQuery(window).scroll();

  //トレーナーのタブエリア
  //--------------------------------------------
  //スタッフエリアを非表示
  $('.grid--staff').hide();
  //タブをクリック
  $('.tab-navigation__link').click(function () {
    //一度全てのコンテンツを非表示
    $('.grid').hide();
    //選択されたコンテンツを再表示  
    $($(this).attr('href')).show();
    //現在の付与しているクラスを削除
    $('.tab-navigation__link--active').removeClass('tab-navigation__link--active');
    //選択されたタブにクラスを追加
    $(this).addClass('tab-navigation__link--active');
    //選択されたタブにクラスを追加&削除
    $('.tab-card').removeClass('show').addClass('show');
  
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