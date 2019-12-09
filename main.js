const btn_open = document.getElementsByClassName("hamburger-menu__btn");
btn_open[0].addEventListener("click",menuOpen);

const btn_close = document.getElementsByClassName("hamburger-menu__btn--cross");
btn_close[0].addEventListener("click",closeOpen);

function menuOpen() {
	let menu = 	document.getElementsByClassName("wrapper");
	let hambmenu = 	document.getElementsByClassName("hamburgers-menu");
	menu[0].style.display = "none";
	hambmenu[0].style.display = "flex";
	hambmenu[0].style.height = "100vh";
	hambmenu[0].style.overflow = "hidden";
}

function closeOpen() {
	let menu = 	document.getElementsByClassName("wrapper");
	let hambmenu = 	document.getElementsByClassName("hamburgers-menu");
	menu[0].style.display = "block";
	hambmenu[0].style.display = "none";
}