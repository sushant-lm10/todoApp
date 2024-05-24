const btn = document.querySelector("button");
const inputBox = document.querySelector("#input-bx");
const list = document.querySelector("#list-container");

btn.addEventListener("click",()=>{
  if(inputBox.value =='' ) alert("Please enter some task")
else {
const li = document.createElement("li");
li.innerHTML=inputBox.value;
list.appendChild(li);
const span = document.createElement("span");
span.innerHTML = "\u00d7";
li.appendChild(span);


}
inputBox.value="";

})
list.addEventListener("click",(e)=>{

if(e.target.tagName==="SPAN"){
  e.target.parentElement.remove();}
  else if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
  }


})