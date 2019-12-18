function hamburgerMenu() {
	const menu = 	document.querySelector(".wrapper");
	const	hambmenu = 	document.querySelector(".hamburgers-menu");
	const body_element = document.querySelector("body");	
	const btn_open = document.querySelector(".hamburger-menu__btn");
	btn_open.addEventListener("click",e => {
		e.preventDefault();
		menuOpen();
	});

	const btn_close = document.querySelector(".hamburger-menu__btn--cross");
	btn_close.addEventListener("click",e => {
		e.preventDefault();
		menuClose();
	});

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
	element.addEventListener('click',e => {
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
			currentDesc.style.height = currentDesc.scrollHeight+"px";
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
 	element.addEventListener('click',e => {
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
 	body.addEventListener('click',e => {
		 e.preventDefault();
		 let ActiveAcco = document.querySelector(".menu-burgers__item--active");
 		 if (ActiveAcco && !e.target.closest(".menu-burgers__list")){
			 let activeText = ActiveAcco.querySelector(".menu-burgers__text");
			activeText.style.width = "0px";
			ActiveAcco.classList.remove("menu-burgers__item--active");	
		}	
 	})
 };
//closeVertAcco() ;



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
			slider.style.transform = "translateX("+pos_transform+")";
			setTimeout(() => flag = true ,ms);
	}
}

	function prev() {
		pos == 0 ? pos = itemCount -1 : pos--;
		setTransform(200);
	}	

	function next() {
		pos ==  itemCount -1 ? pos = 0 : pos++;
		setTransform(200);
	}

	left.addEventListener('click',e => {
		e.preventDefault();
		prev();
	});

	right.addEventListener('click',e => {
		e.preventDefault();
		next();
	});

	window.addEventListener('resize',e => {
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
  
  
  overlayElement.addEventListener("click",e => {
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
    setContent(content,content1) {
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

reviewButton.addEventListener('click',e => {
	e.preventDefault();
	if (e.target.classList.contains("btn--reviews")) {
	const name = e.target.parentElement.querySelector(".reviews__name").innerHTML; 
	const desc = e.target.parentElement.querySelector(".reviews__desc").innerHTML; 
	let template = document.querySelector("#overlayTemplate").innerHTML;
  let overlay = createOverlay(template);
  overlay.open();
  overlay.setContent(name, desc);}
});

formButton.addEventListener('click',e => {
	e.preventDefault();
	let template = document.querySelector("#overlayTemplate1").innerHTML;
	let overlay = createOverlay(template);
	overlay.open();
  overlay.setContent1(sendForm());
 });

 function sendForm() {
	const myForm = document.querySelector(".form__content");
	const myData = new FormData();
	const formName = myForm.elements.name.value;
	const formPhone = myForm.elements.phone.value;
	const formComment = myForm.elements.comment.value;
	
	myData.append('name',formName);
	myData.append('phone', formPhone);
	myData.append('comment',formComment);
	myData.append('to',"grum1972@gmail.com");
		
	const xhr = new XMLHttpRequest();
	xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
	xhr.send(myData);
	xhr.responseType = 'json';
	let message = "Ошибка отправки";
	xhr.addEventListener('load', () => {
				if (xhr.response.status === 1) {
			message = xhr.response.message;
		}	
	});
	return message;
 };