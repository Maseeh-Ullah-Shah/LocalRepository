const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

// green.addEventListener("click",(e)=>{
//    console.log("3.Green event Listner")
// },true)

green.addEventListener("click",(e)=>{
   console.log("3.Green event Listner");
   e.stopPropagation();
},{once:true});

pink.addEventListener("click",(e)=>{
   console.log("2.pink event Listner")
},true)

blue.addEventListener("click",(e)=>{
   console.log("1. Blue event Listner")
},true)
document.body.addEventListener("click",()=>{
   console.log("4. body is clicked!!");
},true)

document.documentElement.addEventListener("click",()=>{
   console.log("5. Document element is clicked!!");
},true)

document.addEventListener("click",()=>{
   console.log("6. document is clicked!!");
},true)

window.addEventListener("click",()=>{
   console.log("7. window is clicked!!");
},true)