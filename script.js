//getting add button reference
function getAndUpdate(){
       
    //get title and desc
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    //add items to local storage

    //if localstorage is empty 
    if (localStorage.getItem('itemsJson') == null) {
        //create a array
        itemJsonArray = [];
        //push title and desc in array
        itemJsonArray.push([tit, desc]);

        //send array to local storage
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

    }
    //if items are already in list ie local storage is not empty
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson'); //get items of local storage
        itemJsonArray = JSON.parse(itemJsonArrayStr); //parsing json from local storage
        itemJsonArray.push([tit, desc]); //pushing data to array

        //send array to local storage
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

    }
    update();

}

function update(){
    
    //if localstorage is empty 
    if (localStorage.getItem('itemsJson') == null) {
        //create a array
        itemJsonArray = [];
        //send array to local storage
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson'); //get items of local storage
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }
    

    //populating the table
    let str = "";
    let tableBody = document.getElementById("tableBody");
    itemJsonArray.forEach((element, index) =>{
        str+= `<tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
      </tr>`

    });
    tableBody.innerHTML=str; //replacing html table body with jscript genetated body
}

function deleted(itemIndex){
    itemJsonArrayStr = localStorage.getItem('itemsJson'); //get items of local storage
    itemJsonArray = JSON.parse(itemJsonArrayStr); //

    itemJsonArray.splice(itemIndex,1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    update();

}

function clearStorage(){
    localStorage.clear();
    update();
}


//code execution starts here
update(); //THIS WILL SHOW DATA as soon as page loads

//getting reference of button
add = document.getElementById("add");
//addind listener to button
add.addEventListener("click",getAndUpdate); //after click update fntn will be called

