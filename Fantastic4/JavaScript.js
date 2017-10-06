var shipArray;
var counterShots = 0;
var counterHit = 0;

$(document).ready(function () {

    $("#endGameDIV").hide();

    $("#ButtonCreateBoardSmall").click(function () {
        var name = $("#Name").val();
        $("div").remove(".start");

        CreateBoard(5);
        PlaceShip(5, 1);
    });

    $("#ButtonCreateBoardMed").click(function () {
        var name = $("#Name").val();
        $("div").remove(".start");

        CreateBoard(10);
        PlaceShip(10, 2)
    });

    $("#ButtonCreateBoardLarge").click(function () {
        var name = $("#Name").val();
        $("div").remove(".start");


        CreateBoard(15);
        PlaceShip(15, 5);
    });

    function CreateBoard(size) {
        var row = "<div class='divTableRow'>";
        var divEnd = "</div>";

        for (var i = 0; i < size; i++) {
            $("#divTableID").append(row);
            for (var j = 0; j < size; j++) {
                var cellID = "cellx" + i + "y" + j;
                var col = "<div class='divTableCell' id='" + cellID + "'></div>";
                $("#divTableID").append(col);
            }
            $("#divTableID").append(divEnd);
        }

        //Find which cell that has been clicked
        $("#divTableID .divTableCell").click(function () {
            $(this).css("background-color", "red");
            var cellID = $(this).attr('id');

            checkIfHit(cellID);
        });

    }

    function PlaceShip(size, shipQuantity) {
        shipArray = [shipQuantity];
        var shipPlace;
        for (var i = 0; i < shipQuantity; i++) {
            var x = 0 + Math.floor(Math.random() * size);
            var y = 0 + Math.floor(Math.random() * size);
            shipPlace = "cellx" + x + "y" + y;
            var doppleGanger = false;
            for (var j = 0; j < shipArray.length; j++) {

                if (shipPlace == shipArray[j]) {
                    doppleGanger = true;
                }
            }
            if (doppleGanger == true) {
                i--;
            }
            else
                shipArray[i] = shipPlace;
        }

    }

    function checkIfHit(cellID) {
        var nrShips = shipArray.length;
        counterShots++;

        for (var i = 0; i < nrShips; i++) {
            if (shipArray[i] == cellID) {
                alert("Träff!");
                $("#" + cellID).css("background-color", "blue");
                counterHit++;
                if (counterHit == nrShips)
                {
                    alert("GRATTIS! Du klarade spelet på " + counterShots + " försök");
                    $("#playGameDIV").hide();
                    $("#endGameDIV").fadeIn();
                }
            }
        }
    }
});


