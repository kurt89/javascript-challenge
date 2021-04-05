// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
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


// New UFO sighting to add to the table


// {
//     datetime: "1/1/2010",
//     city: "bonita",
//     state: "ca",
//     country: "us",
//     shape: "light",
//     durationMinutes: "13 minutes",
//     comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010"
//   },

// Use D3 to select the table
// var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
// table.attr("class", "table table-striped");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use D3 to select the table body
var newSighting = ["1/1/2010", "matthews", "nc", "us", "cigar", "15 minutes", "large, bright yellow object hovered over squirrel lake park before disappearinhg at warp speed"];

// Append one table row `tr` to the table body

// data.(function(UFOSighting) {

var row = tbody.append("tr");
// Append one cell for the date
row.append("td").text(newSignting[0]);
// Append one cell for the city
row.append("td").text(newSighting[1]);
// Append one cell for the state
row.append("td").text(newSignting[2]);
// Append one cell for the country
row.append("td").text(newSighting[3]);
// Append one cell for the shape
row.append("td").text(newSignting[4]);
// Append one cell for the duration
row.append("td").text(newSighting[5]);
// Append one cell for the comments
row.append("td").text(newSighting[6]);

console.log("tr");

