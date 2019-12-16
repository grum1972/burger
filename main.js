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

// function controlVertAcco() {
// 	const element = document.querySelector(".team__list");
// 	const items	= document.querySelectorAll(".team__item");
// 	element.addEventListener('click',e => {
// 	e.preventDefault();
// 	target = e.target;
// 	let pt = target.parentElement;
// 	console.log(pt);
// 	let currentDesc = pt.querySelector(".team__desc");
// 	if ((pt.classList.contains("team__item")&&(target.classList.contains("team__member")))) {
// 		if (!pt.classList.contains("team__item--active")) {
// 				items.forEach(function(item) {
				
// 					currentDesc.style.height = "0px";
// 					item.classList.remove("team__item--active");
// 			})
// 			pt.classList.add("team__item--active");
// 			currentDesc.style.height = currentDesc.scrollHeight +"px";
// 		} else {
// 			currentDesc.style.height = "0px";
// 			pt.classList.remove("team__item--active");
			
// 		}
// 	}
// })
	
// }
// controlVertAcco();

 function controlVertAcco1() {
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
controlVertAcco1();

function controlHorAccor() {
	const element = document.querySelector(".menu-burgers__list");
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
controlHorAccor();