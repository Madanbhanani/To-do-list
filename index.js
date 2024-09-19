
var inputBox=document.getElementById("input-box");
var LiContainer=document.getElementById("List-Container");


function addTask(){
    if(inputBox.value === ""){
        alert("Enter user data")
    }
    else{
        var li=document.createElement("li");
        var peratitleEle=document.createElement("p");
            peratitleEle.innerText=inputBox.value;
        var peraElem=document.createElement("p");
            peraElem.setAttribute("id","peraElement");
        var button1=document.createElement("button");
            button1.setAttribute("id","deleteBtn");
            button1.innerHTML="\u00d7";
        var button2=document.createElement("button");
            button2.setAttribute("id","EditBtn")

        button1.onclick=function(){
            li.remove();
            li.innerHTML="";
         }
        button2.onclick=function(){
           var pro=prompt("Edit List Name",peratitleEle.innerHTML);
               peratitleEle.innerHTML=pro;
               if(peratitleEle.innerText === ""){
                 li.innerHTML=""
               }
        }
      peraElem.appendChild(button2);
      peraElem.appendChild(button1);
      li.appendChild(peratitleEle);
      li.appendChild(peraElem);
      LiContainer.appendChild(li);
  
      inputBox.value=""
     }
    } 
   
function ClearAll(){
    LiContainer.innerHTML=""
}



