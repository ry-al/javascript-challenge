// from data.js
var button = d3.select("#filter-btn");

// Grab the text in the input field
// Declare a variable for that text so it will be the point of reference of the filter

var tbody = d3.select("tbody");

data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


button.on("click", function () {
    d3.select("tbody").html("")
    d3.event.preventDefault();

    var chosenDate = d3.select("#datetime").property("value");
    var chosenState = d3.select("#statename").property("value");

    if (chosenDate) {
        var filteredData = data.filter(sighting => sighting.datetime === chosenDate);
    }
    else {
        var filteredData = data;
    }
    if (chosenState) {
        var filteredData = filteredData.filter(sighting => sighting.state === chosenState);
    }

    if (filteredData.length > 0) {
        var tbody = d3.select("tbody");
        console.log("test");
        filteredData.forEach((sighting) => {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
    else {
        var tbody = d3.select("tbody").append("h6").text("Does not exist.");
    }
});



