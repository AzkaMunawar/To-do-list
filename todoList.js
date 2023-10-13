
//Taking values from input title and textarea description and storing it in array which is then stringify and setItem to localStorage.
//We have to add event listener so all this happen when we click on add to list button
var itemsArray;

add= document.getElementById("add-to-list");
 update();


function update(){
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;

    


if(localStorage.getItem('itemsJson')==null){
     
   itemsArray = [];
   if(title!=""){
   itemsArray.push([title, description]);
  
  localStorage.setItem('itemsJson',JSON.stringify(itemsArray));
  
 

}

  
}

else{
    var itemsArrayNew=localStorage.getItem('itemsJson');
   
    itemsArray=JSON.parse(itemsArrayNew);
    if(title!=""){
        itemsArray.push([title, description]);
       
       localStorage.setItem('itemsJson',JSON.stringify(itemsArray));
      
       
     }
  
   

}


//Populate the Table
let tableBody=document.getElementById("table-body");
let str="";
itemsArray.forEach((element,index) => {
    str+=`
    <tr>
    <th scope="row">${index+1}</th>
    <td><div>${element[0]}</div></td>
    <td><div>${element[1]}</div></td>
    <td><button onclick="deleteItem(${index})">Delete</button></td>
    </tr>
    `
});
tableBody.innerHTML=str;



if(itemsArray.length=='0'){
    let tableNotice=document.getElementById("table-notice");
    tableNotice.innerHTML="There are no items to show here";
    tableNotice.style.padding="20px 0";
    
    }

     
}



add.addEventListener("click",anotherUpdate);
add.addEventListener("click",noticeFunction);


 

function noticeFunction(){
    title=document.getElementById("title").value;
    showNotice=document.getElementById("showNotice");
    if(title==""){
        showNotice.innerHTML="Title is required.";
    }
}



function deleteAndUpdate(){

if(localStorage.getItem('itemsJson')==null){
   itemsArray = [];
   
  localStorage.setItem('itemsJson',JSON.stringify(itemsArray));
 
  location.reload();

  
}

else{
    var itemsArrayNew=localStorage.getItem('itemsJson');
   
    itemsArray=JSON.parse(itemsArrayNew);
    
        
       localStorage.setItem('itemsJson',JSON.stringify(itemsArray));
      
       document.location.reload();
     
}


//Populate the Table
let tableBody=document.getElementById("table-body");
let str="";
itemsArray.forEach((element,index) => {
    str+=`
    <tr>
    <th scope="row">${index+1}</th>
    <td><div>${element[0]}</div></td>
    <td><div>${element[1]}</div></td>
    <td><button onclick="deleteItem(${index})">Delete</button></td>
    </tr>
    `
});
tableBody.innerHTML=str;
  


 
}

function deleteItem(item){
    
    var itemsArrayNew=localStorage.getItem('itemsJson');
    itemsArray=JSON.parse(itemsArrayNew);

    itemsArray.splice(item,1);
    
    localStorage.setItem('itemsJson',JSON.stringify(itemsArray));
    deleteAndUpdate();

}



function clearLocalStorage(){
   
    localStorage.clear();
     deleteAndUpdate();

}

function anotherUpdate(){
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;

    


if(localStorage.getItem('itemsJson')==null){
     
   itemsArray = [];
   if(title!=""){
   itemsArray.push([title, description]);
  
  localStorage.setItem('itemsJson',JSON.stringify(itemsArray));
  
  document.location.reload();
 
  

}

  
}

else{
    var itemsArrayNew=localStorage.getItem('itemsJson');
   
    itemsArray=JSON.parse(itemsArrayNew);
    if(title!=""){
        itemsArray.push([title, description]);
    
       localStorage.setItem('itemsJson',JSON.stringify(itemsArray));
       document.location.reload();
       
     }
    
   

}


//Populate the Table
let tableBody=document.getElementById("table-body");
let str="";
itemsArray.forEach((element,index) => {
    str+=`
    <tr>
    <th scope="row">${index+1}</th>
    <td><div>${element[0]}</div></td>
    <td><div>${element[1]}</div></td>
    <td><button onclick="deleteItem(${index})">Delete</button></td>
    </tr>
    `
});
tableBody.innerHTML=str;



if(itemsArray.length=='0'){
    let tableNotice=document.getElementById("table-notice");
    tableNotice.innerHTML="There are no items to show here";
    tableNotice.style.padding="20px 0";
    
    }

     
}

