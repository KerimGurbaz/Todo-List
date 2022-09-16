const plus = document.querySelector(".plus");
const main = document.querySelector(".main");
// const todo = document.querySelector(".todo").value;
let para ;

main.addEventListener("click", (e) =>{
    
    todo = document.querySelector(".todo");
 if(e.target.classList.contains("plus")){
    para = document.createElement("div");
    
    para.innerHTML = `${todo.value}`;
    main.appendChild(para);
    para.style.color ="red";
    para.style.backgroundColor ="green"


    
 }
})