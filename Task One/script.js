
//---------------------------Adding items to list-------------------------------------

var addBtn = document.getElementById('add-btn');
var addField = document.getElementById('add-field');
var items = document.getElementById('items');
var holderArray=['1','2','3','4','5'];

addBtn.addEventListener('click', btnClicked)

function btnClicked(event) {
    var string = addField.value;
    items.innerHTML += '<li class="list-group-item items-list">' + string + '</li>';
    holderArray.push(addField.value);
}

//-------------------Searching for items in the list-----------------------------------

var searchField = document.getElementById('search-field');
var itemsArray = document.getElementsByClassName('items-list');
searchField.addEventListener('input', inputEntered);

function inputEntered(e) {
    var string = searchField.value;
    var string2='';
    for (var i = 0; i < holderArray.length; i++) {
        if ( string.toLowerCase() == holderArray[i].toLowerCase() || holderArray[i].toLowerCase().includes(string.toLowerCase())) {
           string2+='<li class="list-group-item items-list">' + holderArray[i] + '</li>';
        }
    }
    items.innerHTML = string2;
    if(searchField.value==''){
        var string3='';
        for(var i=0;i<holderArray.length;i++){
            string3+='<li class="list-group-item items-list">' + holderArray[i] + '</li>';
        }
        items.innerHTML=string3;
    }
}
