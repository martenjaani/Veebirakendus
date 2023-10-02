
let myNodelist = document.getElementsByTagName("LI");

//TASK 1
for (let li of myNodelist) {
    const newButton=document.createElement("button");
    newButton.className="close";
    newButton.textContent="Delete";
    li.appendChild(newButton);
}

//TASK 2
let closeButtons = document.getElementsByClassName("close")

for (let closeButton of closeButtons) {
    closeButton.addEventListener("click", (e)=>{
        //console.log("dslad", e)
        const li=e.target.parentElement;
        li.style.display="none"

    })
}

//TASK 3

let list = document.querySelector('ul');
list.onclick=function (event){
        const targelEl=event.target
        if(targelEl.tagName==="LI"){
            targelEl.classList.toggle("checked");
        }
        event.stopPropagation();
        event.bubbles=false;
    }
//TASK 4


function newTask() {
    let input=document.getElementById("myInput");
    let tasks=document.getElementById("myUL");
    const newTask=document.createElement("li");
    if(input.value===""){
        alert("Sisesta tekst!")
        return;
    }
    else{
        newTask.textContent=input.value
        input.value=""
    }
    const newButton=document.createElement("button");
    newButton.className="close";
    newButton.textContent="Delete";
    newTask.appendChild(newButton);
    tasks.appendChild(newTask);
    newButton.addEventListener("click", (e)=>{
        //console.log("dslad", e)
        const li=e.target.parentElement;
        li.style.display="none"

    })

};

const input =document.querySelector("#myInput")
input.addEventListener("keydown", e => {
    if(e.key === "Enter"){
        newTask();
    }
})





/*
You might be wondering why "LI" is in uppercase style while in the DOM it is "li"?
When JavaScript was first created, it used an uppercase style for tag names by convention. Usually, tagName() was
and still returns all uppercase.
Although "li" works for some cases, but it does not work for others. Therefore, please try to use uppercases when
you use tagName to be on the safe side.
*/