$(document).ready(function() {

    $('.popup-with-form').magnificPopup( {    
        closeOnBgClick: true
    });


    $('.header-search').click(function(){
        $('.header-search-form').addClass('header-search-form-active');   
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $('.header-search'); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.header-search-form').removeClass('header-search-form-active'); // скрываем его
        }
    });


});


