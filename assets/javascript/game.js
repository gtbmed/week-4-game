$(document).ready(function() {

	// Set our target number
	var targetNumber = 19 + Math.floor(Math.random() * 120);
	console.log("target " + targetNumber);
	$(".targetNumberBox").text(targetNumber);
	
	// Global Variables
	// Player Value that increase with each crystal click
	var playerValue = 0;
	$(".yourSum").text(playerValue);

	//Wins and losses and getting them to appear on the page
	var win = 0;
	$(".yourWins").text(win);
	var lose = 0;
	$(".yourLosses").text(lose);

	var crystalValues = [];
	//crystalColors allows use add CSS classes
	// with individual attributes for each gem color
	var crystalColors = ["redGem", "blueGem", "yellowGem", "greenGem"];

	//We'll make our game setup be a function so that it can be called again after each win or loss.
	function newGame() {
		$("#crystalBoxes").empty();
		for (var i = 0; i < crystalColors.length; i++) {
			crystalValues[i] = 1 + Math.floor(Math.random() * 12);
			console.log(crystalValues);
			var crystals = $("<img>");
			//Do I need a separate class to click on or can I make the object clicked on be an existing one?  
			//I don't know so lets make one
			crystals.addClass("crystalClick");
			crystals.addClass(crystalColors[i]);
			// Can't get crystalBox to add with the crystalColors class possibly because one is a string the other is a call to an array with strings
			crystals.addClass("crystalBox");  
			crystals.attr("data-crystalvalue", crystalValues[i]);
			$("#crystalBoxes").append(crystals);
		}

	//Function to add the values from each crystal clicked on to our total.  
	// This taken from the CrystalExample and modified to fit the assignment.
		$(".crystalClick").on("click", function() {
		//Get the assigned crystal value by calling it with jquery and assinging it to a variable
		var addValue = ($(this).attr("data-crystalvalue"));
		// Here we'll parse the value of the crystal clicked since calling it with jquery gives a string
    	addValue = parseInt(addValue);

   		playerValue += addValue;
   		$(".yourSum").text(playerValue);

   		//Win / Lose conditions and what to do next

   		if (playerValue === targetNumber) {
   			alert("You Win!");
   			win++;
   			$(".yourWins").text(win);
   			playerValue = 0;
   			$(".yourSum").text(playerValue);
   			targetNumber = 19 + Math.floor(Math.random() * 120);
   			$(".targetNumberBox").text(targetNumber);
   			newGame();
   		}

   		else if (playerValue >= targetNumber) {
   			alert("You Lose!");
   			lose++;
   			$(".yourLosses").text(lose);
   			playerValue = 0;
   			$(".yourSum").text(playerValue);
   			targetNumber = 19 + Math.floor(Math.random() * 120);
   			$(".targetNumberBox").text(targetNumber);
   			newGame();
   		}
	});

	}
// Start the game the first time
	newGame();

});