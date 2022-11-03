/*------------------------------------------- HEADER ---------------------------------------------------------*/

let myHeader = document.getElementById("myHeader"); //hämtar min header-tag.
const myH1 = document.createElement("h1"); //skapar en h1
myH1.innerHTML = "Halloween To-Do"; //ger min h1 innehåll.
myH1.className = "myH1"; //ger min h1 class .myH1 samt ville ge .shadow-lg men den ville inte.
myHeader.appendChild(myH1); //lägger i / visar upp min h1 i min html (i header-tagen).

let className = myH1.className; //tilldela variabel för att kunna kolla mina klassnamn på min H1
console.log(className); //visa upp H1 klassnamn i console.

/*------------------------------------------- MAIN ---------------------------------------------------------*/

/*------- h2 - To Do -------*/
let toDoContainer = document.getElementById("toDoContainer"); //hämtar min To Do section / container.
const myToDoH2 = document.createElement("h2"); //skapar en h2.
myToDoH2.innerHTML = "To Do:"; //ger min h2 innehållet "To Do:".
toDoContainer.appendChild(myToDoH2); //lägger i / visar upp min h2 i dess container (i min html - min section med id toDoContainer).

/*------- ul -------*/
let myToDoUl = document.createElement("ul"); //skapar en ul
myToDoUl.className = "list-group"; //Ger bootstrapklassen list-group till min ul.
toDoContainer.appendChild(myToDoUl); //lägger i / visar upp min To Do ul i dess container (i min html - min section med id toDoContainer).

/*------- Tasks - class, listor, listitems -------*/

class HalloweenToDo {
  //Skapar en klass som jag sedan kan skapa mina tasks med.
  constructor(task) {
    this.task = task;
    this.completed = false;
  }
}

let myTasks = []; //Här deklarerar jag en (tom) lista med mina tasks
myTasks.push(new HalloweenToDo("Buy pumpkin")); //Nu pushar jag in mina tasks in i listan...
myTasks.push(new HalloweenToDo("Carve scary pumpkin face"));
myTasks.push(new HalloweenToDo("Light candle in pumpkin and set outside"));
myTasks.push(new HalloweenToDo("Bake pumpkin pie"));
myTasks.push(new HalloweenToDo("Bake pumpkin seeds"));
myTasks.push(new HalloweenToDo("Celebrate with a glass of wine"));

//let clickedTasks = []; //deklarerar en (tom) lista för clicked tasks.

/*------- for-loop för att skapa li -------*/

function createLi() {
  //funktion för min for loop så att jag kan köra loopen igen senare när objekt blivit iklickade.
  myToDoUl.innerHTML = "";

  for (let i = 0; i < myTasks.length; i++) {
    //loopa igenom mina tasks i denna loop för att:
    console.log(myTasks[i]);

    let loopedTask = document.createElement("li"); //skapa li. (Låt loopedTask vara en li som vi skapar).
    loopedTask.innerHTML = myTasks[i].task; //skriver ut värdet av min task i min li. (Låt min li innehålla (en string som är) värdet av objektet task i listan myTasks).
    loopedTask.classList.add("clickable"); //lägg till klassen .clickable på min li, för möljighet till styling i CSS/SCSS.

    if (myTasks[i].completed) {
      loopedTask.classList.add("styla"); //lägg till klassen .styla på min li, för möljighet till styling i CSS/SCSS.
    }

    loopedTask.addEventListener("click", () => {
      //anonym funktion = gör så att vi kan anropa vår funktion och skicka med värden!
      //lyssna på min li efter klick-händelse.
      handleClick(myTasks[i]); //anropa funktion (för att hantera vad som ska ske vid klick på min li) med paranteser (för att kunna skicka med ett värde: värdet är vilken task som klickats på).
    });
    myToDoUl.appendChild(loopedTask); //lägger till li i min ul (myToDoUL).
  }
}

createLi(); //nu körs denna funktion o mina li skapas (då min loop körs).

/*------- funktion för klick-händelsen -------*/

function handleClick(loopedTask) {
  //funktion för vad som ska ske när användaren klickar på en loopedTask.
  loopedTask.completed = true; //när min task är klickad på ändras den till completed = true (defaultvärde var completed = false).

  console.log("You clicked on: ", loopedTask); //skriv ut i console vilken task användaren klickade på.
  createLi();
}

/*------- Done - section  -------*/

let myDoneList = document.getElementById("doneContainer"); //hämtar min Done section / container.
const myDoneH2 = document.createElement("h2"); //skapar en h2.
myDoneH2.className = "doneH2";
myDoneH2.innerHTML = "Done:"; //ger min Done h2 innehåll.
myDoneList.appendChild(myDoneH2); //lägger i / visar upp min Done h2 i min html (i min section med id doneContainer).

/*----------------------------------------------------------------------------------------------------*/
