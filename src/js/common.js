$(document).ready(function() {

    /* Всплывающие меню */

	$(".toggle-menu").click(function () {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
	});
	$(function () {
		$('.toggle-menu').click(function () {
			$(".main-menu").removeClass('d-block')
		})
	});
	/* Установление высоты и ширины блока */
	$(".section-content .info-item").equalHeights(); /* 1 секция (НЕЗАВИСИМАЯ ОЦЕНКА ИМУЩЕСТВА) */
	$(".s1-bottom .info-item").equalHeights(); /* раздел 1 секции */
    /* Поочередная открытие карт */
	$(".section-4").waypoint(function() {
		$(".section-4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});
	/* анимация 5 секции svg */
	$(".section-5").waypoint(function () {
		$(".section-5 .tc-item").each(function (index) {
			var ths = $(this);
			setTimeout(function () {
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg-"+ index
				});
				ths.removeClass(".tc-content").addClass("tc-content-on");
			}, 500 * index);
		});

	}, {
		offset: "20%"
	});
	/* Поочередная открытие карт 6 */
	$(".section-6").waypoint(function() {
		$(".section-6 .team").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-off").addClass("team-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});
	/* Карусель */
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
	})

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".homesect .section-bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});