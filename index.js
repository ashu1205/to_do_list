let userInput=document.querySelector("#input");
// id=1;
function addTask(value){
    console.log("task entered");
    // let taskCount=document.createElement('span');
    // taskCount.innerText=id;

    let newTask=document.createElement('li');
    newTask.classList.add("list-item");
  
    newTask.innerHTML=`${value}<i>\u274C</i>`
    // id++;
    
    let list=document.getElementById('list');
    // list.appendChild(taskCount);
    list.appendChild(newTask);

    
}


userInput.addEventListener('keyup' , (event)=>{
    if(event.key=='Enter')
        addTask(userInput.value);

    // console.log(input.value);
});

let tasks=document.getElementById("list");

tasks.addEventListener("click",(event)=>{  
    console.log("task clicked");
        if(event.target.classList.contains('list-item'))
            event.target.classList.toggle("done");

        console.log(event.target);

    
})

tasks.addEventListener("dblclick",(e)=>{
    if(e.target.classList.contains('list-item'))
        e.target.remove();
})







