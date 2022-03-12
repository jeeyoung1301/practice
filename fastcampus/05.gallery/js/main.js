window.addEventListener("load", () => {
	const grid = new Isotope("section", {
		itemSelector: "article",
		columWidth: "article",
		transitionDuration: "0.5s",
	});

	const btns = document.querySelectorAll("main ul li");
	btns.forEach((btn, index) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();

			for (let btn of btns) btn.classList.remove("on");
			e.currentTarget.classList.add("on");

			const btn_a = e.currentTarget.querySelector("a");
			const a_href = btn_a.getAttribute("href");

			grid.arrange({ filter: a_href });
		});
	});
});
