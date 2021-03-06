var chart = AmCharts.makeChart("chartdiv", {
"type": "serial",
"theme": "light",
"marginRight": 0,
"marginLeft": 40,
"autoMarginOffset": 20,
"mouseWheelZoomEnabled":true,
"dataDateFormat": "YYYY-MM-DD",
"valueAxes": [{
   "id": "v1",
   "axisAlpha": 0,
   "position": "left",
   "ignoreAxisWidth":true
}],
"balloon": {
   "borderThickness": 1,
   "shadowAlpha": 0
},
"graphs": [{
   "id": "g1",
   "balloon":{
	"drop":true,
	"adjustBorderColor":false,
	"color":"#ffffff"
   },
   "bullet": "round",
   "bulletBorderAlpha": 1,
   "bulletColor": "#FFFFFF",
   "bulletSize": 5,
   "hideBulletsCount": 50,
   "lineThickness": 2,
   "title": "red line",
   "useLineColorForBulletBorder": true,
   "valueField": "value",
   "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
}],
"chartScrollbar": {
   "graph": "g1",
   "oppositeAxis":false,
   "offset":30,
   "scrollbarHeight": 80,
   "backgroundAlpha": 0,
   "selectedBackgroundAlpha": 0.1,
   "selectedBackgroundColor": "#888888",
   "graphFillAlpha": 0,
   "graphLineAlpha": 0.5,
   "selectedGraphFillAlpha": 0,
   "selectedGraphLineAlpha": 1,
   "autoGridCount":true,
   "color":"#AAAAAA"
},
"chartCursor": {
   "pan": true,
   "valueLineEnabled": true,
   "valueLineBalloonEnabled": true,
   "cursorAlpha":1,
   "cursorColor":"#258cbb",
   "limitToGraph":"g1",
   "valueLineAlpha":0.2,
   "valueZoomable":true
},
"valueScrollbar":{
 "oppositeAxis":false,
 "offset":50,
 "scrollbarHeight":10
},
"categoryField": "date",
"categoryAxis": {
   "parseDates": true,
   "dashLength": 1,
   "minorGridEnabled": true
},
"export": {
   "enabled": true
},
"dataProvider": [{
   "date": "2016-07-27",
   "value": 569000
}, {
   "date": "2016-07-28",
   "value": 564000
}, {
   "date": "2016-07-29",
   "value": 563000
}, {
   "date": "2016-07-30",
   "value": 562500
}, {
   "date": "2016-07-31",
   "value": 569000
}, {
   "date": "2016-08-01",
   "value": 567000
}, {
   "date": "2016-08-02",
   "value": 560000
}, {
   "date": "2016-08-03",
   "value": 550000
}, {
   "date": "2016-08-04",
   "value": 540000
}, {
   "date": "2016-08-05",
   "value": 535000
}, {
   "date": "2016-08-06",
   "value": 530000
}, {
   "date": "2016-08-07",
   "value": 530000
}, {
   "date": "2016-08-08",
   "value": 525000
}, {
   "date": "2016-08-09",
   "value": 520000
}, {
   "date": "2016-08-10",
   "value": 450000
}, {
   "date": "2016-08-11",
   "value": 425000
}, {
   "date": "2016-08-12",
   "value": 422000
}, {
   "date": "2016-08-13",
   "value": 421000
}, {
   "date": "2016-08-14",
   "value": 420000
}, {
   "date": "2016-08-15",
   "value": 421500
}, {
   "date": "2016-08-16",
   "value": 400000
}, {
   "date": "2016-08-17",
   "value": 421000
}, {
   "date": "2016-08-18",
   "value": 421000
}, {
   "date": "2016-08-19",
   "value": 420000
}, {
   "date": "2016-08-20",
   "value": 421000
}, {
   "date": "2016-08-21",
   "value": 421250
}, {
   "date": "2016-08-22",
   "value": 421000
}, {
   "date": "2016-08-23",
   "value": 461000
}, {
   "date": "2016-08-24",
   "value": 420000
}, {
   "date": "2016-08-25",
   "value": 421000
}, {
   "date": "2016-08-26",
   "value": 420000
}, {
   "date": "2016-08-27",
   "value": 421000
}, {
   "date": "2016-08-28",
   "value": 421500
}, {
   "date": "2016-08-29",
   "value": 421000
}, {
   "date": "2016-08-30",
   "value": 461000
}, {
   "date": "2016-08-31",
   "value": 420000
}, {
   "date": "2016-09-01",
   "value": 429000
}, {
   "date": "2016-09-02",
   "value": 421000
}, {
   "date": "2016-09-03",
   "value": 419000
}, {
   "date": "2016-09-04",
   "value": 420000
}, {
   "date": "2016-09-05",
   "value": 421000
}, {
   "date": "2016-09-06",
   "value": 425000
}, {
   "date": "2016-09-07",
   "value": 19000
}, {
   "date": "2016-09-08",
   "value": 19250
}, {
   "date": "2016-09-09",
   "value": 18000
}, {
   "date": "2016-09-10",
   "value": 9000
}, {
   "date": "2016-09-11",
   "value": 19250
}, {
   "date": "2016-09-12",
   "value": 19000
}, {
   "date": "2016-09-13",
   "value": 19200
}, {
   "date": "2016-09-14",
   "value": 19250
}, {
   "date": "2016-09-15",
   "value": 19020
}, {
   "date": "2016-09-16",
   "value": 19014
}, {
   "date": "2016-09-17",
   "value": 19025
}, {
   "date": "2016-09-18",
   "value": 19600
}, {
   "date": "2016-09-19",
   "value": 20200
}, {
   "date": "2016-09-20",
   "value": 19600
}, {
   "date": "2016-09-21",
   "value": 19000
}, {
   "date": "2016-09-22",
   "value": 18060
}, {
   "date": "2016-09-23",
   "value": 19010
}, {
   "date": "2016-09-24",
   "value": 19003
}, {
   "date": "2016-09-25",
   "value": 19027
}, {
   "date": "2016-09-26",
   "value": 19325
}, {
   "date": "2016-09-27",
   "value": 19325
}, {
   "date": "2016-09-28",
   "value": 19652
}, {
   "date": "2016-09-29",
   "value": 19959
}, {
   "date": "2016-09-30",
   "value": 18500
}, {
   "date": "2016-10-01",
   "value": 16500
}, {
   "date": "2016-10-02",
   "value": 13600
}, {
   "date": "2016-10-03",
   "value": 15600
}, {
   "date": "2016-10-04",
   "value": 16200
}, {
   "date": "2016-10-05",
   "value": 19250
}, {
   "date": "2016-10-06",
   "value": 19000
}, {
   "date": "2016-10-07",
   "value": 19001
}, {
   "date": "2016-10-08",
   "value": 19023
}, {
   "date": "2016-10-09",
   "value": 19013
}, {
   "date": "2016-10-10",
   "value": 19013
}, {
   "date": "2016-10-11",
   "value": 19012
}, {
   "date": "2016-10-12",
   "value": 19012
}, {
   "date": "2016-10-13",
   "value": 19012
}, {
   "date": "2016-10-14",
   "value": 19012
}, {
   "date": "2016-10-15",
   "value": 19012
}, {
   "date": "2016-10-16",
   "value": 19012
}, {
   "date": "2016-10-17",
   "value": 19012
}, {
   "date": "2016-10-18",
   "value": 19012
}, {
   "date": "2016-10-19",
   "value": 19012
}, {
   "date": "2016-10-20",
   "value": 20136
}, {
   "date": "2016-10-21",
   "value": 20137
}, {
   "date": "2016-10-22",
   "value": 20138
}, {
   "date": "2016-10-23",
   "value": 20136
}, {
   "date": "2016-10-24",
   "value": 20136
}, {
   "date": "2016-10-25",
   "value": 23136
}, {
   "date": "2016-10-26",
   "value": 20233
}, {
   "date": "2016-10-27",
   "value": 20136
}, {
   "date": "2016-10-28",
   "value": 20136
}, {
   "date": "2016-10-29",
   "value": 20136
}, {
   "date": "2016-10-30",
   "value": 20136
}, {
   "date": "2016-10-31",
   "value": 17586
}, {
   "date": "2016-11-01",
   "value": 16893
}, {
   "date": "2016-11-02",
   "value": 16489
}, {
   "date": "2016-11-03",
   "value": 13458
}, {
   "date": "2016-11-04",
   "value": 13698
}, {
   "date": "2016-11-05",
   "value": 13689
}, {
   "date": "2016-11-06",
   "value": 16435
}, {
   "date": "2016-11-07",
   "value": 14568
}, {
   "date": "2016-11-08",
   "value": 13468
}, {
   "date": "2016-11-09",
   "value": 18649
}, {
   "date": "2016-11-10",
   "value": 16489
}, {
   "date": "2016-11-11",
   "value": 19853
}, {
   "date": "2016-11-12",
   "value": 13485
}, {
   "date": "2016-11-13",
   "value": 14586
}, {
   "date": "2016-11-14",
   "value": 14586
}, {
   "date": "2016-11-15",
   "value": 14685
}, {
   "date": "2016-11-16",
   "value": 14568
}, {
   "date": "2016-11-17",
   "value": 16534
}, {
   "date": "2016-11-18",
   "value": 19536
}, {
   "date": "2016-11-19",
   "value": 14586
}, {
   "date": "2016-11-20",
   "value": 13465
}, {
   "date": "2016-11-21",
   "value": 13658
}, {
   "date": "2016-11-22",
   "value": 14586
}, {
   "date": "2016-11-23",
   "value": 15611
}, {
   "date": "2016-11-24",
   "value": 14517
}, {
   "date": "2016-11-25",
   "value": 16514
}, {
   "date": "2016-11-26",
   "value": 15468
}, {
   "date": "2016-11-27",
   "value": 14586
}, {
   "date": "2016-11-28",
   "value": 14658
}, {
   "date": "2016-11-29",
   "value": 16356
}, {
   "date": "2016-11-30",
   "value": 14358
}, {
   "date": "2016-12-01",
   "value": 14586
}, {
   "date": "2016-12-02",
   "value": 11545
}, {
   "date": "2016-12-03",
   "value": 14586
}, {
   "date": "2016-12-04",
   "value": 11546
}, {
   "date": "2016-12-05",
   "value": 11696
}, {
   "date": "2016-12-06",
   "value": 11456
}, {
   "date": "2016-12-07",
   "value": 12345
}, {
   "date": "2016-12-08",
   "value": 13256
}, {
   "date": "2016-12-09",
   "value": 14586
}, {
   "date": "2016-12-10",
   "value": 14785
}, {
   "date": "2016-12-11",
   "value": 19586
}, {
   "date": "2016-12-12",
   "value": 14754
}, {
   "date": "2016-12-13",
   "value": 12125
}, {
   "date": "2016-12-14",
   "value": 14575
}, {
   "date": "2016-12-15",
   "value": 14585
}, {
   "date": "2016-12-16",
   "value": 15686
}, {
   "date": "2016-12-17",
   "value": 121
}, {
   "date": "2016-12-18",
   "value": 12586
}, {
   "date": "2016-12-19",
   "value": 14586
}, {
   "date": "2016-12-20",
   "value": 15681
}, {
   "date": "2016-12-21",
   "value": 13568
}, {
   "date": "2016-12-22",
   "value": 14578
}, {
   "date": "2016-12-23",
   "value": 14578
}, {
   "date": "2016-12-24",
   "value": 13698
}, {
   "date": "2016-12-25",
   "value": 17865
}, {
   "date": "2016-12-26",
   "value": 13689
}, {
   "date": "2016-12-27",
   "value": 17568
}, {
   "date": "2016-12-28",
   "value": 14536
}, {
   "date": "2016-12-29",
   "value": 14536
}, {
   "date": "2016-12-30",
   "value": 17856
}, {
   "date": "2016-12-31",
   "value": 14986
}, {
   "date": "2017-01-01",
   "value": 14589
}, {
   "date": "2017-01-02",
   "value": 17563
}, {
   "date": "2017-01-03",
   "value": 17457
}, {
   "date": "2017-01-04",
   "value": 17544
}, {
   "date": "2017-01-05",
   "value": 60000
}, {
   "date": "2017-01-06",
   "value": 63000
}, {
   "date": "2017-01-07",
   "value": 61000
}, {
   "date": "2017-01-08",
   "value": 60000
}, {
   "date": "2017-01-09",
   "value": 65000
}, {
   "date": "2017-01-10",
   "value": 75000
}, {
   "date": "2017-01-11",
   "value": 77000
}, {
   "date": "2017-01-12",
   "value": 78000
}, {
   "date": "2017-01-13",
   "value": 70000
}, {
   "date": "2017-01-14",
   "value": 70000
}, {
   "date": "2017-01-15",
   "value": 73000
}, {
   "date": "2017-01-16",
   "value": 71000
}, {
   "date": "2017-01-17",
   "value": 74000
}, {
   "date": "2017-01-18",
   "value": 78000
}, {
   "date": "2017-01-19",
   "value": 85000
}, {
   "date": "2017-01-20",
   "value": 82000
}, {
   "date": "2017-01-21",
   "value": 83000
}, {
   "date": "2017-01-22",
   "value": 88000
}, {
   "date": "2017-01-23",
   "value": 85000
}, {
   "date": "2017-01-24",
   "value": 85000
}, {
   "date": "2017-01-25",
   "value": 80000
}, {
   "date": "2017-01-26",
   "value": 87000
}, {
   "date": "2017-01-27",
   "value": 84000
}, {
   "date": "2017-01-28",
   "value": 83000
}, {
   "date": "2017-01-29",
   "value": 84000
}, {
   "date": "2017-01-30",
   "value": 81000
}]
});

chart.addListener("rendered", zoomChart);

zoomChart();

function zoomChart() {
chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
}
