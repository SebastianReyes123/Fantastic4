var shipArray;
var counterShots = 0;
var counterHit = 0;
var name;
$(document).ready(function () {

	$("#endGameDIV").hide();

	$("#ButtonCreateBoardSmall").click(function () {
		name = $("#Name").val();
		$("#start").fadeOut(".start");

		CreateBoard(5);
		PlaceShip(5, 1);
	});

	$("#ButtonCreateBoardMed").click(function () {
		name = $("#Name").val();
		$("#start").fadeOut(".start");


		CreateBoard(10);
		PlaceShip(10, 2)
	});

	$("#ButtonCreateBoardLarge").click(function () {
		name = $("#Name").val();
		$("#start").fadeOut(".start");



		CreateBoard(15);
		PlaceShip(15, 5);
	});

	function CreateBoard(size) {
		var row = "<div class='divTableRow'>";
		var divEnd = "</div>";

		for (var i = 0; i < size; i++) {
			$("#divTableID").append(row);
			for (var j = 0; j < size; j++) {
				var cellID = "cellx" + i + "y" + j; //Genererar ett unikt ID till varje cell.
				//======= Sparar/skapar en cell(column i en rad) i en variabel, med en gemensam cellklass för alla celler i tabellen samt tilldelar det genererade unika ID:t till cellen.=======//
				var col = "<div class='divTableCell' id='" + cellID + "'></div>";
				$("#divTableID").append(col); // lägger till en cell i tabellen från den sparade cell variabeln
			}
			$("#divTableID").append(divEnd);// Stänger tabellen när alla celler är skapade.w
		}

		//Registrerar vilken cell som spelaren har klickat och sparar den i variabeln cellID
		$(".divTableCell").click(function () {
			$(this).css("background-color", "red");
			var cellID = $(this).attr('id'); // (this) refererar till anropet (.divTabelCell) i funktionen. Sparar cellid för att kontrollera om träff.
			//'id' är ett attribut, class är ett attribut, type är ett attribut.

			checkIfHit(cellID); // Veriferiar om klickad cell är träff och o
		});

	}


	function PlaceShip(size, shipQuantity) { //Här slumpas båtarna ut.
		shipArray = [shipQuantity]; //Antalet båtar defineras genom storleken på arreyen där cellID för båtarna sparas.
		var shipPlace;//Tempvariabel för att spara cellID för en slumpad båt.
		for (var i = 0; i < shipQuantity; i++) { //Går igenom arreyen med antalet båtar som ska läggas ut.
			var x = 0 + Math.floor(Math.random() * size);//Varför ".floor"? Varför " *size"? // x-koordinat slumpas och sparas i variabel.
			var y = 0 + Math.floor(Math.random() * size);// y-koordinat slumpas och sparas i variabel.
			shipPlace = "cellx" + x + "y" + y; //cell ID till slumpad båt sparas i tempvariabeln.
			var doppleGanger = false; //bool-variabel för att kontrollera att den slumpade båten inte krockar med annan slumpad båt.
			for (var j = 0; j < shipArray.length; j++) { // Går igenom hela arreyen med utlagda båtar

				if (shipPlace == shipArray[j]) {//Jämför den slumpade båten mot alla redan slumpade båtar i arreyen.
					doppleGanger = true; //Om slumpad båts cellID matchar redan slumpad båt, så sätts bool var till true.
				}
			}
			if (doppleGanger == true) {// Om bool var är true så slumpas båten om. 
				i--;
			}
			else
				shipArray[i] = shipPlace; // Om cellID är unik så sparas den i arreyen.
		}

	}

	function checkIfHit(cellID) {
		var nrShips = shipArray.length; //Antalet båtar är samma som antalet element i arreyen "shipArrey".
		counterShots++; // Håller räkning på antal försök spelaren har gjort.

		for (var i = 0; i < nrShips; i++) {
			if (shipArray[i] == cellID) { //jämför om den klickade cellen finns i arreyen för de utplacerade båtarna.
				$("#" + cellID).css("background-color", "blue");//Byter färg på cell om träff.
				counterHit++; //håller koll på hur många av de utlagda båtarna har träffats för att veta om spelet ska fortsätta eller ej.
				alert("Träff!");
				if (counterHit == nrShips)//Avslutar spelet när spelaren träffat alla utlagda båtar.
				{
					EndGame();
					alert("GRATTIS! Du klarade spelet på " + counterShots + " försök");
					$("#playGameDIV").hide();//Tar bort spelplan när spelet är slut.
					$("#head").hide();
					$("#endGameDIV").fadeIn();// Tar fram slutskärm/highscore listan när spelet är slut.
					
				}
			}

		}
	}
	function EndGame() {

		// Hämta array från local storage
		var highscoreName = JSON.parse(localStorage.getItem("myhighscoreNameArray42"));
		var highscoreScore = JSON.parse(localStorage.getItem("myhighscoreScoreArray42"));
		//Sätter highscoreName till ett värde första gången spelet körs, då värdet är null från början.
		if (highscoreName == null)
			highscoreName = [];
		if (highscoreScore == null) 
			highscoreScore = [];
		//Lägger till spelarens resultat i två arreyer för att utifrån det kunna spara och skapa en lista.
		if (highscoreScore.length > 10) { //Begränsar listan till 11 element, så att den inte skenar iväg i strl.
			highscoreName[highscoreName.length - 1] = name;
			highscoreScore[highscoreScore.length - 1] = counterShots;
			var length = 10; //längd för att skriva ut listan.
		}
		else {
			highscoreName[highscoreName.length] = name;
			highscoreScore[highscoreScore.length] = counterShots;
			var length = highscoreScore.length; //längd för att skriva ut listan.
		}
		//Sortering av highscorelistan.
		for (var i = 0; i < highscoreScore.length; i++) {

			for (var j = i + 1; j < highscoreScore.length; j++) {

				if (highscoreScore[i] > highscoreScore[j]) {
					var tempScore = highscoreScore[i];
					var tempName = highscoreName[i];
					highscoreScore[i] = highscoreScore[j];
					highscoreName[i] = highscoreName[j];
					highscoreScore[j] = tempScore;
					highscoreName[j] = tempName;
				}
			}
		}
		//Skapar en div-Highscorelista.
		var highRow = "<div class='HighTableRow'>";
		var divEnd = "</div>";
		for (var i = 0; i < length; i++) {
			$("#HighTableID").append(highRow);
			for (var j = 0; j < 3; j++) {
				var highCellID = "highCell" + j;
				var col = [];
				if (highscoreName[i] == name && highscoreScore[i] == counterShots) { //Ger det senaste resultatet en egen klass för att kunna highlighta den i listan.
					col[0] = "<div class='HighTableCellPlayer' id='" + highCellID + "'>#" + (i + 1) + "</div>";
					col[1] = "<div class='HighTableCellPlayer' id='" + highCellID + "'>" + highscoreName[i] + "</div>";
					col[2] = "<div class='HighTableCellPlayer' id='" + highCellID + "'>" + highscoreScore[i] + "</div>";
				}
				else {
					col[0] = "<div class='HighTableCell' id='" + highCellID + "'>#" + (i + 1) + "</div>";
					col[1] = "<div class='HighTableCell' id='" + highCellID + "'>" + highscoreName[i] + "</div>";
					col[2] = "<div class='HighTableCell' id='" + highCellID + "'>" + highscoreScore[i] + "</div>";
				}

				$("#HighTableID").append(col[j % 3]);
			}
			$("#HighTableID").append(divEnd);
		}
		// Spara array i local storage
		localStorage.setItem("myhighscoreNameArray42", JSON.stringify(highscoreName));
		localStorage.setItem("myhighscoreScoreArray42", JSON.stringify(highscoreScore));
	}

});


