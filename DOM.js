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

function fun1() {
document.querySelector("#qs").innerHTML = "Hello !!";
document.querySelector(".qs").style.color = "red";
document.querySelector(".qs").innerHTML = "RED color";
}

function fun2() {
var x, i;
x = document.querySelectorAll(".a");
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "red";
}
}

 function fun3(){
  var node = document.createElement("li");
  var textnode = document.createTextNode("Cold Coffee");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
 }

 function fun4(){
  var list = document.getElementById("list");
  list.removeChild(list.childNodes[0]);
}

function fun5() {
  var element  = document.getElementById('ul');
  var fragment = document.createDocumentFragment();
  var browsers = ['Firefox', 'Chrome', 'Opera', 'Safari', 'Internet Explorer'];
  browsers.forEach(function(browser) {
  var li = document.createElement('li');
  li.textContent = browser;
  fragment.appendChild(li);
});
element.appendChild(fragment);
}

function fun6(){
  var elem = document.getElementById("test");
  var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
  document.getElementById("demo").innerHTML = theCSSprop;
}

function fun7() {
  document.getElementsByTagName("h3")[0].setAttribute("class", "democlass"); 
}

function fun8() {
  var x = document.getElementsByClassName("democlass")[0].getAttribute("class"); 
  document.getElementById("demo1").innerHTML = x;
}

function fun9() {
  document.getElementsByTagName("h4")[0].removeAttribute("class"); 
}

function fun10() {
  var newItem = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  newItem.appendChild(textnode);
  var list = document.getElementById("add");
  list.insertBefore(newItem, list.childNodes[0]);
}

function fun11() {
  var itm = document.getElementById("clone2").lastChild;
  var cln = itm.cloneNode(true);
  document.getElementById("clone1").appendChild(cln);
}

function fun12(){
  var textnode = document.createTextNode("Water");
  var item = document.getElementById("replace").childNodes[0];
  item.replaceChild(textnode, item.childNodes[0]);
}

function fun13() {
  var btn = document.createElement("button");
  document.body.appendChild(btn);
}

