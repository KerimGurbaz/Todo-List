const plus = document.querySelector(".plus");
const main = document.querySelector(".main");
// const todo = document.querySelector(".todo").value;
let para ;
let todo = document.querySelector(".todo");






main.addEventListener("click", (e) =>{
    console.log(e.target)

 if(e.target.classList.contains("plus")){
   const newUl = document.createElement("ul");
    let newLi = document.createElement("li");
    newLi.style.listStyle = "none";
    newLi.style.backgroundColor ="blue"
    newLi.style.color ="white"
    
    newUl.style.flex
    const trash = `<p><i class="fa-solid fa-trash-can"></i></p>`
  
   
    newLi.innerHTML = `<input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">${todo.value}${trash}` ;
    newUl.appendChild(newLi);
    main.appendChild(newUl);
 }
})





