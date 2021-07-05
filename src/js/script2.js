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


    $('form#callback_form').validate({
        rules: {
            phone: {
                required: true,
                telephone: true
            },
            msg: {
                maxlength: 200
            }
        }
    })




    if ($('.fotorama-custom').length) {
        FARBA.lazyLibraryLoad(
            'https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.min.css',
            () => {
                $('.fotorama-custom').fotorama({
                    maxwidth: '100%',
                    nav: 'thumbs',
                    thumbwidth: 168,
                    thumbheight: 112,
                    thumbmargin: 20,

                })
            }
        )
    }


});


