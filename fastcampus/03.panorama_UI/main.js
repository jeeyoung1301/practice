const a = document.querySelectorAll(".article");
const stopCircle = document.querySelector("#circle");

for (let i = 0; i < a.length; i++) {
	a[i].addEventListener("mouseover", () => {
		stopCircle.style.animationPlayState = "paused";
	});
	a[i].addEventListener("mouseout", () => {
		stopCircle.style.animationPlayState = "running";
	});
}
