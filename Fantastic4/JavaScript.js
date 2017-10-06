
$(document).ready(function () {

    $("#cell00").click(function () {

        alert("Du har klickat på cell00");

    });

    $("#ButtonCreateBoardSmall").click(function () {

        var smallSize = 5;

        var row = "<div class='divTableRow'>";
        var col = "<div class='divTableCell' id='cell00'>&nbsp;</div>"
        var divEnd = "</div>";

        for (var i = 0; i < smallSize; i++) {

        }

        $("#divTable").append(row + col + col + col + col + col + divEnd + divEnd + divEnd + divEnd + divEnd + divEnd
            + row + col + col + col + col + col + divEnd + divEnd + divEnd + divEnd + divEnd + divEnd + 
            row + col + col + col + col + col + divEnd + divEnd + divEnd + divEnd + divEnd + divEnd + 
            row + col + col + col + col + col + divEnd + divEnd + divEnd + divEnd + divEnd + divEnd + 
            row + col + col + col + col + col + divEnd + divEnd + divEnd + divEnd + divEnd + divEnd
        );


        //$("#divTable").append("<div class='divTableCell'>Test</div><div class='divTableCell'>Test</div>");

        //<div class="divTableRow">
        //    <div class='divTableCell' id="cell00">&nbsp;</div>
        //    <div class="divTableCell" id="cell01">&nbsp;</div>
        //</div>
        //    <div class="divTableRow">
        //        <div class="divTableCell" id="cell10">&nbsp;</div>
        //        <div class="divTableCell" id="cell11">&nbsp;</div>
        //    </div>
        

    });

});