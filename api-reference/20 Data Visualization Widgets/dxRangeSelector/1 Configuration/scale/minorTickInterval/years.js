﻿$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(1992, 0),
            endValue: new Date(2012, 0),
            minorTickInterval: { years: 1 }
        }
    });
});