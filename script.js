let btn = document.querySelector("input")
let select = document.getElementById("colorSelect");

//select.addEventListener("change", display);
btn.addEventListener("click", display);

//console.log(s[s.selectedIndex].value); // get value

function display(eventDetails){
let remo =(select.selectedIndex);

if(remo){
//console.log(remo)
select.remove(remo);
}



}





