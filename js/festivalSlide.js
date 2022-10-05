define(function () {

  function main(env, opt, file) {

    var $set = {
      status: true,
      type: 'newYear',
      debug: true
    }

    $.extend($set, opt);

    var $env = $(env);
    if ($set.status) {
      $env.addClass('is-' + $set.type);
      $env.append('<div class="closeBtn"><a href="#">關閉動畫</a></div>')
    }
    else
      return false;

    $('.closeBtn a').on('click', function (evt) {
      evt.preventDefault();
      $env.removeClass('is-' + $set.type);
      $(this).remove();
    });



    if ($set.debug) {
      console.log('預設值:', $set);
      console.log('檔案 ' + file + '.js 已順利執行。');
    }
  }

  return main;
});