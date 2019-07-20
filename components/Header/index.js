// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    let fullDate = "SMARCH 28, 2019";
    let tempurature = "98°"
    let outerDiv = document.createElement("div");
    outerDiv.classList.add("header");

    let date = document.createElement("span");
    date.classList.add("date");
    date.innerText = fullDate;

    let headerText = document.createElement("h1");
    headerText.innerText = "Lambda Times";
    
    let tempElement = document.createElement("span");
    tempElement.classList.add("temp");
    tempElement.innerText = tempurature;

    outerDiv.appendChild(date);
    outerDiv.appendChild(headerText);
    outerDiv.appendChild(tempElement);

    return outerDiv;
}

let headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
