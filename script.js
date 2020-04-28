var button = document.getElementById("enter");            
var input = document.getElementById("userinput");          
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var paragraph=document.createElement("p");
    var button1=document.createElement("BUTTON");
    button1.textContent="DELETE";
    var li=document.createElement("li");    
    var textNode=document.createTextNode(input.value);  
    paragraph.appendChild(textNode);
    paragraph.appendChild(button1);
    li.appendChild(paragraph);                               
    ul.appendChild(li);                                     
    input.value="";  
    button1.addEventListener("click",function deleteListElementAfterClick(){
        console.log("click");
        li.remove();
    }); 
}


function addListAfterClick()
{
    if (inputLength()>0)
    {
        createListElement();
    }
}

function addListAfterKeyPress(event)                           
{
    if (inputLength()>0 && event.keyCode===13)
    {
        createListElement();
    }
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress",addListAfterKeyPress);
