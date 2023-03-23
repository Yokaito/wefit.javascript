function refactorMenu() {
  $('.btn-group-vertical').css('flex-direction', 'row');
  $('.btn-group-vertical').css('align-itens', 'center');
  $('.btn-group-vertical').css('gap', '10px');
  $('.btn-group-vertical button').css('width', 'max-content');
  $('.btn-group-vertical button').css('border-radius', '0.25rem');
}

function refactorHeader() {
  $('.jumbotron > h1,p').css('text-align', 'end');
  $('.jumbotron > h1,p').addClass('text-white');
  $('.jumbotron > a').css('display', 'flex');
  $('.jumbotron > a').css('max-width', 'max-content');
  $('.jumbotron > a').css('margin-left', 'auto');
  $('.jumbotron > a').removeClass('btn-primary');
  $('.jumbotron > a').addClass('btn-success');
  $('.jumbotron').css('background-color', '#6b757e');
}

function addItens() {
  $('.list-group').append('<li class="list-group-item">Quarto Item</li>');
  $('.list-group').append('<li class="list-group-item">Quinto Item</li>');
  $('.list-group > li:nth-child(1)').removeClass('active');
  $('.list-group > li:nth-child(4)').addClass('active');
}

function refactorCards() {
  $('.card p').removeClass('text-white');
  $('.card p').css('text-align', 'start');
  var headerContainer = $('.cards > div:nth-child(1)').clone();
  var item1 = $('.cards > div:nth-child(2)').clone();
  var item2 = $('.cards > div:nth-child(3)').clone();
  var item3 = $('.cards > div:nth-child(4)').clone();
  var item4 = $('.cards > div:nth-child(5)').clone();
  $('.cards').empty();
  $('.cards').append(headerContainer);
  $('.cards').append(item4);
  $('.cards').append(item1);
  $('.cards').append(item3);
  $('.cards').append(item2);
  $('.cards > div:nth-child(3) a').removeClass('btn-primary');
  $('.cards > div:nth-child(3) a').addClass('btn-success');
}

$(document).ready(function () {
  refactorMenu();
  refactorHeader();
  addItens();
  refactorCards();
});
