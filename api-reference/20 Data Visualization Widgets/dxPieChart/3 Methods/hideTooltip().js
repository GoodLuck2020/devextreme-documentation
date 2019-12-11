﻿var dataSource = [
    { continent: 'Africa', population: 1022234000 },
    { continent: 'Antarctica', population: 4490 },
    { continent: 'Asia', population: 4164252000 },
    { continent: 'Australia', population: 29127000 },
    { continent: 'Europe', population: 738199000 },
    { continent: 'North America', population: 542056000 },
    { continent: 'South America', population: 392555000 }
];

$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            argumentField: 'continent',
            valueField: 'population'
        },
        title: 'Population by Continent',
        tooltip: {
            format: {
                type: 'largeNumber',
                precision: 2
            }
        }
    });

    var clickCounter = 0;
    $('#tooltipShow').click(function () {
        var pieChart = $("#pieChartContainer").dxPieChart("instance");
        var series = pieChart.getAllSeries()[0];
        var points = series.getAllPoints();
        if (clickCounter == dataSource.length)
            clickCounter = 0;
        points[clickCounter].showTooltip();
        clickCounter++;
    });

    $('#tooltipHide').click(function () {
        var pieChart = $("#pieChartContainer").dxPieChart("instance");
        pieChart.hideTooltip();
    });
});