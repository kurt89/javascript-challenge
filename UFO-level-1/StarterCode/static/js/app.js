// Office hours was taken up by other students' questions.
// I was unable to get enough time with the TA during office hours,
// both before and after class, on Monday evening 4/5.
// We agreed to meet (again) at the very beginning of office hours, 5:45pm,
// on Wednesday, 4/7 so that I can then turn in a complete assignment.

// from data.js
var tableData = data;

// Get a reference to the table body
// var tbody = d3.select("tbody");

var DateData = d3.select("#datetime");

// Console.log the UFO Sightings data from data.js
console.log(data);

// Use d3 to update each cell's text with
// UFO report values (City, State, Country, Shape, Duration, Comments)
data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO sighting report
      var cell = row.append("td");
      cell.text(value);
    });
  });


// function populateData(userEntry) {
//     userEntry.forEach((UFOSighting) =>{
//         console.log(UFOSighting);
//         var row = tbody.append("tr");
//         Object.entries(UFOSighting.forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.text(value);  
//         }))
//     })
// }

function runEnter () {

    var filteredDataDate = tableData;
    var inputValueDate = DateData.property("value");

    if (inputValueDate) {
        filteredDataDate = filteredDataDate.filter(tableData => tableData.datetime === inputValueDate)
    };

    tbody.html("");

    if (filteredDataDate !== 0) {
        populateData(filteredDataDate);
    };
};



  // New UFO sighting to add to the table

// data.forEach((UFOSighting)) => {
//     var row = tbody.append("tr");
//     Object.entries(UFOSighting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

populateData(data)
