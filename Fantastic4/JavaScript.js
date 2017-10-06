//var ship1;
//var ship2;
//var ship3;
//var ship4;
//var ship5;

$(document).ready(function () {

    $("#ButtonCreateBoardSmall").click(function () {
		var name = $("#Name").val();
		alert(name);
		$("div").remove(".start");
        CreateBoard(5);
        PlaceShip(5, 1);
    });

    $("#ButtonCreateBoardMed").click(function () {
		var name = $("#Name").val();
		$("div").remove(".start");

		alert(name);
        CreateBoard(10);
        PlaceShip(10, 2)

    });

    $("#ButtonCreateBoardLarge").click(function () {
		var name = $("#Name").val();
		$("div").remove(".start");

		alert(name);
        CreateBoard(15);
        PlaceShip(15, 5);
    });

    function CreateBoard(size) {
        var row = "<div class='divTableRow'>";
        var divEnd = "</div>";

        for (var i = 0; i < size; i++) {
            $("#divTable").append(row);
            for (var j = 0; j < size; j++) {
                var cellID = "cell" + i + j;
                var col = "<div class='divTableCell' id='" + cellID + "'>Cell: " + i + j + "</div>";
                $("#divTable").append(col);
            }
            $("#divTable").append(divEnd);
        }
    }

    function PlaceShip(size, shipQuantity)
    {
        var shipArray = [x,x,x,x,x];
        var shipPlace;
        for (var i = 0; i < shipQuantity; i++) {
            var x = 0 + Math.floor(Math.random() * size);
            var y = 0 + Math.floor(Math.random() * size);
            shipPlace = "cell" + x + y;
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
        //alert(shipPlace);
    }

    $("#cell00").click(function () {
        var cell00 = $("#cell00").text();
        alert(cell00);
    });
});


