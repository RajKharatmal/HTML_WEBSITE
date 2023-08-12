var div = document.getElementById('main');
var display = 0;


function navClick(){
    if (display == 1){
        div.style.display = "";
        display = 0;
    }
    else{
        div.style.display = "none";
        display = 1;
    }
}