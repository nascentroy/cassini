var h = 100;
var w = 500;
var dataset = [30, 40, 10, 10, 50];
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");
circles.attr("cx", function (d, i) {
        return (i * 70) + 50;
    })
    .attr("cy", h / 2)
    .attr("r", function (d) {
        return d / 2;
    })
    .attr("fill", "yellow")
    .attr("stroke", "orange")
    .attr("stroke-width", function (d) {
        return d / 5;
    });
