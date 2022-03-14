const btn = document.querySelector("button");
const box = document.querySelector("#box");
let num = 0; //초기 수치값

btn.addEventListener("click", (e) => {
	requestAnimationFrame(move);
	//move: callback 함수를 인수로 넣기
});

function move() {
	if (num < 200) {
		//초기 수치값 = num
		num++;
		requestAnimationFrame(move);
		//move가 requestAnimationFrame 호출하면
		//다시 requestAnimationFramse이 move를 호출하고 반복
	} else {
		num = 200;
	}
	box.style.marginLeft = num + "px";
}

//버튼 클릭하면 move 실행되고 requestAnimaionFrame으로
//자기 자신을 반복 호출하고
//num이 200보다 커지면 margin-left: 200px 에서 멈춤
