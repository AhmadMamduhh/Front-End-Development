
//--------------Array of checkboxes-----------------
var checkboxes = document.querySelectorAll('input')

//---------------Looping through the checkboxes-----------------------
checkboxes.forEach(function(checkbox , index) {
    

//----------------Adding an event listener for each checkbox----------------------
    checkbox.addEventListener('click', function(event) {
        
//----------------Shift key has to be pressed and checkbox has to be checked in order for the functionality to work----------
        if (event.shiftKey && checkbox.checked == true) {

//----------------Looping through all the previous checkboxes and checking all checkboxes between the previous checked checkbox and the next checked checkbox-------------
            for (var i = index - 1; i >= 0; i--) {

//---------------Condition is true if there's a previous checked box-----------------------------
                if (checkboxes[i].checked == true) {

//---------------Checking all the checkboxes between the last checked checkbox and the clicked checkbox---------------
                    for (var j = i + 1; j <= index - 1; j++) {
                        checkboxes[j].checked = true;
                    }
                    break;

                }
            }
        }
    });
});