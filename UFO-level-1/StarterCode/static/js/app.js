// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Use d3 to update each cell's text with
// UFO report values (City, State, Country, Shape, Duration, Comments)
// data.forEach(function(UFOSighting) {
//     console.log(UFOSighting);
//     var row = tbody.append("tr");
//     Object.entries(UFOSighting).forEach(function([key, value]) {
//       console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO sighting report
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

var DateData = d3.select("#datetime")


function populateData(userEntry) {
    userEntry.forEach((UFOSighting) =>{
        var row = tbody.append("tr");
        Object.entries(UFOSighting.forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);  
        });
    })
}

function runEnter ()

var filterDataDate = tableData

if (inputValueDate) {
    filteredDataDate = filteredDataDate.filter(tableData => tableData.datetime === inputValueDate
}

tbody.html("");

if (filteredDataDate !== 0) {
    populateData(filteredDataDate);
}


  // New UFO sighting to add to the table

// data.forEach((UFOSighting)) => {
//     var row = tbody.append("tr");
//     Object.entries(UFOSighting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });


// {
//     datetime: "1/1/2010",
//     city: "bonita",
//     state: "ca",
//     country: "us",
//     shape: "light",
//     durationMinutes: "13 minutes",
//     comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010"
//   },