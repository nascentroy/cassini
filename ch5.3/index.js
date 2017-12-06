 var dataset = [10, 6, 30, 60, 19];
        d3.select("body").transition()
            .style("background-color", "teal");


        d3.select(".bar")
            .selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            .attr("class", "bar")
            .style("width", function(d) {
                var barwidth = d * 5;
                return barwidth + "px";
            })
            .text(function(d) {
                return "来吃豆豆: " + d;
            }) //接收d为输入的匿名函数，
            .style("color", function(d) {
                if (d >= 30) {
                    return "yellow"
                } else {
                    return "white"
                }
            });