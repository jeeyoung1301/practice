const articles = document.querySelectorAll("article");
const aisde = document.querySelector("aside");
const btnClose = aisde.querySelector(".btnClose");

articles.forEach((article) => {
	article.addEventListener("mouseover", (e) => {
		e.currentTarget.querySelector("video").play();
	});
	article.addEventListener("mouseleave", (e) => {
		e.currentTarget.querySelector("video").pause();
	});

	article.addEventListener("click", (e) => {
		const tit = e.currentTarget.querySelector("h2").innerText;
		const con = e.currentTarget.querySelector("p").innerText;
		const vidSrc = e.currentTarget
			.querySelector("video")
			.getAttribute("src");

		aisde.querySelector("h2").innerText = tit;
		aisde.querySelector("p").innerText = con;
		aisde.querySelector("video").setAttribute("src", vidSrc);
		aisde.classList.add("on");
	});

	btnClose.addEventListener("click", () => {
		aisde.classList.remove("on");
	});
});
