const todo = document.querySelector(".todo");
const plus = document.querySelector(".fa-solid");
const main = document.querySelector(".main");
const section = document.querySelector(".section");


main.addEventListener("click", (e) =>{
   if(e.target.classList.contains("plus")){
      const newLi = document.createElement("li");
      newLi.style.listStyle = "none"
      section.appendChild(newLi);


      newLi.innerHTML = `<i class="fa-solid fa-check"></i> ${todo.value} <i class="fa-solid fa-trash-can"></i>`
      
      todo.value= " ";

   }

})

