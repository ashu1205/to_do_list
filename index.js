let userInput=document.querySelector("#input");
// id=1;
function addTask(value){
    console.log("task entered");
    // let taskCount=document.createElement('span');
    // taskCount.innerText=id;
    let item=document.createElement('div');
    item.classList.add("wrap");
    let inner1=document.createElement('div');
    let inner2=document.createElement('div');
    inner1.classList.add("wrap");
    inner2.classList.add("wrap");

    let newTask=document.createElement('li');
    newTask.classList.add("list-item");
    // let dltTask=document.createElement('span');
    inner2.innerHTML='&#10006';
    // dltTask.classList.add("dltTask")
    inner2.classList.add("remove");
    
  
    newTask.innerHTML=`${value}`;
    // id++;
    inner1.appendChild(newTask);
    // inner2.appendChild(dltTask);
    item.appendChild(inner1);

    item.appendChild(inner2);
    let list=document.getElementById('list');
    // list.appendChild(taskCount);
    list.appendChild(item);

    
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

tasks.addEventListener("click",(e)=>{
    if(e.target.classList.contains('remove'))
        e.target.parentNode.remove();
})







