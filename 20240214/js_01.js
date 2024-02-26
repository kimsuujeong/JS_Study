window.onload = function () {
    const inputTodo = document.querySelector("#todoInput");
    const addButton = document.querySelector("#addButton");
    const todoList = document.querySelector("#todoList");
    const doneButton = document.querySelector("#doneBtn");

    addButton.addEventListener("click", (event) => {

        const makeSpan = document.createElement("span"); // span
        makeSpan.id = "BtnId";

        console.log("makeSpan");
        const makeDiv = document.createElement("div"); // div

        const text = document.createElement('span') // 내용
        text.textContent = inputTodo.value;
        console.dir(text);

        const doneButton = document.createElement('button') // 완료
        doneButton.textContent = "완료";
        doneButton.id = "doneBtn";

        const delectButton = document.createElement('button') // 삭제
        delectButton.textContent = "삭제";
        delectButton.id = "delectBtn"


        makeSpan.appendChild(doneButton);
        makeSpan.appendChild(delectButton);
        text.appendChild(makeSpan);
        makeDiv.appendChild(text);
        todoList.appendChild(makeDiv);

        inputTodo.value = "";

        doneButton.onclick = function () {

            text.classList.toggle('completed');

        }; // 완료(밑줄 쳐주는) 버튼

        delectButton.onclick = function () {

            todoList.removeChild(makeDiv)

        }; // 삭제 버튼

    });





}