// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var DateData = d3.select("#datetime");

// Console.log the UFO Sightings data from data.js
// Use d3 to update each cell's text with
// UFO report values (City, State, Country, Shape, Duration, Comments)
function populateData(data) {
  tbody.html('');
  data.forEach(function (UFOSighting) {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(function ([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

function runEnter() {
  var filteredData = tableData;
  var inputValueDate = DateData.property("value");
  if (inputValueDate) {
    filteredData = filteredData.filter(obj => obj.datetime === inputValueDate)
  };
  populateData(filteredData);
};
populateData(data);
d3.select('button').on('click', runEnter);