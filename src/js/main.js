/*--------------------- HEADER ---------------------*/

let myHeader = document.getElementById("myHeader"); //hämtar min header-tag.
const myH1 = document.createElement("h1"); //skapar en h1
myH1.innerHTML = "Halloween To-Do"; //ger min h1 innehåll.
myH1.className = "myH1 shadow-lg"; //ger min h1 class .myH1 samt .shadow.lg
myHeader.appendChild(myH1); //lägger i / visar upp min h1 i min html (i header-tagen).

let className = myH1.className; //tilldela variabel för att kunna kolla mina klassnamn på min H1
console.log(className); //visa upp H1 klassnamn i console.

// /*--------------------- MAIN ---------------------*/

/*------- h2 - To Do -------*/
let myToDoList = document.getElementById("toDoContainer"); //hämtar min To Do section / container.
const myToDoH2 = document.createElement("h2"); //skapar en h2.
myToDoH2.innerHTML = "To Do:"; //ger min ToDo H2 innehåll.
myToDoList.appendChild(myToDoH2); //lägger i / visar upp min To Do h2 i min html (i min section med id toDoContainer).

/*------- container / ul -------*/
let container = document.getElementById("toDoContainer");

let myToDoUl = document.createElement("ul"); //skapar en ul
myToDoUl.className = "list-group"; //Ger bootstrapklassen list-group till min ul.
// myToDoList.appendChild(myToDoUl); //lägger i till min To Do ul i min html (i min section med id toDoContainer).
container.appendChild(myToDoUl); //lägger i till min To Do ul i dess container.

/*------- li's -------*/

class HalloweenToDo {
  //Skapar en klass som jag skapa mina tasks med.
  constructor(task) {
    this.task = task;
  }
}

let myTasks = []; //Här vill jag ha en lista med mina tasks
//Här under pushar jag in mina tasks in i listan...
myTasks.push(new HalloweenToDo("Buy pumpkin"));
myTasks.push(new HalloweenToDo("Carve scary pumpkin face"));
myTasks.push(new HalloweenToDo("Light candle in pumpkin and set outside"));
myTasks.push(new HalloweenToDo("Bake pumpkin pie"));
myTasks.push(new HalloweenToDo("Bake pumpkin seeds"));
myTasks.push(new HalloweenToDo("Celebrate with a glass of wine"));

// let myTasks = [ //lista med tasks
// "Buy pumpkin",
// "Carve scary pumpkin face",
// "Light candle in pumpkin and set outside",
// "Bake pumpkin pie",
// "Bake pumpkin seeds",
// "Celebrate with a glass of wine",
// ];

for (let i = 0; i < myTasks.length; i++) {
  console.log(myTasks[i]);

  // new HalloweenToDo(myTasks[i]);

  let loopedTask = document.createElement("li");
  loopedTask.innerHTML = [i];
  myToDoUl.appendChild(loopedTask); //lägger till li i min ul myToDoUl (som är tillagd så den ska synas i min html)).

  // let title = document.createElement("h1");
  // let img = document.createElement("img");

  // title.innerHTML = data.Search[i].Title;
  // img.src = data.Search[i].Poster;
  // img.alt = data.Search[i].Title;

  // container.classList.add("movie");

  // container.appendChild(title);
  // container.appendChild(img);

  // document.body.appendChild(container);
}

/*------- Done - section  -------*/

let myDoneList = document.getElementById("doneContainer"); //hämtar min Done section / container.
const myDoneH2 = document.createElement("h2"); //skapar en h2.
myDoneH2.className = "doneH2";
myDoneH2.innerHTML = "Done:"; //ger min Done h2 innehåll.
myDoneList.appendChild(myDoneH2); //lägger i / visar upp min Done h2 i min html (i min section med id doneContainer).

/*----------------------------------------------------------------------------------------------------*/
//FÖRSTA FÖRSÖKET - FEL...

// /*--------------------- MAIN ---------------------*/

// /* ul / li */

// let myToDoLi1 = document.createElement("li"); //skapar en 1:a li
// myToDoLi1.innerHTML = "Buy pumpkin"; //ger min 1:a li innehåll.
// myToDoUl.appendChild(myToDoLi1); //lägger till ovan li i min html (i min ul myToDoUl).

// let myToDoLi2 = document.createElement("li"); //skapar en 2:a li
// myToDoLi2.innerHTML = "Carve scary pumpkin face"; //ger min 2:a li innehåll.
// myToDoUl.appendChild(myToDoLi2); //lägger till ovan li i min html (i min ul myToDoUl).

// let myToDoLi3 = document.createElement("li"); //skapar en 3:e li
// myToDoLi3.innerHTML = "Light candle in pumpkin and set outside"; //ger min 3:e li innehåll.
// myToDoUl.appendChild(myToDoLi3); //lägger till ovan li i min html (i min ul myToDoUl).

// let myToDoLi4 = document.createElement("li"); //skapar en 4:e li
// myToDoLi4.innerHTML = "Bake pumpkin pie"; //ger min 4:e li innehåll.
// myToDoUl.appendChild(myToDoLi4); //lägger till ovan li i min html (i min ul myToDoUl).

// let myToDoLi5 = document.createElement("li"); //skapar en 5:e li
// myToDoLi5.innerHTML = "Bake pumpkin seeds"; //ger min 5:e li innehåll.
// myToDoUl.appendChild(myToDoLi5); //lägger till ovan li i min html (i min ul myToDoUl).

// let myToDoLi6 = document.createElement("li"); //skapar en 6:e li
// myToDoLi6.innerHTML =
//   "Celebrate with a glass of wine"; //ger min 6:e li innehåll.
// myToDoUl.appendChild(myToDoLi6); //lägger till ovan li i min html (i min ul myToDoUl).
