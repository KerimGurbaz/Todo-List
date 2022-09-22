const todo = document.querySelector(".todo");
const plus = document.querySelector(".fa-solid");
const main = document.querySelector(".main");



main.addEventListener("click", (e) =>{

   if(e.target.classList.contains("plus")){
      const newLi = document.createElement("li");
      newLi.style.listStyle = "none";
      main.appendChild(newLi);
      newLi.innerHTML = `<i class="fa-solid fa-check"></i>
      <p> ${todo.value}</p>
       <i class="fa-solid fa-trash-can"></i>`; 
       
      
      todo.value= " ";
} else if(e.target.classList.contains("fa-check") && !e.target.classList.contains("myStyle")){
   e.target.classList.add("myStyle");
  e.target.nextElementSibling.style.textDecoration = "line-through";
   
}
else if(e.target.classList.contains("fa-trash-can")){
   console.log(e.target.parentElement.remove())
}
else{
   e.target.classList.remove("myStyle");
   e.target.nextElementSibling.style.textDecoration = "none";
   
   
}
})





