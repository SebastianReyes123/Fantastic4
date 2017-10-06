$(document).ready(function () {

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
			$("#divTable").append(row);
			for (var j = 0; j < size; j++) {
				var cellID = "cellx" + i + "y" + j;
				var col = "<div class='divTableCell' id='" + cellID + "'>Cell: x" + i + "y" + j + "</div>";
				$("#divTable").append(col);
			}
			$("#divTable").append(divEnd);
		}
	}

	function PlaceShip(size, shipQuantity) {
		var shipArray = [shipQuantity];
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

	};

	for (var i = 0; i < size; i++) {
		$("#divTableID").append(row);
		for (var j = 0; j < size; j++) {
			var cellID = "cell" + i + j;
			var col = "<div class='divTableCell' id='" + cellID + "'></div>";
			$("#divTableID").append(col);
		}
		$("#divTableID").append(divEnd);
	}


    function checkIfHit(shotX, shotY) {
		var nrShips = shipArray.length;

		for (var i = 0; i < nrShips; i++) {
			var shipY = shipArray[i][5];
			var shipX = shipArray[i][7];
		}
	}

    $("#divTableID .divTableCell").click(function () {
        $(this).css("background-color", "red");

        var cellID = $(this).attr('id');
        var cellx = cellID[5]
        var celly = cellID[4]

        //alert(celly + cellx);

        checkIfHit(cellx, celly);
    });

});


