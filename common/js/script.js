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
  });

  //横スクロールでアイコンが消える
  //--------------------------------------------
  $(".price-cards").scroll(function () {
    // scrollLeftメソッドの結果を表示
    if ($(this).scrollLeft() > 20) {
      $(".price-card__scroll").fadeOut();
    }
  });

  //アコーディオン
  //--------------------------------------------
  $('.accordion__title').on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle(200);
  });

  //スクロールするとヘッダーの背景色が追加
  //--------------------------------------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.header__inner').addClass('header__inner--active');
    } else {
      $('.header__inner').removeClass('header__inner--active');
    }
  });

  //ページトップボタンがふわっと出現
  //--------------------------------------------
  var $pageTop = $('.page-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });

  //ページトップへ戻る
  //--------------------------------------------
  $('.page-top').click(function () {
    $('body,html').animate({
      scrollTop: 0 //ページトップまでスクロール
    }, 500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });


  //背景色が伸びて出現
  //--------------------------------------------

  // 動きのきっかけの起点となるアニメーションの名前を定義
  function BgFadeAnime() {

    // 背景色が伸びて出現（左から右）
    $('.bgLRextendTrigger').each(function () { //bgLRextendTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('bgLRextend'); // 画面内に入ったらbgLRextendというクラス名を追記
      } else {
        $(this).removeClass('bgLRextend'); // 画面外に出たらbgLRextendというクラス名を外す
      }
    });

    // 文字列を囲う子要素
    $('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('bgappear'); // 画面内に入ったらbgappearというクラス名を追記
      } else {
        $(this).removeClass('bgappear'); // 画面外に出たらbgappearというクラス名を外す
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
});