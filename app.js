let count = 0;
let count2 = 0;
let scoreHome = document.getElementById('score1');
let scoreAway = document.getElementById('score2');

let HomeTeamName = document.getElementById('firstTeam');
let AwayTeamName = document.getElementById('secondTeam');

let HomeTeam = document.getElementById('teams1');
let AwayTeam = document.getElementById('teams2');

let HomeQuarterScore1 = document.getElementById('quarter1');
let HomeQuarterScore2 = document.getElementById('quarter2');
let HomeQuarterScore3 = document.getElementById('quarter3');
let HomeQuarterScore4 = document.getElementById('quarter4');

let AwayQuarterScore1 = document.getElementById('Awayquarter1');
let AwayQuarterScore2 = document.getElementById('Awayquarter2');
let AwayQuarterScore3 = document.getElementById('Awayquarter3');
let AwayQuarterScore4 = document.getElementById('Awayquarter4');

let quarter = document.getElementById('quarter');

let winner = document.getElementById('winner');

function HomeTeamAdd1 () {
    count+= 1;
    scoreHome.textContent = count;
}

function HomeTeamAdd2 () {
    count += 2;
    scoreHome.textContent = count;
}

function HomeTeamAdd3 () {
    count += 3;
    scoreHome.textContent = count;
}

function AwayTeamAdd1 () {
    count2 += 1;
    scoreAway.textContent = count2;
}

function AwayTeamAdd2 () {
    count2 += 2;
    scoreAway.textContent = count2;
}

function AwayTeamAdd3 () {
    count2 += 3;
    scoreAway.textContent = count2;
}

function ResetScore() {
    HomeTeamName.textContent = "Home";
    AwayTeamName.textContent = "Away";
    scoreHome.textContent = 0;
    scoreAway.textContent = 0;
    HomeQuarterScore1.textContent = "First Quarter: ";
    HomeQuarterScore2.textContent = "Second Quarter: ";
    HomeQuarterScore3.textContent = "Third Quarter: ";
    HomeQuarterScore4.textContent = "Fourth Quarter: ";
    AwayQuarterScore1.textContent = "First Quarter: ";
    AwayQuarterScore2.textContent = "Second Quarter: ";
    AwayQuarterScore3.textContent = "Third Quarter: ";
    AwayQuarterScore4.textContent = "Fourth Quarter: ";
    quarter.textContent = "1st Quarter";
    winner.textContent = "";

}

function ChangeTeamName() {
    let output = HomeTeam.options[HomeTeam.selectedIndex].text;
    HomeTeamName.textContent = output;

    let output2 = AwayTeam.options[AwayTeam.selectedIndex].text;
    AwayTeamName.textContent = output2;
}

function LogPointsPerQuarter() {

    if(quarter.textContent == "1st Quarter"){
        HomeQuarterScore1.textContent += scoreHome.textContent;
        AwayQuarterScore1.textContent += scoreAway.textContent;
        quarter.textContent = "2nd Quarter";
    }
    else if(quarter.textContent == "2nd Quarter"){
        HomeQuarterScore2.textContent += scoreHome.textContent;
        AwayQuarterScore2.textContent += scoreAway.textContent;
        quarter.textContent = "3rd Quarter";
    }
    else if(quarter.textContent == "3rd Quarter"){
        HomeQuarterScore3.textContent += scoreHome.textContent;
        AwayQuarterScore3.textContent += scoreAway.textContent;
        quarter.textContent = "4th Quarter";
    }
    else if(quarter.textContent == "4th Quarter"){
        HomeQuarterScore4.textContent += scoreHome.textContent;
        AwayQuarterScore4.textContent += scoreAway.textContent;
        announceWinner ();
    }
    else{
        quarter.textContent = "1st Quarter";
    }


}

function announceWinner () {
    let homeScore = parseInt(HomeQuarterScore4.textContent);
    let awayScore = parseInt(AwayQuarterScore4.textContent);

    if(homeScore > awayScore) {
        winner.textContent = HomeTeamName.textContent + " wins!";
    }
    else {
        winner.textContent = AwayTeamName.textContent + " wins!";
    }
}
