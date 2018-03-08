var w = 500;
var h = 100;
var dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr({
        cx: function (d) {
            return d[0];
        },
        cy: function (d) {
            return d[1];
        },
        r: function (d) {
            return Math.sqrt(h - d[1]);
        },
        fill: function (d) {
            return "rgb(0," + 3 * d[1] + "," + 3 * d[1] + ")";
        }
    });
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
        return d[0] + "," + d[1];
    })
    .attr({
        x: function (d) {
            return d[0];
        },
        y: function (d) {
            return d[1];
        },
        fontFamily: "sans-serif",
        fontSize: "6px",
        fill: "purple"
    });
