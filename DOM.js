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
  var node = document.createElement("li");
  var textnode = document.createTextNode("Cold Coffee");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
 }

 function remoChild(){
  var list = document.getElementById("list");
  list.removeChild(list.childNodes[0]);
}

function myFunction3() {
  var itm = document.getElementById("myList2").lastChild;
  var cln = itm.cloneNode(true);
  document.getElementById("myList1").appendChild(cln);
}

function myFunction11() {
  var element  = document.getElementById('ul'); // assuming ul exists
  var fragment = document.createDocumentFragment();
  var browsers = ['Firefox', 'Chrome', 'Opera',
      'Safari', 'Internet Explorer'];
  
  browsers.forEach(function(browser) {
      var li = document.createElement('li');
      li.textContent = browser;
      fragment.appendChild(li);
  });
  
  element.appendChild(fragment);
}

function myFunction1(){
  var textnode = document.createTextNode("Water");
  var item = document.getElementById("myList1").childNodes[0];
  item.replaceChild(textnode, item.childNodes[0]);
}

function query() {
    document.querySelector("#qs").innerHTML = "Hello !!";
    document.querySelector(".qs").style.color = "red";
    document.querySelector(".qs").innerHTML = "RED color";
}
function fun() {
    document.querySelectorAll(".a").innerHTML = "cool";
}

