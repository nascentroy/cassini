var dataset = [20, 10, 30, 10, 50, 60, 90, 55, 100];
var w = 500;
var h = 500;
var barPadding = 10;


var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr({
        x: function (d, i) {
            return i * (w / dataset.length);
        },
        y: function (d) {
            return h - (4 * d);
        },
        width: w / dataset.length - barPadding,
        height: function (d) {
            return 4 * d;
        },
        fill: function (d) {
            return "rgb( " + d * 1 + "," + d * 2 + "," + d * 3 + ")";
        }

    });


svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
        return d
    })
    .attr("text-anchor", "middle")

    .attr({
        x: function (d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
        },
        y: function (d) {
            return h - (4 * d) + 20;
        },
        fill: "white",
        fontFamily: "sans-serif",
        fontSize: "11px"

    })
