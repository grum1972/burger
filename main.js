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