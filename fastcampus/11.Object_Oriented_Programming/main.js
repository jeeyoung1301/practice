// const box1 = document.querySelector(".box1");
// const box2 = document.querySelector(".box2");
// const box3 = document.querySelector(".box3");

// box1.addEventListener("click", (e) => {
// 	chageBg(box1);
// });
// box2.addEventListener("click", (e) => {
// 	chageBg(box2);
// });
// box3.addEventListener("click", (e) => {
// 	chageBg(box3);
// });

// function chageBg(selector) {
// 	selector.style.backgroundColor = "hotpink";
// }

//es6  버전
// class Box {
// 	constructor(selector) {
// 		this.el = document.querySelector(selector);
// 		this.el.addEventListener("click", () => this.chageBg(this.el));
// 	}
// 	chageBg(selector) {
// 		selector.style.backgroundColor = "hotpink";
// 	}
// }

// new Box(".box1");
// new Box(".box2");
// new Box(".box3");

//es5 버전
function Box(selector) {
	this.el = document.querySelector(selector);
	this.el.addEventListener(
		"click",
		function () {
			this.chageBg(this.el);
		}.bind(this)
	);
	// 이벤트문 안쪽에서만 this값이 바뀌고 바깥의 this 값을 안쪽의 this값으로 고정시킴
}
Box.prototype.chageBg = function (selector) {
	selector.style.backgroundColor = "hotpink";
};

new Box(".box1");
