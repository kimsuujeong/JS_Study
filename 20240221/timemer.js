const btn1 = document.getElementById('time');
const btn2 = document.querySelector('#stop');

let clr;

btn1.addEventListener('click', function(){
    clr = setInterval(function(){
        document.getElementById("now").innerHTML = new Date();
    }, 1000);
});

btn2.addEventListener('click', function(){
    clearInterval(clr);
})