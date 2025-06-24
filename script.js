let maininput = document.getElementById("mainInput");

let warrning = document.getElementById("warning");

let addTask= document.getElementById("InputButton");

let Btall=document.getElementById("All");

let BtDone=document.getElementById("Done");

let BtToDo=document.getElementById("ToDo");

let notasks=document.getElementById("noTasksHeader");

let scrolltasks=document.getElementById("scrollContainer");

let BtdeletDone=document.getElementById("deletDone");

let BtdeletAll=document.getElementById("deletAll");

let editpupop=document.getElementById("editpopup");
let editInput=document.getElementById("editInput");
let saveBt=document.getElementById("saveBt");
let CancelBt1=document.getElementById("CancelBt1");
let deletpopup=document.getElementById("deletpopup");
let inputdelet=document.getElementById("inputdelet");
let confirmBt=document.getElementById("confirmBt");
let CancelBt2=document.getElementById("CancelBt2");
let newEdit=null;
let makeDelete=null;
//this is array to stoerd the input value
let tasks=[];
//this is function to take the input and stored in array and checked the warning 
const getinput =()=>{//arrow function
    let input=document.getElementById("mainInput");
    let warning= document.getElementById("warning");
    let warning1= document.getElementById("warning1");
    let warning2= document.getElementById("warning2");
    let value=input.value;
    if(value=="")
    {
        warning.style.display="block";
        return;
        
    }
    else if (!isNaN(value.charAt(0)))  // to check if the first char is number or char if number make a warning else cont.
    {
        warning1.style.display="block";
       
        return;
    }
    else if(value.length<5)
    {
        warning2.style.display="block";
        return;
    }
    warning.style.display="none";
    warning1.style.display="none";
    warning2.style.display="none";

  
    tasks.push({text:value,done: false});
   
    maininput.value = "";
    console.log(tasks);
   changecolor2();
    showTaskInList();
    
};
const creatElement=(task)=>{
    let template=document.getElementById("taskTemp");
       let creat = template.content.cloneNode(true); //to git copy from all elemnet of temp.

         //queryselector to find a id from a templet .
       let checkbox = creat.querySelector(".done"); 
        let textTask = creat.querySelector(".taskText");
        let editBt = creat.querySelector("img.edit");
        let deletBT = creat.querySelector(".Delet");

        textTask.textContent = task.text;
        checkbox.checked = task.done;
        if (task.done) {
            textTask.style.textDecoration = "line-through";
            textTask.style.color = "red";
        }
        checkbox.onchange=()=>{
            task.done=checkbox.checked;
            showTaskInList();
            changecolor();
        };
        editBt.onclick=()=>openpopedit(task);
        deletBT.onclick=()=>openpopDelet(task);
    return creat;        
};
//this is function to show the input  in scrollContainer in HTML
const showTaskInList=()=>{
    let container=document.getElementById("scrollContainer");
    container.innerHTML="";
     if(tasks.length === 0){
        container.innerHTML = "<h3>No Tasks!</h3>";
        return;
    }
    for(let i=0;i<tasks.length;i++)
    {
       let task=tasks[i];
        container.appendChild(creatElement(task));
    }

};

const openpopedit=(task)=>{
    newEdit=task;
    editInput.value=task.text;
    editpupop.style.display="flex";
   
};

saveBt.onclick=()=>
{
    let NewText=editInput.value;
    if(NewText!="" && NewText.length>5 && isNaN(NewText.charAt(0)) )
    {
        newEdit.text=NewText;
        editpupop.style.display="none";
        showTaskInList();
    }

};
CancelBt1.onclick=()=>{
    editpupop.style.display="none";
}
const openpopDelet=(task)=>{
    makeDelete=task;
    deletpopup.style.display="flex";

};
confirmBt.onclick=()=>{
    let index=tasks.indexOf(makeDelete);
    if(index!==-1)
    {
        tasks.splice(index,1);
    }
    deletpopup.style.display="none";
    showTaskInList();
    changecolor();
    changecolor2();
};
CancelBt2.onclick=()=>{
    deletpopup.style.display="none";
};

const DoneTask=()=>{
    let container=document.getElementById("scrollContainer");
    container.textContent="";
    let check=false;
    for(let i=0 ; i<tasks.length;i++)
    {
        let task=tasks[i];
        if(task.done){
            container.appendChild(creatElement(task));
            check=true;
        }
    }
    if(check!==true){
        container.innerHTML="<h3>NO TASKS DONE!<h3>";
    }

};
const ToDoTask=()=>{
    let container=document.getElementById("scrollContainer");
    container.textContent="";
    let check=false;
    for(let i=0 ; i<tasks.length;i++)
    {
        let task=tasks[i];
        if(!task.done){
            container.appendChild(creatElement(task));
            check=true;
        }
    }
    if(check!==true){
        container.innerHTML="<h3>NO TASKS DONE!<h3>";
    }
};
const deletdontask=()=>{
    
    for(let i =tasks.length-1;i>=0;i--)
    {
        if(tasks[i].done==true)
            tasks.splice(i,1);
        
    }
    showTaskInList();
    changecolor();
    changecolor2();

};
const changecolor=()=>{
    let check2=false;
   
    for(let i=0;i<tasks.length;i++)
    {
        if(tasks[i].done)
        {
            check2=true;
            break;
            
        }
    }
    if(check2==true){
        BtdeletDone.style.backgroundColor="#D70000";
    }
    else
    {
        BtdeletDone.style.backgroundColor="#f88";
    }

};
const deletall=()=>{
    tasks=[];
    showTaskInList();
    changecolor2();
    changecolor();
    
};
const changecolor2=()=>{
     if(tasks.length>0){
        BtdeletAll.style.backgroundColor="#D70000";
    }
    else{
        BtdeletAll.style.backgroundColor = "#f88"; 
    }
};