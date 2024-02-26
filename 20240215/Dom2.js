window.onload = function () {
    let test1 = document.querySelector("#text");
    // 1. id
    console.dir(test1);
    // 2. getAttribute(속성)
    // 3. setAttribute(속성, 속성 값)
    // 4. hsdAttribute(속성)
    // 5. removeAttribute(속성)

    let btnColor = document.querySelector("button");
    btnColor.addEventListener('click', function(){

        let textColor = document.querySelector("h1");
        textColor.style.color("red");
    })

    // 2. classList
    // - add, remove, toggle, contains, replace, item

    // innerHTML 말고 다른 방법으로 컨텐츠를 추가 할 수 있는 방법
    // 1. DOM 직접 조작
    // - DOM 조작 관련 노드
    //   createElement : 태그명을 파라미터로 전달하여 요소 생성
    //   appendChild : 파라미터로 전달한 노드를 마지막 자식요소로 DOM트리에 추가
    //   removeChild : 삭제

    // 2. insertAdjecentHTML()
};

