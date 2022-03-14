window.addEventListener("load", () => {
	//Isotope 실행 옵션
	const grid = new Isotope("section", {
		itemSelector: "article",
		columWidth: "article",
		transitionDuration: "0.5s",
	});

	const btns = document.querySelectorAll("main ul li");

	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", (e) => {
			e.preventDefault();

			const isOn = e.currentTarget.classList.contains("on");
			if (isOn) return;

			activation(e);
		});
	}

	function activation(e) {
		for (let j = 0; j < btns.length; j++) {
			btns[j].classList.remove("on");
		}
		e.currentTarget.classList.add("on");

		const btn_a = e.currentTarget.querySelector("a");
		const a_href = btn_a.getAttribute("href");

		grid.arrange({ filter: a_href });
	}

	//for문_필터링
	// for (let i = 0; i < btns.length; i++) {
	// 	btns[i].addEventListener("click", (e) => {
	// 		e.preventDefault();
	// 		for (let j = 0; j < btns.length; j++) {
	// 			btns[j].classList.remove("on");
	// 		}
	// 		btns[i].classList.add("on");

	// 		const btn_a = e.currentTarget.querySelector("a");
	// 		const a_href = btn_a.getAttribute("href");

	// 		grid.arrange({ filter: a_href });
	// 	});
	// }

	//forEach문_필터링
	// btns.forEach((btn, index) => {
	// 	btn.addEventListener("click", (e) => {
	// 		e.preventDefault();

	// 		for (let btn of btns) btn.classList.remove("on");
	// 		e.currentTarget.classList.add("on");

	// 		const btn_a = e.currentTarget.querySelector("a");
	// 		const a_href = btn_a.getAttribute("href");

	// 		grid.arrange({ filter: a_href });
	// 	});
	// });
});
