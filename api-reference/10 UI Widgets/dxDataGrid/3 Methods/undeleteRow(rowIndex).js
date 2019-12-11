$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'language', 'format'
        ],
        paging: { pageSize: 8 },
        editing: { mode: 'batch' }
    });

    $("#rowIndexContainer").dxNumberBox({
        value: 0,
        step: 1,
        showSpinButtons: true,
        min: 0,
        max: 7,
        height: 35,
        width: 100
    });

    $("#DeleteRowButton").dxButton({
        text: 'Delete Row',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            var rowIndex = $('#rowIndexContainer').dxNumberBox('instance').option('value');
            dataGrid.deleteRow(rowIndex);
        }
    });

    $("#UndeleteRowButton").dxButton({
        text: 'Undelete Row',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            var rowIndex = $('#rowIndexContainer').dxNumberBox('instance').option('value');
            dataGrid.undeleteRow(rowIndex);
        }
    });

    $("#saveChangesButton").dxButton({
        text: 'Save Changes',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.saveEditData();
        }
    });

    $("#cancelChangesButton").dxButton({
        text: 'Cancel Changes',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.cancelEditData();
        }
    });
});