$(document).ready(function() {

	/* Корректировка мало-пиксельных сдвигов (за счет некоторых шрифтов) для FireFox (не измен. высоту контейнеров)
	(как альтернатива @-moz-document - не проходящий валидацию) */
	if ( $.browser.mozilla ) {
		$('#slidePanel')
			.css({
				'height' : '34px', //+1px
				'padding-top' : '11px'//-1px
			});	
		$('.eventHead').css({'line-height' : '12px'});
		$('#tab2Text2Line1').css({'margin-top' : '55px'});
		$('#moreButt').css({'margin-top' : '1px'});
	}

//---------------------------

		//Установки для СлайдШоу
	$('#jQslides').cycle({
		prev : '#prevSlide',
		next : '#nextSlide',
		timeout : 5000,
		pause : 1,
		before : changeTitle //Вызов Ф-ии смены надписи
	});

});

	//Ф-ия смены надписи:
function changeTitle() {
	var SlideName = $(this).find('img').attr('alt');//Имя текущей Картинки
	var SlideHref = $(this).attr('href');//Содержимое атрибута ссылки (текущей Картинки)
	$('#slidePanel').text(SlideName).attr('href', SlideHref);//Замена текста и атрибута ссылки (на текущие данные)

		//Опция смены цвета шрифта для разных слайдов
	if( SlideName == "Powerful Products" ) {
		$('#slidePanel').css({'color' : '#647aa8'});
	} else if ( SlideName == "Cloud Computing" ) {
		$('#slidePanel').css({'color' : '#e4620d'});
	} else if ( SlideName == "Trusted Company" ) {
		$('#slidePanel').css({'color' : '#993333'});
	}
}
