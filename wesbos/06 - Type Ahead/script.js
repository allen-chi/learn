const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city of state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
};

// Adds JSON data
fetch(endpoint)
    .then(blob => blob.json()).then(data => cities.push(...data));



// This was my original implementation
// var cityClick = document.getElementById('city');
// cityClick.addEventListener('change', gotClicked); // changed this from 'click' to 'change' - new behaviour learned

// This listens for a click on the filter button, and collects what was entered into the input box
var inputChange = document.querySelector('.search');
// inputChange.addEventListener('change', showResults); 
inputChange.addEventListener('keydown', showResults); 

document.querySelector('.search').onkeydown = function(event) {
    if (event.keyCode == 13) {
        showResults();
    }
}


// This function takes the content of input box and feeds it to the findMatches function, to search the array for matches
function runMatch() {    
    // console.log("Filtering by City");
    var textInput = document.querySelector('input');
    var wordToMatch = (textInput.value);
    // console.log("Found the term: " + wordToMatch);
    var results = findMatches(wordToMatch, cities);    
    // console.log("There were " + results.length + " results found.");
    // console.table(results);
    return results
}

// Detects click on "City" button, and changes colour to red while mouse is held
var filterBtn = document.getElementById('filter');
filterBtn.addEventListener('mousedown', gotClickedDn);

function gotClickedDn() {
    filterBtn.style.background = "red";
    filterBtn.style.transitionDuration = "2s";
    filterBtn.style.transitionTimingFunction = "cubic-bezier(0,1.12,.65,.92)";
    showResults();
}

// Detects unclick on "City" button, and changes colour to orange
filterBtn.addEventListener('mouseup', gotClickedUp);
function gotClickedUp() {
    filterBtn.style.background = "gray"
}

// Show results of match
function showResults() {
    // deletes existing results, if any
    var paras = document.getElementsByClassName('result-gen');
    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    };

    // creates array of City, State results
    var matched = runMatch();
    var print = matched.map(city => `${city.city}` + ", " +  `${city.state}`);
    console.log(print.length + " results found.");
        // return `
        //     <li>Test text</li>
        // `;

        // Iterates through array and displays as HTML
        const newTile = document.querySelector('.results')
        if (print.length < 1) {
            console.log("Didn't find anything");
            newTile.innerHTML += `<li class="result-gen">No results found</li>`;
            } else if (print.length > 20) {
                    newTile.innerHTML += `<li class="result-gen">${print.length} results found</li>`;
                } else {
                    var x = 0;
                    for(let numberOfResults = print.length; x < numberOfResults; x++) {
                        if (print.length > 0) {
                        var results = print[x];
                        console.log(results);
        
                        newTile.innerHTML += `<li class="result-gen">${results}</li>`;
                        }
                    };
                };
};


function createResults() { 
    var x = 0;
    for(let numberOfResults = print.length; x < numberOfResults; x++) {
        // change this to display HTML
        // 
        var results = showResults[x];
        console.log(showResults[x]);
        const newTile = document.querySelector('.results')
        newTile.innerHTML += `<li>${print}</li>`;
    };
};



// function printToScreen() {
//     // document.getElementById('addnew').innerHTML += "<h1> TEST </h1>";
// }
   
//     // document.getElementById('state').innerHTML = print.forEach(element => {
        
//     // });;
// };
