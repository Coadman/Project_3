// set up dimensions of the chart

const margin = { top: 70, right: 40, bottom: 60, left: 175}
const width = 660 - margin.left - margin.right
const height = 400 - margin.top - margin.bottom

// create the svg container for the chart

const svg = d3.select("#medicaid_mftr").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// load and process data

d3.csv("medicaid_manufacturers_transformed.csv").then(data => {
    data.forEach(d => {
        d.total = +d.total;
    });
console.log(data)

})
// sort the data by total

// set x and y scales

// create the x and y axes

// add x and y axes to the chart