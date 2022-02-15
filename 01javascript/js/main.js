(function(){

    let yOffset = 0; // window.pageYOffset 대신 쓸 변수
    let prevScrollHeight = 0 // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 세션들의 스크롤 높이값의 합
    let currentScene = 0 // 현재 활성화 된(눈 앞에 보이는) 씬(scroll-section)

    const sceneInfo = [
        {
            //0
            type:'sticky',
            heightNum:5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight:0,
            objs:{
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            //1
            type:'normal',
            heightNum:5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight:0,
            objs:{
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            //2
            type:'sticky',
            heightNum:5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight:0,
            objs:{
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            //3
            type:'sticky',
            heightNum:5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight:0,
            objs:{
                container: document.querySelector('#scroll-section-3')
            }
        }
    ]

    function setLayout(){
        //각 스크롤 섹션의 높이 세팅
        for (let i=0; i < sceneInfo.length;i++){
            sceneInfo[i].scrollHeight=sceneInfo[i].heightNum*window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }

        yOffset = window.pageYOffset
        let totalScrollHeight =0;
        for (let i=0;i < sceneInfo.length; i++){
            totalScrollHeight = totalScrollHeight + sceneInfo[i].scrollHeight;
            // totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight >= yOffset){
                currentScene = i;
                break;
            }
            // 총 스크롤 높이가(totalScrollHeight) 브라우저 높이(pageYOffset)와 
            // 같거나 높으면 현재의 i를 currentScene으로 설정하고 멈춤 
        }
        document.body.setAttribute('id',`show-scene-${currentScene}`)
    }
    
    function scrollLoop(){ //현재 몇번째 씬이 활성화 중인지 판별
        prevScrollHeight = 0 //이전 스크롤세션들의 높이의 합 
        // currentScene : 현재 활성화된 씬
        for(let i=0;i<currentScene;i++){
            prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
        }

        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene++; // 다음 씬 활성화
            document.body.setAttribute('id',`show-scene-${currentScene}`)
        }
        if(yOffset < prevScrollHeight){
            if(currentScene === 0) return; // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
            currentScene--; //이전 씬 활성화
            document.body.setAttribute('id',`show-scene-${currentScene}`)
        }
        //각각 활성화될 때마다 body에 id="show-scene-currentScene$" 추가하여
        // sticky-elem가 보이도록 해줌
    }


    window.addEventListener('scroll',function(){
        yOffset = window.pageYOffset;
        scrollLoop();
    });
    //scroll하면 yOffset(pageYOffset)이랑 scrollLoop(현재 몇 번째 씬 활성화인지) 함수 실행

    window.addEventListener('load',setLayout);
    // 처음 load시 스크롤 섹션의 높이 세팅 // 이미지 소스까지 모두 로드되고 실행 / 이미지도 필요하고 로딩페이지 쓸거기 때문에 이거 씀
   
    //window.addEventListener('DOMContentLoaded',setLayout); 
    // html 객체들만 로드가 끝나면 바로 실행됨 -> 실행 시점이 빠름->많이 씀

    window.addEventListener('resize',setLayout);
    //창크기 조절하면(resize) setLayout(각 스크롤 섹션의 높이) 함수 실행


}) ();