const userNameInput = document.querySelector("#userName");
const para = document.querySelector("p");

// userNameInput.addEventListener("dblclick",()=>{
//     console.log("Double Clicked!!");
// })

// userNameInput.addEventListener("click",()=>{
//     console.log("single Clicked!!");
// })

 userNameInput.addEventListener("input",(e)=>{
    console.log(e.target.value);
    para.textContent = e.target.value;
    console.log("input events fires");
})

