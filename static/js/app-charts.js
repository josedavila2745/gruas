/*!
 * Your-project-name v1.0.0
 * http://project-homepage.com
 *
 * Copyright (c) 2021 Your Company
 */

var App = (function () {
  'use strict';
  
  App.charts = function( ){

    function randValue() {
      return (Math.floor(Math.random() * (1 + 50 - 20))) + 10;
    }

    //Counter
    function counter(){

      $('[data-toggle="counter"]').each(function(i, e){
        var _el       = $(this);
        var prefix    = '';
        var suffix    = '';
        var start     = 0;
        var end       = 0;
        var decimals  = 0;
        var duration  = 2.5;

        if( _el.data('prefix') ){ prefix = _el.data('prefix'); }

        if( _el.data('suffix') ){ suffix = _el.data('suffix'); }

        if( _el.data('start') ){ start = _el.data('start'); }

        if( _el.data('end') ){ end = _el.data('end'); }

        if( _el.data('decimals') ){ decimals = _el.data('decimals'); }

        if( _el.data('duration') ){ duration = _el.data('duration'); }

        var count = new CountUp(_el.get(0), start, end, decimals, duration, { 
          suffix: suffix,
          prefix: prefix,
        });

        count.start();
      });
    }

    //Line Chart 1
    function widget_linechart1(){

      var color1 = App.color.primary;

      var plot_statistics = $.plot($("#line-chart1"), [{
        data: [
          [0, 20], [1, 30], [2, 25], [3, 39], [4, 35], [5, 40], [6, 30], [7, 45]
        ],
        label: "Page Views"
      }
      ], {
        series: {
          lines: {
            show: true,
            lineWidth: 2, 
            fill: true,
            fillColor: {
              colors: [{
                opacity: 0.35
              }, {
                opacity: 0.35
              }
              ]
            } 
          },
          points: {
            show: true
          },
          shadowSize: 0
        },
        legend:{
          show: false
        },
        grid: {
          margin: {
            left: -8,
            right: -8,
            top: 0,
            bottom: 0
          },
          show: false,
          labelMargin: 15,
          axisMargin: 500,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(0,0,0,0.15)",
          borderWidth: 0
        },
        tooltip:{
          show: true,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: false
        },
        colors: [color1],
        xaxis: {
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          autoscaleMargin: 0.5,
          ticks: 4,
          tickDecimals: 0
        }
      });

      widget_tooltipPosition('line-chart1', 45);
    }

    //Chart Pie 4
    function widget_chartpie4(){
      var data = [
        { label: "Google", data: 45},
        { label: "Dribbble", data: 25},
        { label: "Twitter", data: 20},
        { label: "Facebook", data: 10}
      ]; 

      var color1 = tinycolor( App.color.danger ).brighten( 9 ).toString();
      var color2 = tinycolor( App.color.danger ).lighten( 13 ).toString();
      var color3 = tinycolor( App.color.danger ).lighten( 20 ).toString();
      var color4 = tinycolor( App.color.danger ).lighten( 27 ).toString();

      $.plot('#pie-chart4', data, {
        series: {
          pie: {
            show: true,
            innerRadius: 0.35,
            shadow:{
              top: 5,
              left: 15,
              alpha:0.3
            },
            stroke:{
              width:0
            },
            label: {
                show: true,
                formatter: function (label, series) {
                    return '<div style="font-size:12px;text-align:center;padding:2px;color:#333;">' + label + '</div>';
                }
            },
            highlight:{
              opacity: 0.08
            }
          }
        },
        grid: {
          hoverable: true,
          clickable: true
        },
        tooltip:{
          show: true,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart arrow-none'> <div class='label'> <div class='label-x'> %x.0% </div> </div></div>",
          defaultTheme: false
        },
        colors: [color1, color2, color3, color4],
        legend: {
          show: false
        }
      });
    }

    //Bar Chart 1
    function widget_barchart1(){

      var color1 = tinycolor( App.color.warning ).lighten( 25 ).toString();
      var color2 = tinycolor( App.color.warning ).brighten( 3 ).toString();

      var plot_statistics = $.plot($("#bar-chart1"), [
        {
          data: [
            [0, 15], [1, 15], [2, 19], [3, 28], [4, 30], [5, 37], [6, 35], [7, 38], [8, 48], [9, 43], [10, 38], [11, 32], [12, 38]
          ],
          label: "Page Views"
        },
        {
          data: [
            [0, 7], [1, 10], [2, 15], [3, 23], [4, 24], [5, 29], [6, 25], [7, 33], [8, 35], [9, 38], [10, 32], [11, 27], [12, 32]
          ],
          label: "Unique Visitor"
        }
      ], {
        series: {
          bars: {
            align: 'center',
            show: true,
            lineWidth: 1, 
            barWidth: 0.6, 
            fill: true,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: 1
              }
              ]
            } 
          },
          shadowSize: 2
        },
        legend:{
          show: false
        },
        grid: {
          margin: 0,
          show: false,
          labelMargin: 10,
          axisMargin: 500,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(0,0,0,0.15)",
          borderWidth: 0
        },
        tooltip:{
          show: true,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: false
        },
        colors: [color1, color2],
        xaxis: {
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          autoscaleMargin: 0.5,
          ticks: 4,
          tickDecimals: 0
        }
      });

      widget_tooltipPosition('bar-chart1', 60);
    }

    //Mini widget 1
    function line_chart_mini(){

      var color1 = tinycolor( App.color.success ).lighten( 7 ).toString();
      var color2 = App.color.success;

      var data = [
        [1, 20],
        [2, 50],
        [3, 35],
        [4, 50],
        [5, 25]
      ];

      var data2 = [
        [1, 50],
        [2, 20],
        [3, 55],
        [4, 30],
        [5, 65]
      ];

      var plot_statistics = $.plot("#linechart-mini1", 
        [
        {
          data: data, 
          canvasRender: true
        },
        {
          data: data2, 
          canvasRender: true
        }
        ], {
        series: {
          lines: {
            show: true,
            lineWidth: 0, 
            fill: true,
            fillColor: { colors: [{ opacity: 0.7 }, { opacity: 0.7}] }
          },
          fillColor: "rgba(0, 0, 0, 1)",
          shadowSize: 0,
          curvedLines: {
            apply: true,
            active: true,
            monotonicFit: true
          }
        },
        legend:{
          show: false
        },
        grid: {
          show:false,
          hoverable: true,
          clickable: true
        },
        tooltip:{
          show: true,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: false
        },
        colors: [color1, color2],
        xaxis: {
          autoscaleMargin: 0,
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          autoscaleMargin: 0.5,
          ticks: 5,
          tickDecimals: 0
        }
      });

      widget_tooltipPosition('linechart-mini1', 45);
    }

    //Live data chart
    function line_live_data(){

      var color1 = App.color.success;

      var data = [],
      totalPoints = 100;

      function getRandomData() {

        if (data.length > 0)
          data = data.slice(1);

        // Do a random walk

        while (data.length < totalPoints) {

          var prev = data.length > 0 ? data[data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;

          if (y < 0) {
            y = 0;
          } else if (y > 100) {
            y = 100;
          }

          data.push(y);
        }

        // Zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
          res.push([i, data[i]])
        }

        return res;
      }

      var updateInterval = 500;

      var plot = $.plot("#live-data", [ getRandomData() ], {
        series: {
          shadowSize: 0,// Drawing is faster without shadows
          lines: {
            show: true,
            lineWidth: 1, 
            fill: true,
            fillColor: {
              colors: [{
                opacity: 0.35
              }, {
                opacity: 0.35
              }
              ]
            } 
          }
        },
        grid: {
          show: true,
          margin: {
            top: 3,
            bottom: 0,
            left: 0,
            right: 0,
          },
          labelMargin: 0,
          axisMargin: 0,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          minBorderMargin: 0
        },
        tooltip:{
          show: true,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: false
        },
        colors:[ color1 ],
        yaxis: {
          show: false,
          autoscaleMargin: 0.2,
          ticks: 5,
          tickDecimals: 0
        },
        xaxis: {
          show: false,
          autoscaleMargin: 0
        }
      });

      widget_tooltipPosition('live-data', 45);

      function update() {

        plot.setData([getRandomData()]);

        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(update, updateInterval);
      }

      update();
    }

    //Line Chart
    function widget_linechart_live(){

      var color1 = tinycolor( App.color.primary ).lighten( 22 );
      var color2 = App.color.primary;

      var data_com2 = [
        [1, randValue()],
        [2, randValue()],
        [3, 2 + randValue()],
        [4, 3 + randValue()],
        [5, 5 + randValue()],
        [6, 10 + randValue()],
        [7, 15 + randValue()],
        [8, 20 + randValue()],
        [9, 25 + randValue()],
        [10, 30 + randValue()],
        [11, 35 + randValue()],
        [12, 25 + randValue()],
        [13, 15 + randValue()],
        [14, 20 + randValue()],
        [15, 45 + randValue()],
        [16, 50 + randValue()],
        [17, 65 + randValue()],
        [18, 70 + randValue()],
        [19, 85 + randValue()],
        [20, 80 + randValue()],
        [21, 75 + randValue()],
        [22, 80 + randValue()],
        [23, 75 + randValue()]
      ];
      var data_com = [
        [1, randValue()],
        [2, randValue()],
        [3, 10 + randValue()],
        [4, 15 + randValue()],
        [5, 20 + randValue()],
        [6, 25 + randValue()],
        [7, 30 + randValue()],
        [8, 35 + randValue()],
        [9, 40 + randValue()],
        [10, 45 + randValue()],
        [11, 50 + randValue()],
        [12, 55 + randValue()],
        [13, 60 + randValue()],
        [14, 70 + randValue()],
        [15, 75 + randValue()],
        [16, 80 + randValue()],
        [17, 85 + randValue()],
        [18, 90 + randValue()],
        [19, 95 + randValue()],
        [20, 100 + randValue()],
        [21, 110 + randValue()],
        [22, 120 + randValue()],
        [23, 130 + randValue()]
      ];

      var plot_statistics = $.plot($("#line-chart-live"), [{
        data: data_com, showLabels: true, label: "New Visitors", labelPlacement: "below", canvasRender: true, cColor: "#FFFFFF" 
      },{
        data: data_com2, showLabels: true, label: "Old Visitors", labelPlacement: "below", canvasRender: true, cColor: "#FFFFFF" 
      }
      ], {
        series: {
          lines: {
            show: true,
            lineWidth: 1.5, 
            fill: true,
            fillColor: { colors: [{ opacity: 0.5 }, { opacity: 0.5}] },
          },
          fillColor: "rgba(0, 0, 0, 1)",
          points: {
            show: false,
            fill: true
          },
          shadowSize: 0
        },
        legend:{
          show: false
        },
        grid: {
          show: false,
          margin: {
            top: -20,
            bottom: 0,
            left: 0,
            right: 0,
          },
          labelMargin: 0,
          axisMargin: 0,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          minBorderMargin: 0
        },
        tooltip:{
          show: true,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: false
        },
        colors: [color1, color2],
        xaxis: {
          autoscaleMargin: 0,
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          autoscaleMargin: 0.2,
          ticks: 5,
          tickDecimals: 0
        }
      });

      widget_tooltipPosition('line-chart-live', 60);
    }

    //Fullwidth line chart 1
    function line_chart2(){

      var color1 = App.color.primary;

      var chartEl = $("#line-chart2");
      var data = [
        [1, 10],
        [2, 30],
        [3, 10 + 45],
        [4, 15 + 21],
        [5, 57],
        [6, 80],
        [7, 65],
        [8, 50],
        [9, 80],
        [10, 70],
        [11, 90],
        [12, 55 + 12],
        [12, 55 + 12]
      ];

      var plot_statistics = $.plot("#line-chart2", 
        [{
          data: data, 
          showLabels: true, 
          label: "New Visitors", 
          labelPlacement: "below", 
          canvasRender: true, 
          cColor: "#FFFFFF" 
        }
        ], {
        series: {
          lines: {
            show: true,
            lineWidth: 2, 
            fill: true,
            fillColor: { colors: [{ opacity: 0.35 }, { opacity: 0.35}] }
          },
          fillColor: "rgba(0, 0, 0, 1)",
          points: {
            show: true,
            fill: true,
            fillColor: color1
          },
          shadowSize: 0
        },
        legend:{
          show: false
        },
        grid: {
          show:false,
          margin: {
            left: -8,
            right: -8,
            top: 0,
            botttom: 0
          },
          labelMargin: 0,
           axisMargin: 0,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0
        },
        tooltip:{
          show: true,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: false
        },
        colors: [color1],
        xaxis: {
          autoscaleMargin: 0,
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          autoscaleMargin: 0.5,
          ticks: 5,
          tickDecimals: 0
        }
      });

      widget_tooltipPosition('line-chart2', 60);
    }

    //Line Chart 2
    function widget_linechart2(){

      var color1 = tinycolor( App.color.primary ).lighten( 5 ).toString();

    	var plot_statistics = $.plot($("#line-chart3"), [{
        data: [
        	[0, 20], [1, 30], [2, 25], [3, 39], [4, 35], [5, 40], [6, 30], [7, 45]
        ],
        label: "Page Views"
      }
      ], {
        series: {
          lines: {
            show: true,
            lineWidth: 2, 
            fill: true,
            fillColor: {
              colors: [{
                opacity: 0.1
              }, {
                opacity: 0.1
              }
              ]
            } 
          },
          points: {
            show: true
          },
          shadowSize: 0
        },
        legend:{
          show: false
        },
        grid: {
          margin: {
            left: 23,
            right: 30,
            top: 20,
            botttom: 40
          },
        	labelMargin: 15,
          axisMargin: 500,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(0,0,0,0.15)",
          borderWidth: 0
        },
        tooltip:{
          show: true,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: false
        },
        colors: [color1],
        xaxis: {
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          ticks: 4,
          tickSize: 15,
          tickDecimals: 0
        }
      });

      widget_tooltipPosition('line-chart3', 60);
    }

    //Bar Chart 2
    function widget_barchart2(){

      var color1 = App.color.success;
      var color2 = tinycolor( App.color.success ).lighten( 22 ).toString();

    	var plot_statistics = $.plot($("#bar-chart2"), [
	    	{
	        data: [
	        	[0, 7], [1, 13], [2, 17], [3, 20], [4, 26], [5, 37], [6, 35], [7, 28], [8, 38], [9, 38], [10, 32]
	        ],
	        label: "Page Views"
	      },
	    	{
	        data: [
	        	[0, 15], [1, 10], [2, 15], [3, 25], [4, 30], [5, 29], [6, 25], [7, 33], [8, 45], [9, 43], [10, 38]
	        ],
	        label: "Unique Visitor"
	      }
      ], {
        series: {
          bars: {
          	order: 2,
          	align: 'center',
            show: true,
            lineWidth: 1, 
            barWidth: 0.35, 
            fill: true,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: 1
              }
              ]
            } 
          },
          shadowSize: 2
        },
        legend:{
          show: false
        },
        grid: {
          margin: {
            left: 23,
            right: 30,
            top: 20,
            botttom: 40
          },
        	labelMargin: 10,
          axisMargin: 200,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(0,0,0,0.15)",
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.15)"
        },
        tooltip:{
          show: true,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: false
        },
        colors: [color1, color2],
        xaxis: {
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          ticks: 4,
          tickDecimals: 0
        }
      });

      widget_tooltipPosition('bar-chart2', 60);
    }

    //Positioning tooltip
    function widget_tooltipPosition(id, top){
      $('#'+id).bind("plothover", function (event, pos, item) {
        var widthToolTip = $('.tooltip-chart').width();
        if(item){
          $(".tooltip-chart")
            .css({top: item.pageY - top, left: item.pageX - (widthToolTip / 2)})
            .fadeIn(200);
        }else{
          $(".tooltip-chart").hide();
        }
      });
    }

    //row 1
      widget_linechart2();
	    widget_barchart2();

    //row 3
      widget_linechart1();
      widget_chartpie4();
      widget_barchart1();

    //row 4
      line_chart_mini();
      line_live_data();

    //row 2
      widget_linechart_live();
      line_chart2();
  };

  return App;
})(App || {});
