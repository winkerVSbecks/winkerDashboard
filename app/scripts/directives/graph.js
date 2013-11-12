'use strict';

angular.module('winkerDashboardApp')
  .directive('graph', [function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var margin = {top: 50, right: 100, bottom: 50, left: 100},
				    width = element.parent().width() - margin.left - margin.right,
				    height = 500 - margin.top - margin.bottom;

				var parseDate = d3.time.format("%d-%b-%y").parse;

				var x = d3.time.scale()
				    .range([25, width]);

				var y = d3.scale.linear()
				    .range([height-50, 0]);

				var xAxis = d3.svg.axis()
				    .scale(x)
				    .orient("bottom")
				    .ticks(7);

				var yAxis = d3.svg.axis()
				    .scale(y)
				    .orient("left")
				    .ticks(6);

				var line = d3.svg.line()
				    .x(function(d) { return x(d.date); })
				    .y(function(d) { return y(d.close); });

				var svg = d3.select(element[0]).append("svg")
				    .attr("width", width + margin.left + margin.right)
				    .attr("height", height + margin.top + margin.bottom)
				  .append("g")
				    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

				var data = [
					{"Date":"30-Apr-12","Close":"75.03"},
					{"Date":"29-Apr-12","Close":"75.32"},
					{"Date":"27-Apr-12","Close":"74.29"},
					{"Date":"26-Apr-12","Close":"74.16"},
					{"Date":"25-Apr-12","Close":"75.04"},
					{"Date":"24-Apr-12","Close":"75.26"},
					{"Date":"23-Apr-12","Close":"74.34"},
					{"Date":"20-Apr-12","Close":"76.94"},
					{"Date":"19-Apr-12","Close":"76.55"}
				];

		    angular.forEach(data, function(d) {
	      	d.date = parseDate(d.Date);
	        d.close = +d.Close;
	      });

			  x.domain(d3.extent(data, function(d) { return d.date; }));
			  y.domain(d3.extent(data, function(d) { return d.close; }));

			  svg.append("g")
			      .attr("class", "x axis")
			      .attr("transform", "translate(0," + height + ")")
			      .call(xAxis)
			    .append("text")
			    	.style("text-anchor", "end")

			  svg.append("g")
			      .attr("class", "y axis")
			      .call(yAxis)
			    .append("text")
			      .attr("transform", "rotate(-90)")
			      .attr("y", 6)
			      .attr("dy", ".71em")

			  svg.append("path")
			      .datum(data)
			      .attr("class", "line")
			      .attr("d", line);

      }
    };

  }]);


