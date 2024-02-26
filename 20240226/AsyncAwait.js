// async function test(){
//     return Promise.resolve("군침하나도 안돌음ㅡㅡ");
// }

// test().then(alert);
// async : 해당 함수가 항상 프로미스 객체를 리턴하도록 처리하는 키워드
// async function gunchim(){

   
//     let gunchimPromise = new Promise((resolve, reject) =>{
//         setTimeout(() => resolve("군침 ㅈㄴ 도는군!"), 1000)
//     });
//     // await : 프로미스가 처리될떄까지 기다리는 키워드
//     let ssak = await gunchimPromise;
//     // 프로미스가 처리되면 그후 결과를 리턴.
    

//     alert(ssak);
// }

// gunchim();
const gunchimIter = function(){
    let i =0;
    return{
        [Symbol.iterator]() {return this;},
        next(){
            return {value: ++i};
        }
    }
}


for (const n of gunchimIter()) {
    if (n > 5) break;
    console.log(n); // 1 2 3 4 5
}
// 제너레이터는 이렇게 어렵게 쓰진 않음,.

// 제너레이터 함수 선언문
function* what(){
    console.log('군침1');
    yield "군침 아직 덜돌았노";
    console.log('군침2');
    yield "내가 바로 군침이노";
    console.log('군침3');
    yield "군침이 아직 삼삼하노";
    console.log('군침4');
    yield "이제야 군침이 4아악 도노";
}

let generator1 = what();

console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());