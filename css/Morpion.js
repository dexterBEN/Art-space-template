/**
	Version sans objet:
**/

/*Variable globale*/

// on decide de ce qui suit 
// - les y sont verticaux
// - les x sont horizontaux 
// - les y sont dans le tableau extérieur 
// - les x sont dnas le tableau intérieur 
// - les cases contiennent soit null, "X" ou "O"

var PLAYER_X = "X",
	PLAYER_O = "O",
	PLAYER_NONE = null;

var STATE_RUNNING = 1, // en cours 
	STATE_STOPPED = 0; // terminé 

/* fonction qui sert à fabriquer une grille */
function gridCreate() {
	var tab, y;
	// je créer un grand tableau de 3 lignes (Y)
	tab = new Array(3);
	// je parcours de ligne en ligne 
	for (y=0; y<3; y+=1) {
		// et je crée les colonnes
		tab[y] = [PLAYER_NONE, PLAYER_NONE, PLAYER_NONE];
	}
	return tab;
}

function gridDisplay(grid) {
	var x, y, ligne;
	console.log("Grille:");

	for (y=0; y<3; y+=1) {
		if (y > 0) { console.log("---+---+---"); }

		ligne = "";
		for (x=0; x<3; x+=1) {
			if (x > 0) { ligne += "|"; }
			switch (grid[y][x]) {
				case PLAYER_X: ligne += " X ";
					break;
				case PLAYER_O: ligne += " O ";
					break;
				case PLAYER_NONE: ligne += "   ";
					break;
				default: 
					ligne += " ? ";
			}
		}
		console.log(ligne);
	}
		/* 
			Grille:
 		 x | o |
		---+---+---
 		 o | x | x
		---+---+---
   		   |   | o
		*/
}

function emptyListCreate() {
	return [];
}

function emptyListDisplay(emptyList) {
	/* Cases vides: (0,2) (1,2) (2,0) */
	console.log("Cases vides: "+ emptyList);
}

function stateToString(state) {
	var stateStr;
    switch(state) {
    	case STATE_RUNNING: 
    		stateStr = "en cours";
    		break;
    	case STATE_STOPPED:
    		stateStr = "terminé";
    		break;
    	default: 
    		stateStr = "inconnu(bug?)";
    }
    return stateStr;
}

function winnerToString(winner) {
	var winnerStr;
	switch(winner) {
		case PLAYER_X: 
			winnerStr = "joueur X a gagné";
			break;
		case PLAYER_O:
			winnerStr = "joueur O a gagné";
			break;
		case PLAYER_NONE:
			winnerStr = "pas de vainqueur";
			break;
		default:
			winnerStr = "joueur inconnu(bug?)";
	}
	return winnerStr;
}

function playerToString(player) {
	var playerStr;
	switch(player) {
		case PLAYER_X: 
			playerStr = "X";
			break;
		case PLAYER_O:
			playerStr = "O";
			break;
		case PLAYER_NONE:
			playerStr = "personne";
			break;
		default:
			playerStr = "joueur inconnu(bug?)";
	}
	return playerStr;
}

/* variable globale */
function gameCreate() {
	return {
		grid: gridCreate(),
		empty: emptyListCreate(),
		nextPlayer: PLAYER_X,
		state: STATE_RUNNING,
		winner: PLAYER_NONE,
	};
}

function gameDisplay(game) {
	// AFFICHER L'EN TETE
	var stateStr, // texte pour l'état 
		winnerStr, // texte pour le vainqueur 
		playerStr; // texte pour le player 

	// fabriquer un texte pour l'état de jeu 
	stateStr = stateToString(game.state);
	winnerStr = winnerToString(game.winner);
	playerStr = playerToString(game.nextPlayer);

	// afficher l'état du jeu
	console.log("Etat: " + stateStr + " - " + winnerStr);
	console.log("Joueur: " + playerStr);
   	emptyListDisplay(game.empty);
	gridDisplay(game.grid);
}

// TEST UNITAIRE 
var game = gameCreate();
gameDisplay(game);

//Jouer un coup:

function playSet(game, x, y){

}

