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
  var btn = document.createElement("button");
  document.body.appendChild(btn);
}

 function appenChild(){
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
 }

function query() {
    document.querySelector("#qs").innerHTML = "Hello !!";
    document.querySelector(".qs").style.color = "red";
    document.querySelector(".qs").innerHTML = "RED color";
}
function fun() {
    document.querySelectorAll(".a").innerHTML = "cool";
}

