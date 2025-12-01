const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value===' ')
      {
        alert("enter the task!");
      }
      else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span"); 
        span.innerHTML = "x";
        li.appendChild(span);
      }
      inputBox.value=" ";
      saveData();    /* so to add the data to the localStorage when ever we add new task */
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

/*will store the data in the localStorage*/
function saveData(){
  localStorage.setItem("data", listcontainer.innerHTML);
}

/* now to display the locally stored data in the browser*/
function showTask(){
  listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();