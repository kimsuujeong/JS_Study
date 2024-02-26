// DOM Tree와 노드

// 문서 노드

// 요소 노드

// 속성노드(attribute node)

// 텍스트 노드

// 1. getElementById('id값')
//      id 속성값으로 '요소노드'를 '한개만'선택
//      복수개를 선택 하면 가장 마지막 요소만 리턴.

// console.dir(document.getElementsByClassName("red1"));

// 2. querySelector("CSS 생성자")
// ex) document.querySelector('#four')
// 선택자를 사용하여 요소노드를 단 1개만 선택

// 3. getElementsByClassName("클래스명")
// 여러개의 클래스를 선택하는 dom query

let el = document.getElementsByClassName('red1');
  
// for(i=0; i<el.length; i++){
//     el[i].className = "blue";
// }



// while(el.length=0){
//     el.length--;
//     el[el.length].className = "blue";
// }

// 1. parentNode
// id가 three인 요소를 el2라는 변수에 저장해주세요.
// el2변수의 글자색을 그레이 색으로 바꿔주세요

// const el2 = document.querySelector("#three");

// el2.style.color = "green";

// 2. firstchild, lastchild

const ul1 = document.querySelector("ul");
// 퀴즈
// ul태그의 맨처음, 맨 마지막 요소만
// 파란 글자로 바꾸세요(클래스 명을 변경해서.)
// 문제점 : 공백이나 개행도 인식하여 텍스트 노드로 취급

ul1.firstElementChild.className = "blue";
ul1.lastElementChild.className = "blue";

// 3. childNodes
//      텍스트 노드를 포함한 모든 자식 요소를 리턴
console.log(ul1.childNodes);
// 4. children
//      자식요소중에서 요소노드만 리턴
console.log(ul1.children)

// 텍스트 노드
// 1. 해당 텍스트 노드의 부모로 접근
// 2. firstchild를 사용하여 텍스트 노드로 접근
// 3. nodeValue 프로퍼티를 활용하여 텍스트를 얻어낸 후
//      수정할 값을 집어 넣는다

let txt1 = document.querySelector;

console.log(txt1.nodeName);

// nodeType
// 해당요소가 어떤 노드인지를 판별
// 요소노드 = 1
// 속성노드 = 2
// 텍스트노드 = 3
console.log(txt1.nodeType);

let txtResult = txt1.firstchild;
console.log(txtResult.nodeName);
console.log(txtResult.nodeType);
console.log(txtResult.nodeValue);

txtResult.nodeValue = "군침왕국";

// 속성노드
// 1. className
//  - 클래스 속성의 값을 얻거나 바꾸는 프로퍼티
//  - className 프로퍼티에 값을 할당하는 경우 class 속성이
//    존재하지 않으면 class 속성을 생성하고 지정된 값을 설정.
//  - class 속성값이 여러개 라면 공백으로 구분된 문자열이 리턴
//    split(' ') <--- 배열로 변경 후 사용.

// 2. classList
//  - add, remove, toggle, contains, replace, item

const el3 = document.querySelector('li');

[...el3].forEach(el => {
    if(el.className == 'rel3'){
        el.className = 'blue';
    }
});

[...el3].forEach(el => {
    if(el.classList.contains == 'blue'){
        el.clasList.replace = ('blue','red');
    }
});