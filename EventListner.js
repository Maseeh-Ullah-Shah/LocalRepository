const userNameInput = document.querySelector("#userName");
const para = document.querySelector("p");

// userNameInput.addEventListener("dblclick",()=>{
//     console.log("Double Clicked!!");
// })

// userNameInput.addEventListener("click",()=>{
//     console.log("single Clicked!!");
// })

//  userNameInput.addEventListener("input",(e)=>{
//     console.log(e.target.value);
//     para.textContent = e.target.value;
//     console.log("input events fires");
// })


//It works only when we change the value inside input field and leave outside the field
// userNameInput.addEventListener("change",(e)=>{
//     console.log(e.target.value);
//     para.textContent = e.target.value;
//     console.log("input events fires");
// })

//It works only when we type inside the field

// userNameInput.addEventListener("focus",(e)=>{
//     console.log(e.target.value);
//     para.textContent = e.target.value;
//     console.log("input events fires");
// })

//It works only when we click outside the input field
userNameInput.addEventListener("blur",(e)=>{
    console.log(e.type);
    console.log("input events fires");
})

