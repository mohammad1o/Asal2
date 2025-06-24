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