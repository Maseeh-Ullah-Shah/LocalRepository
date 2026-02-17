function sayHi() {
    console.log("Hiiii");
}

function secondHi() {
    console.log("Second Hi!!!");
}
const h1 = document.querySelector("h1");
//2nd method of writting Event listner
// h1.ondblclick = sayHi;
// h1.ondblclick =secondHi;

//3rd method of writting Event listner
h1.addEventListener("click",sayHi);

 const card = document.querySelector(".card");
// card.addEventListener('click',function(){

//     console.log("Hi,My name is Maseeh Ullah Shah");
// });

const container = document.querySelector(".container");
let num = 1;
card.addEventListener("click",function(){
    const newElement = document.createElement("div");
    newElement.className = "card";
    newElement.textContent = ++num;
    container.append(newElement);
})

