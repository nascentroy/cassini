var w = 1000;
var h = 150;
var padding = 20;

//var dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [150, 150], [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];

//随机数据
var dataset =[];
var numDataPoints = 50;
var xRange = Math.random()*1000;
var yRange = Math.random()*1000;
for(var i = 0; i< numDataPoints;i++){
    var newNumber1 = Math.floor(Math.random()* xRange);
    var newNumber2 = Math.floor(Math.random()* yRange);
    dataset.push([newNumber1,newNumber2]);
}


//比例尺
var xScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function (d) {
        return d[0];
    })])
    .range([padding, w - 15 * padding]);

var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function (d) {
        return d[1];
    })])
    .range([h - padding, padding]);

var rScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function (d) {
        return d[1];
    })])
    .range([3, 10]);

//数轴
var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom"); //默认在数轴底部，直接指定也不会引起异常
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .ticks(5);//刻度树 D3显示时会作为参考值
//svg

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)


//circle

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr({
        cx: function (d) {
            return xScale(d[0]) + padding;
        },
        cy: function (d) {
            return yScale(d[1]);
        },
        r: function (d) {
            return rScale(d[1]);
        },
        fill: function (d) {
            return "rgb(0," + (d[1]+10) + "," + (d[1]+10) + ")";
        }
    });

//svg.selectAll("text")
//    .data(dataset)
//    .enter()
//    .append("text")
//    .text(function (d) {
//        return d[0] + "," + d[1];
//    })
//    .attr({
//        x: function (d) {
//            return xScale(d[0]);
//        },
//        y: function (d) {
//            return yScale(d[1]);
//        },
//        fill: "red"
//    })

//    .attr("font-family", "sans-serif")
//    .attr("font-size", "10px")

//在svg的元素底部追加了一个g元素
svg.append("g")
    .call(xAxis)
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + "," + (h - padding) + ")");
svg.append("g")
    .call(yAxis)
    .attr("class", "axis")
    .attr("transform", "translate(" + 2 * padding + ",0)");
    
