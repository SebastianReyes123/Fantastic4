﻿
$(document).ready(function () {

    $("#ButtonCreateBoardSmall").click(function () {

        CreateBoard(5);
    });

    $("#ButtonCreateBoardMed").click(function () {

        CreateBoard(10);

    });

    $("#ButtonCreateBoardLarge").click(function () {

        CreateBoard(15);
    });

    function CreateBoard(size)
    {
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

    $("#cell00").click(function () {
        var cell00 = $("#cell00").text();
        alert(cell00);
    });
});


