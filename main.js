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
closeVertAcco() ;
