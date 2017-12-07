var dataset = [5, 10, 15, 20, 25];


d3.select(".data")
    .selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function (d) {
        return d + '$';
    });
d3.select(".bar")
    .selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .style("height", function (d) {
        var barHeight = d * 5;
        return barHeight + "px";
    });
