// 「bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい」という意味（全体）
// 5行目
// body:selector,html:method,<h1>Hello jQuery!!</h1>:parameter
$(document).ready(function () {
  $('body').html('<h1>Hello jQuery!!</h1>');
});
