// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topicsParent = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(function (response) {
        iterateThrough(response.data.topics);
    })
    .catch(function (err) {
        console.log(err)
    })
    .finally(function () {
        console.log("request complete");
    });

function iterateThrough(topics) {
    topics.forEach(element => {
        topicsParent.appendChild(createTab(element));
    });
}

function createTab(tabName) {
    let tab = document.createElement("div");
    tab.classList.add("tab");
    tab.innerText = tabName;

    return tab;
}