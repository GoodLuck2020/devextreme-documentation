$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'mediumturquoise' },
        valueIndicator: { color: 'lightgreen' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                customizeText: function (label) {
                    return label.valueText + ' mph';
                },
                font: {
                    color: 'dodgerblue',
                    size: 14
                }
            }
        },
        value: 32
    });
});