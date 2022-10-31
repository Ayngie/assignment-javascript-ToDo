/*--------------------- HEADER ---------------------*/

let myHeader = document.getElementById("myHeader"); //hämtar min header-tag.
const myH1 = document.createElement("h1"); //skapar en h1
myH1.innerHTML = "Halloween To-Do"; //ger min h1 innehåll.
myH1.className = "myH1"; //ger min h1 class .myH1
myHeader.appendChild(myH1); //lägger i / visar upp min h1 i min html (i header-tagen).

/*--------------------- MAIN ---------------------*/
/*------- To Do: -------*/

let myToDoList = document.getElementById("toDoContainer"); //hämtar min To Do section / container.
const myToDoH2 = document.createElement("h2"); //skapar en h2
myToDoH2.innerHTML = "To Do:"; //ger min ToDo H2 innehåll.
myToDoList.appendChild(myToDoH2); //lägger i / visar upp min To Do h2 i min html (i min section med id toDoContainer).

/* ul / li */
let myToDoUl = document.createElement("ul"); //skapar en ul
myToDoList.appendChild(myToDoUl); //lägger i till min To Do ul i min html (i min section med id toDoContainer).

let myToDoLi1 = document.createElement("li"); //skapar en 1:a li
myToDoLi1.innerHTML = "Buy pumpkin"; //ger min 1:a li innehåll.
myToDoUl.appendChild(myToDoLi1); //lägger till ovan li i min html (i min ul myToDoUl).

let myToDoLi2 = document.createElement("li"); //skapar en 2:a li
myToDoLi2.innerHTML = "Carve scary pumpkin face"; //ger min 2:a li innehåll.
myToDoUl.appendChild(myToDoLi2); //lägger till ovan li i min html (i min ul myToDoUl).

let myToDoLi3 = document.createElement("li"); //skapar en 3:e li
myToDoLi3.innerHTML = "Light candle in pumpkin and set out on front porch"; //ger min 3:e li innehåll.
myToDoUl.appendChild(myToDoLi3); //lägger till ovan li i min html (i min ul myToDoUl).

let myToDoLi4 = document.createElement("li"); //skapar en 4:e li
myToDoLi4.innerHTML = "Bake pumpkin pie"; //ger min 4:e li innehåll.
myToDoUl.appendChild(myToDoLi4); //lägger till ovan li i min html (i min ul myToDoUl).

let myToDoLi5 = document.createElement("li"); //skapar en 5:e li
myToDoLi5.innerHTML = "Bake pumpkin seeds"; //ger min 5:e li innehåll.
myToDoUl.appendChild(myToDoLi5); //lägger till ovan li i min html (i min ul myToDoUl).

let myToDoLi6 = document.createElement("li"); //skapar en 6:e li
myToDoLi6.innerHTML =
  "Celebrate with a glass of wine, that I finished my assignment"; //ger min 6:e li innehåll.
myToDoUl.appendChild(myToDoLi6); //lägger till ovan li i min html (i min ul myToDoUl).

/*------- Done: -------*/
let myDoneList = document.getElementById("doneContainer"); //hämtar min Done section / container.
