var w = 1000;
var h = 100;
var padding = 10;
var dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
//比例尺
var xScale = d3.scale.linear()
.domain([0,d3.max(dataset,function(d){return d[0];})])
.range([padding,w-10*padding]);

var yScale = d3.scale.linear()
.domain([0,d3.max(dataset,function(d){return d[1];})])
.range([h-padding,padding]);

var rScale = d3.scale.linear()
.domain([0,d3.max(dataset,function(d){return d[1];})])
.range([3,10]);


//散点
svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr({
    cx: function(d){
        return xScale(d[0]);
    },
    cy: function(d){
        return yScale(d[1]);
    },
    r: function(d){
        return rScale(d[1]);
    }
});
//标签
svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(function(d){ return d[0]+","+d[1];})
.attr({
    x: function(d){
        return xScale(d[0]);},
    y: function(d){
        return yScale(d[1]);
    },
    fill: "red"
})

.attr("font-family", "sans-serif")
.attr("font-size", "10px")
;
