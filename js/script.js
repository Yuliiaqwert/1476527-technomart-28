var modal_map = document.querySelector('.map-popup');
var map_close = document.querySelector('.map-popup .modal-close');
var map_open = document.querySelector('.contacts a');
var modal_add = document.querySelector('.modal-add');
var add_open = document.querySelectorAll('.pay-green'); //все кнопки в массив
var add_close = document.querySelector('.modal-add .modal-close');
var button_pay = document.querySelector('.button-pay');
var button_next = document.querySelector('.button-next');
var basket = document.querySelector('.basket'); //ищем класс корзины
var bookmark = document.querySelector('.bookmark'); //ищем класс закладок
var button_book = document.querySelectorAll('.bookmark-green'); //все кнопки в массив
var basket_value = document.querySelector('.basket span').textContent;
var basket_num = Number(basket_value);
var book_value = document.querySelector('.bookmark span').textContent;
var book_num = Number(book_value);
var pass = document.querySelector('[name=email]');
var text = document.querySelector('[name=textletter]');
var isStorageSupport = true;
var storage = localStorage.getItem("login");
var modal_write = document.querySelector('.modal-write-us');
var write_open = document.querySelector('.write-us');
var write_close = document.querySelector('#writeid');
var login = document.querySelector('[name=login]');


try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}



var len_green = add_open.length; //длина массива

//открытие модального окна добавлено в корзину

if (add_open) { //если окно карточки по наведению открыто

    for (let i = 0; i < len_green; i++) { //смотреть все карточки
        add_open[i].onclick = function(evt) { //по клику на зеленую кнопку
            evt.preventDefault();
            modal_add.classList.add('modal-show'); //показать модальное окно добавлено в корзину
            basket.classList.add('basket-show'); //красная кнопка корзина

            basket_num = basket_num + 1; //добавить количество товара

            document.querySelector('.basket span').textContent = String(basket_num); //записать обратно в спан
        }
    }


    for (let i = 0; i < len_green; i++) { //смотреть все карточки
        button_book[i].onclick = function(evt) { //по клику на зеленую кнопку
            evt.preventDefault();
            bookmark.classList.add('basket-show'); //красная кнопка корзина

            book_num = book_num + 1; //добавить количество товара
            document.querySelector('.bookmark span').textContent = String(book_num); //записать обратно в спан
        }
    }


    add_close.onclick = function(evt) {
        evt.preventDefault();
        modal_add.classList.remove('modal-show'); //по нажатию крестика закрыть окно

    }

    button_pay.onclick = function(evt) {
        evt.preventDefault();
        modal_add.classList.remove('modal-show');
    }

    button_next.onclick = function(evt) {
        evt.preventDefault();
        modal_add.classList.remove('modal-show');
    }
}




if (write_open) {
    write_open.onclick = function(evt) {
        evt.preventDefault();
        modal_write.classList.add('modal-show');
        login.focus();

        if (storage) {
            login.value = storage;
            pass.focus();
        } else {
            login.focus();
        }

    }

    write_close.onclick = function(evt) {
        evt.preventDefault();
        modal_write.classList.remove('modal-show');
        modal_write.classList.remove("modal-error");
    }
}




if (map_open) {
    map_open.onclick = function(evt) {
        evt.preventDefault();
        modal_map.classList.add('modal-show');
    }

    map_close.onclick = function(evt) {
        evt.preventDefault();
        modal_map.classList.remove('modal-show');
    }
}


var modal_buy = document.querySelectorAll('.catalog-item');
var modal_buy_show = document.querySelectorAll('.catalog-item-selected');

var lengh = modal_buy.length;


for (let i = 0; i < lengh; i++) {
    modal_buy[i].onmouseover = function() {
        modal_buy_show[i].classList.add('catalog-item-selected-show');
    }
}

for (let i = 0; i < lengh; i++) {
    modal_buy[i].onmouseout = function() {
        modal_buy_show[i].classList.remove('catalog-item-selected-show');
    }
}


if (write_open) {
    var form = modal_write.querySelector("form");
    form.addEventListener("submit", function(evt) {
        evt.preventDefault();


        if (!login.value || !pass.value || !text.value) {
            evt.preventDefault();

            modal_write.classList.remove("modal-error");
            modal_write.offsetWidth = modal_write.offsetWidth;
            modal_write.classList.add("modal-error");
        } else {
            localStorage.setItem("login", login.value);
            form.submit();
        }
    });
}

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {

        if (write_open) {

            if (modal_write.classList.contains("modal-show")) {
                evt.preventDefault();
                modal_write.classList.remove("modal-show");
                modal_write.classList.remove("modal-error");
            }


            if (modal_map.classList.contains("modal-show")) {
                evt.preventDefault();
                modal_map.classList.remove("modal-show");
            }

        }


        if (modal_add.classList.contains("modal-show")) {
            evt.preventDefault();
            modal_add.classList.remove("modal-show");
        }

    }
});