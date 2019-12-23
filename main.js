function hamburgerMenu() {
	const menu = document.querySelector(".wrapper");
	const hambmenu = document.querySelector(".hamburgers-menu");
	const body_element = document.querySelector("body");

	const btn_open = document.querySelector(".hamburger-menu__btn");
	btn_open.addEventListener("click", e => {
		e.preventDefault();
		menuOpen();
	});

	const btn_close = document.querySelector(".hamburger-menu__btn--cross");
	btn_close.addEventListener("click", e => {
		e.preventDefault();
		menuClose();
	});


	//  hambmenu.addEventListener("keydown", e => {
	//  e.preventDefault();
	// 	if (e.keyCode === 27) {
	//  		menuClose();
	//  	}
	//  });

	function menuOpen() {
		menu.style.visibility = "hidden";
		hambmenu.style.visibility = "visible";
		hambmenu.style.height = "100vh";
		hambmenu.style.overflow = "hidden";
		body_element.style.overflow = "hidden";
	}

	function menuClose() {
		menu.style.visibility = "visible";
		hambmenu.style.visibility = "hidden";
		hambmenu.style.height = "0";
		body_element.style.overflow = "auto";
	}
}
hamburgerMenu();


function controlHorizAcco() {
	const element = document.querySelector(".team__list");
	element.addEventListener('click', e => {
		e.preventDefault();
		target = e.target;
		let flagLink = target.classList.contains("team__member");
		if (flagLink) {
			curActive = element.querySelector(".team__item--active");
			flagActive = target.parentElement.classList.contains("team__item--active");
			if (curActive) {
				const activeDesc = curActive.querySelector(".team__desc");
				activeDesc.style.height = "0px";
				curActive.classList.remove("team__item--active");
			}
			if (!curActive || curActive.querySelector(".team__member") !== target) {
				target.parentElement.classList.add("team__item--active");
				let currentDesc = target.parentElement.querySelector(".team__desc");
				currentDesc.style.height = currentDesc.scrollHeight + "px";
			}
		}
	})
};
controlHorizAcco();

function calculateWidth() {
	let windowWidth = window.innerWidth;
	let links = document.querySelectorAll(".menu-burgers__link");
	let reqWidth = windowWidth - links[0].offsetWidth * links.length;
	return reqWidth > 550 ? 550 : reqWidth;
};

function controlVertAcco() {
	const element = document.querySelector(".menu-burgers__list");
	let body = document.querySelector("body");
	element.addEventListener('click', e => {
		e.preventDefault();
		target = e.target;
		curActive = element.querySelector(".menu-burgers__item--active");
		if (target.classList.contains("menu-burgers__link") || target.classList.contains("menu-burgers__link-text")) {
			if (curActive) {
				let activeText = curActive.querySelector(".menu-burgers__text");
				activeText.style.width = "0px";
				curActive.classList.remove("menu-burgers__item--active");

			}
			if (!curActive || curActive !== target.closest(".menu-burgers__item")) {

				let activeText = target.closest(".menu-burgers__item").querySelector(".menu-burgers__text");
				if (body.offsetWidth > 480) {
					activeText.style.width = calculateWidth() + "px";

				} else {
					activeText.style.width = "100%";
				}
				target.closest(".menu-burgers__item").classList.add("menu-burgers__item--active");
			}
		} else {
			let activeText = curActive.querySelector(".menu-burgers__text");
			activeText.style.width = "0px";
			curActive.classList.remove("menu-burgers__item--active");

		}

	})
};
controlVertAcco();

function closeVertAcco() {
	let body = document.querySelector("body");
	body.addEventListener('click', e => {
		e.preventDefault();
		let ActiveAcco = document.querySelector(".menu-burgers__item--active");
		if (ActiveAcco && !e.target.closest(".menu-burgers__list")) {
			let activeText = ActiveAcco.querySelector(".menu-burgers__text");
			activeText.style.width = "0px";
			ActiveAcco.classList.remove("menu-burgers__item--active");
		}
	})
};


function sliderMenu() {
	const left = document.querySelector(".burgers__arrow--left");
	const right = document.querySelector(".burgers__arrow--right");
	const slider = document.querySelector(".burgers__list");
	const itemCount = document.querySelectorAll(".burgers__item").length;
	let pos = 0;
	let flag = true;

	function setTransform(ms = 100) {
		if (flag) {
			flag = false;
			let pos_transform = (-pos * slider.offsetWidth) + "px";
			slider.style.transform = "translateX(" + pos_transform + ")";
			setTimeout(() => flag = true, ms);
		}
	}

	function prev() {
		pos == 0 ? pos = itemCount - 1 : pos--;
		setTransform(200);
	}

	function next() {
		pos == itemCount - 1 ? pos = 0 : pos++;
		setTransform(200);
	}

	left.addEventListener('click', e => {
		e.preventDefault();
		prev();
	});

	right.addEventListener('click', e => {
		e.preventDefault();
		next();
	});

	window.addEventListener('resize', e => {
		e.preventDefault();
		setTransform(0);
	});

}

sliderMenu();
// Оверлей



function createOverlay(template) {
	const fragment = document.createElement('div');

	fragment.innerHTML = template;

	const overlayElement = fragment.querySelector(".overlay");
	const closeElement = fragment.querySelector(".overlay__close");
	const contentElementname = fragment.querySelector(".overlay__content-name");
	const contentElementdesc = fragment.querySelector(".overlay__content-desc");
	const contentElement = fragment.querySelector(".overlay__content");


	overlayElement.addEventListener("click", e => {
		if (e.target === overlayElement) {
			e.preventDefault();
			closeElement.click();
		}
	});

	closeElement.addEventListener("click", (e) => {
		e.preventDefault();
		document.body.removeChild(overlayElement);
	});

	return {
		open() {
			document.body.appendChild(overlayElement);

		},
		close() {
			closeElement.click();
		},

		setContent(content, content1) {
			contentElementname.innerHTML = content;
			contentElementdesc.innerHTML = content1;
		},
		setContent1(content) {
			contentElement.innerHTML = content;
		}
	};
}

const reviewButton = document.querySelector(".reviews__list"); //btn--reviews
const formButton = document.querySelector(".form__button").firstElementChild; //btn--forms

reviewButton.addEventListener('click', e => {
	e.preventDefault();
	if (e.target.classList.contains("btn--reviews")) {
		const name = e.target.parentElement.querySelector(".reviews__name").innerHTML;
		const desc = e.target.parentElement.querySelector(".reviews__desc").innerHTML;
		let template = document.querySelector("#overlayTemplate").innerHTML;
		let overlay = createOverlay(template);
		overlay.open();
		overlay.setContent(name, desc);
	}
});

formButton.addEventListener('click', e => {
	e.preventDefault();
	sendForm();
});

function sendForm() {
	const myForm = document.querySelector(".form__content");
	const myData = new FormData();
	const formName = myForm.elements.name.value;
	const formPhone = myForm.elements.phone.value;
	const formComment = myForm.elements.comment.value;

	myData.append('name', formName);
	myData.append('phone', formPhone);
	myData.append('comment', formComment);
	myData.append('to', "grum1972@gmail.com");

	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
	xhr.send(myData);
	xhr.responseType = 'json';
	let message = "Ошибка отправки";
	xhr.addEventListener('load', () => {
		if (xhr.response.status === 1) {
			message = xhr.response.message;
			let template = document.querySelector("#overlayTemplate1").innerHTML;
			let overlay = createOverlay(template);
			overlay.setContent1(message);
			overlay.open();
		}
	});
	return message;
};




// Карты яндекс

ymaps.ready(init);
var placemarks = [{
		latitude: 59.97,
		longitude: 30.35,
		hintContent: 'Ул.Литераторов, 19',
		balloonContent: 'Это красивая метка'
	},
	{
		latitude: 59.90,
		longitude: 30.27,
		hintContent: 'Малый проспект, 8',
		balloonContent: 'Это красивая метка'
	},
	{
		latitude: 59.93,
		longitude: 30.34,
		hintContent: 'наб. реки Фонтанки, д.56',
		balloonContent: 'Это красивая метка'
	},
	{
		latitude: 59.98,
		longitude: 30.26,
		hintContent: 'наб. реки Фонтанки, д.56',
		balloonContent: 'Это красивая метка'
	}
]

function init() {
	var myMap = new ymaps.Map("map", {
		center: [59.94, 30.32],
		zoom: 12,
		control: ['zoomControl'],
		behaviors: ['drag']
	});
	placemarks.forEach(function (obj) {
		var myPlacemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
			hintContent: obj.hintContent,
			balloonContent: obj.balloonContent
		}, {
			iconLayout: 'default#image',
			iconImageHref: './img/icons/map-marker.svg',
			iconImageSize: [46, 57],
			iconImageOffset: [0, 0]
		});
		myMap.geoObjects.add(myPlacemark);
	});
}



$(document).ready(function () {

	// OPS

	const sections = $('.section');
	const display = $('.maincontent');
	let inScroll = false;

	const md = new MobileDetect(window.navigator.userAgent);
	const isMobile = md.mobile();

	const performTransition = sectionEq => {
		if (inScroll === false) {
			inScroll = true;
			const posititon = sectionEq * -100;

			sections
				.eq(sectionEq)
				.addClass("active-section")
				.siblings()
				.removeClass("active-section");

			$(display).css({
				transform: `translateY(${posititon}%)`
			});

			setTimeout(() => {
				inScroll = false;
				$('.dot-menu__item')
					.eq(sectionEq)
					.addClass("dot-menu__dot--active")
					.siblings()
					.removeClass("dot-menu__dot--active");

			}, 500)
		}
	}

	const scrollToSection = direction => {
		const activeSection = sections.filter('.active-section');
		const nextSection = activeSection.next();
		const prevSection = activeSection.prev();

		if (direction === "next" && nextSection.filter(".section").length) {
			performTransition(nextSection.index());
		}

		if (direction === "prev" && prevSection.length) {
			performTransition(prevSection.index());
		}
	}
	// performTransition(3);

	$(window).on("wheel", e => {
		const deltaY = e.originalEvent.deltaY;

		if (deltaY > 0) {
			scrollToSection("next");

		}
		if (deltaY < 0) {
			scrollToSection("prev");
		}

	});

	$(window).on("keydown", e => {
		const tagName = e.target.tagName.toLowerCase();
		if (tagName !== "input" && tagName !== "textarea") {
			switch (e.keyCode) {
				case 38:
					scrollToSection("prev");
					break;
				case 40:
					scrollToSection("next");
					break;
			}
		}
	});

	$('[data-scroll-to]').on('click', e => {
		e.preventDefault();
		const $this = $(e.currentTarget);
		if ($this.hasClass('hamburger-menu__link')) {
			$(".wrapper").css({
				visibility: "visible",
			});
			$("hamburgers-menu").css({
				visibility: "hidden",
				height: "0"
			});
			$("body").css({
				owerflow: "auto"
			});
		};
		const target = $this.attr('data-scroll-to');
		performTransition(target);
	});

	if (isMobile) {
		$("body").swipe({
			swipe: function (
				event,
				direction,
				distance,
				duration,
				fingerCount,
				fingerData
			) {
				const scrollDirection = direction === 'up' ? 'next' : 'prev';
				scrollToSection(scrollDirection);
			}
		});
	}

	let video;
	let durationControl;
	let soundControl;
	let intervalId;
	const MAX_SOUND_VALUE = 10;
	$().ready(function () {
		video = document.getElementById("player");
		video.addEventListener("click", playStop);


		let playButtons = $(".play");
		playButtons.on("click", playStop);

		let micControl = $("#mic");
		micControl.on("click", soundOf);

		durationControl = document.getElementById("durationLevel");
		durationControl.addEventListener('mousedown', stopInterval);
		durationControl.addEventListener('mouseup', setVideoDuration);

		durationControl.min = 0;
		durationControl.value = 0;

		soundControl = document.getElementById("micLevel");
		soundControl.addEventListener('mouseup', changeSoundVolume);

		soundControl.min = 0;
		soundControl.max = MAX_SOUND_VALUE;

		video.addEventListener('ended', function () {
			$(".player__main-btn").toggleClass("player__main-btn--active");
			video.currentTime = 0;
		}, false);

	});

	function playStop() {
		$(".player__main-btn").toggleClass("player__main-btn--active");
		durationControl.max = video.duration;
		if (video.paused) {
			video.play();
			intervalId = setInterval(updateDuration, 1000 / 66);

		} else {
			stopInterval()
		}
	}

	function stopInterval() {
		video.pause();
		clearInterval(intervalId);
	}

	function setVideoDuration() {
		video.currentTime = durationControl.value;
		intervalId = setInterval(updateDuration, 1000 / 66);

		if (video.paused) {
			video.play();
			$(".player__main-btn").addClass("player__main-btn--active");
		}

	}

	function updateDuration() {
		durationControl.value = video.currentTime;
	}

	function soundOf() {
		if (video.volume === 0) {
			video.volume = soundLevel;
			soundControl.value = soundLevel * MAX_SOUND_VALUE;
		} else {
			soundLevel = video.volume;
			video.volume = 0;
			soundControl.value = 0;
		}
	}

	function changeSoundVolume() {
		video.volume = soundControl.value / MAX_SOUND_VALUE;
	}

	function menuComposition() {
		let compositions = $(".burgers__composition");
		compositions.on("mouseover", e => {
			$(".burgers__composition-menu").css({
				visibility: "visible"
			});
		});
		compositions.on("mouseout", e => {
			$(".burgers__composition-menu").css({
				visibility: "hidden"
			});
		});
	}

	menuComposition();

});