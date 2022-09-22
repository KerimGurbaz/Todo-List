const todo = document.querySelector(".todo");
const plus = document.querySelector(".fa-solid");
const main = document.querySelector(".main");



main.addEventListener("click", (e) =>{

   if(e.target.classList.contains("plus")){
      const newLi = document.createElement("li");
      newLi.style.listStyle = "none";
      main.appendChild(newLi);
      newLi.innerHTML = `<i class="fa-solid fa-stopwatch"></i>
      <p> ${todo.value}</p>
       <i class="fa-solid fa-trash-can"></i>`; 
      todo.value= " ";
} else if(e.target.classList.contains("fa-stopwatch") && !e.target.parentElement.classList.contains("myStyle")){
   e.target.parentElement.classList.add("myStyle");
  e.target.nextElementSibling.style.textDecoration = "line-through";

}

else if(e.target.parentElement.classList.contains("myStyle") ){
   e.target.parentElement.classList.remove("myStyle")
   e.target.nextElementSibling.style.textDecoration = "none";
}

else if(e.target.classList.contains("fa-trash-can")){
   console.log(e.target.parentElement.remove())

}

})





