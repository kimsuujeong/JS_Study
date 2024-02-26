var a='안늉';
console.log(a);

// var의 문제점
//1. 전역 변수
//   - 전역 변수다 보니까 변조가 너무 쉬움

// 문제 1 :369게임
// 숫자를 입력받아(prompt) 3의 배수에 속하면
// 콘솔에 박수 라는 문자를 출력
// 9에 배수라면 +33처럼 두번 박수를 치는 상황도
// 박수를 2번 출력하는 조건문을 만드세요

// 3의 배수? -> 맞으면 박수
// 9의 배수? -> 맞으면 박수 2번
// var game369 = prompt("369 숫자를 입력해 주세요");

var game369 = 5;
var backsu = game369/3;

if (game369/3 > 2){
       var backsu = 2;
}

if(game369%3 != 0){
    var backsu = 0;
    console.log("3의 배수가 아닙니다.");
}

for (step = 1; step <= backsu; step++) {
    console.log("박수");
}

    // for 연습
    // 다음의 값을 출력하려한다
    // 숫자1 : 0, 숫자2 : 0
    // 숫자1 : 0, 숫자2 : 1
    // 숫자1 : 0, 숫자2 : 2
    // 숫자1 : 0, 숫자2 : 3
    // 숫자1 : 1, 숫자2 : 0
    //           :
    //           :
    // 숫자1 : 3, 숫자2 : 3

    for(step1 = 0 ; step1 < 4; step1++){
        
        for (step2 = 0 ; step2 < 4; step2++){

            console.log("숫자1 : " + step1 + "," + " 숫자2: " + step2)

        }

    }