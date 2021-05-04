document.addEventListener("click", function(){
    document.getElementById("mo").innerHTML = "You are Beautiful/Handsome !!!";
  })
  
 document.addEventListener("mousemove", add);
function add() {
  document.getElementById("number").innerHTML = Math.random();
}
function removeHandler() {
  document.removeEventListener("mousemove", add);
}
function myFunction() {
    var btn = document.createElement("BUTTON");
    document.body.appendChild(btn);
  }

function query() {
    document.querySelector("h2").innerHTML = "Hello !!";
    document.querySelector(".qs").style.color = "red";
    document.querySelector(".qs").innerHTML = "RED color";
}
function fun() {
    document.querySelectorAll(".a").innerHTML = "cool";
}

