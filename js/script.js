var modal_map = document.querySelector('.map-popup');
var map_close = document.querySelector('.map-popup .modal-close');
var map_open = document.querySelector('.contacts a');


var modal_add = document.querySelector('.modal-add');
var add_open = document.querySelectorAll('.pay-green'); //все кнопки в массив
var add_close = document.querySelector('.modal-add .modal-close');
var button_pay = document.querySelector('.button-pay');
var button_next = document.querySelector('.button-next');



var len_green = add_open.length; //длина массива

//открытие модального окна добавлено в корзину

if (add_open) { //если окно карточки по наведению открыто

for (let i = 0; i < len_green; i++) {  //смотреть все карточки
add_open[i].onclick=function (evt) { //по клику на зеленую кнопку
	evt.preventDefault();
	modal_add.classList.add('modal-show'); //показать модальное окно добавлено в корзину
}}


add_close.onclick=function (evt) {
	evt.preventDefault();
	modal_add.classList.remove('modal-show'); //по нажатию крестика закрыть окно
}

button_pay.onclick=function(evt) {
	evt.preventDefault();
		modal_add.classList.remove('modal-show');
}

button_next.onclick=function(evt) {
	evt.preventDefault();
		modal_add.classList.remove('modal-show');
}}


var modal_write = document.querySelector('div[class="modal-write"]');




var write_open = document.querySelector('.write-us');
var write_close = document.querySelector('#writeid');


if (write_open) {
write_open.onclick=function (evt) {
	evt.preventDefault();
	modal_write.classList.add('modal-show');
}

write_close.onclick=function (evt) {
	evt.preventDefault();
	modal_write.classList.remove('modal-show');
}
}






if (map_open) {
map_open.onclick=function (evt) {
	evt.preventDefault();
	modal_map.classList.add('modal-show');
}

map_close.onclick=function (evt) {
	evt.preventDefault();
	modal_map.classList.remove('modal-show');
}
}


var modal_buy = document.querySelectorAll('.catalog-item');
var modal_buy_show = document.querySelectorAll('.catalog-item-selected');	

var lengh=modal_buy.length;


for (let i = 0; i < lengh; i++) {
modal_buy[i].onmouseover= function () {
	modal_buy_show[i].classList.add('catalog-item-selected-show');
}
}

for (let i = 0; i < lengh; i++) {
modal_buy[i].onmouseout= function () {
	modal_buy_show[i].classList.remove('catalog-item-selected-show');
}
}
