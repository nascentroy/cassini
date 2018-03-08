var dataset = [];
for (var i=0;i<20;i++){
    var newNum = Math.floor(Math.random()*100);
    dataset.push(newNum);
}

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
