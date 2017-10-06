
var shipArray = ["cell12 , cell22, cell00"];

$(document).ready(function () {

    CreateBoard(3);

    $("#ButtonCreateBoardSmall").click(function () {
        CreateBoard(5);
    });

    $("#ButtonCreateBoardMed").click(function () {

        CreateBoard(10);

    });

    $("#ButtonCreateBoardLarge").click(function () {

        CreateBoard(15);
    });

    function CreateBoard(size) {
        var row = "<div class='divTableRow'>";
        var divEnd = "</div>";

        for (var i = 0; i < size; i++) {
            $("#divTableID").append(row);
            for (var j = 0; j < size; j++) {
                var cellID = "cell" + i + j;
                var col = "<div class='divTableCell' id='" + cellID + "'></div>";
                $("#divTableID").append(col);
            }
            $("#divTableID").append(divEnd);
        }
    }

    function checkIfHit(shotX, shotY)
    {
        var nrShips = shipArray.length;

        for (var i = 0; i < nrShips; i++) {
            var shipY = shipArray[i][5];
            var shipX = shipArray[i][7];
        }
    };

    $("#divTableID .divTableCell").click(function () {
        $(this).css("background-color", "red");

        var cellID = $(this).attr('id');
        var cellx = cellID[5]
        var celly = cellID[4]

        //alert(celly + cellx);

        checkIfHit(cellx, celly);
    });

});


