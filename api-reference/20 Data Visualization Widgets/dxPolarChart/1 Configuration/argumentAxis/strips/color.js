﻿var dataSource = [
    { year: 1950, europe: 546, americas: 332, africa: 227 },
    { year: 2050, europe: 650, americas: 1231, africa: 1937 },
    { year: 2040, europe: 680, americas: 1178, africa: 1665 },
    { year: 2030, europe: 704, americas: 1110, africa: 1416 },
    { year: 2020, europe: 721, americas: 1027, africa: 1189 },
    { year: 2010, europe: 728, americas: 935, africa: 982 },
    { year: 2000, europe: 730, americas: 836, africa: 797 },
    { year: 1990, europe: 721, americas: 721, africa: 623 },
    { year: 1980, europe: 694, americas: 614, africa: 471 },
    { year: 1970, europe: 656, americas: 513, africa: 361 },
    { year: 1960, europe: 605, americas: 417, africa: 283 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'year',
            type: 'line'
        },
        series: [
            { valueField: 'europe', name: 'Europe' },
            { valueField: 'americas', name: 'Americas' },
            { valueField: 'africa', name: 'Africa' }
        ],
        argumentAxis: {
            strips: [
                { startValue: 1960, endValue: 1970, color: 'rgba(68, 100, 213, 0.2)' },
                { startValue: 1980, endValue: 1990, color: 'rgba(175, 238, 238, 1)' },
                { startValue: 2000, endValue: 2010, color: 'rgba(64, 224, 208, 1)' },
                { startValue: 2020, endValue: 2030, color: 'rgba(255, 239, 213, 1)' },
                { startValue: 2040, endValue: 2050, color: 'rgba(135, 206, 235, 1)' }
            ]
        }
    });
});