var dataset = [20, 10, 30, 10, 50, 60, 90, 55, 100];
var w = 500;
var h = 500;
var barPadding = 8;

var xScale = d3.scale.ordinal()
    .domain(d3.range(dataset.length))
    .rangeRoundBands([0, w], 0.05); //rangeRoundBands 接受一个最小值和最大值，计算这个区间可以分成几档 ->（w-0)/dataset.length，第二个参数为档间距（padding）
//为档的比例是多少 例子中是5%，rangeRoundBands 可以对输出值向下取整 将视觉元素与像素网格对齐，保证图形的边缘清晰锐利

var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([0, h]);

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
            return xScale(i);
        },
        y: function (d) {
            return h - yScale(d);
        },
        width: xScale.rangeBand(), //设置每个条形的宽度
        height: function (d) {
            return yScale(d);
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
    .attr("text-anchor", "start")

    .attr({
        x: function (d, i) {
            return xScale(i) + 2 * barPadding;
        },

        y: function (d) {
            return h - yScale(d) + 2 * barPadding;
        },
        fill: "white"
        //        fontFamily: "sans-serif",
        //        fontSize: "11px"


    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px");

d3.select("p")
    .on("click", function () {

        dataset = [10, 30, 30, 100, 99, 24, 65, 74, 82];
        svg.selectAll("rect")
            .data(dataset)
            .attr({
                y: function (d) {
                    return h - yScale(d);
                },
                height: function (d) {
                    return yScale(d);
                },
                fill: function (d) {
                    return "rgb(" + d * 1 + "," + d * 2 + "," + d * 3 + ")";
                }
            });


        svg.selectAll("text")
            .data(dataset)
            .text(function (d) {
                return d;
            })
            .attr(

                {
                    y: function (d) {
                        return h - yScale(d) + 14;
                    },
                    height: function (d) {
                        return yScale(d);

                    },
                    fill: "white"

                })

    })
