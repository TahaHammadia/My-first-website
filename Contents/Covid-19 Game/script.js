class Action {
	constructor(deltaR, moral) {
		this.deltaR = deltaR;   //multiplied by 100 in order to improve computation precision
		this.moral = moral;     //multiplied by 10 in order to improve computation precision
	}
}
var actionProp = [new Action(10, 1), new Action(20, 3), new Action(50, 5),
				  new Action(110, 11), new Action(170, 17), new Action(220, 23),
				  new Action(120, 13), new Action(80, 9), new Action(260, 30), new Action(400, 100)];
var stats = [], actions = [], startButton = document.getElementById("start"),
	nextButton = document.getElementById("nextWeek"), reButton = document.getElementById("restart");
let i, R, act, dead, newAct, popularity, specialIncrease = false, popDanger = false;
for(i = 1; i <= 8; i++) {
	stats.push(document.getElementById("stat" + i));
	actions.push(document.getElementById("mes" + i));
}
for(i = 9; i <= 10; i++) {
	actions.push(document.getElementById("mes" + i));
}

function start() {
	stats[0].innerHTML = 1;
	stats[1].innerHTML = 6;
	stats[2].innerHTML = 2;
	stats[3].innerHTML = 0;
	stats[4].innerHTML = 2;
	stats[5].innerHTML = 0;
	stats[6].innerHTML = 2;
	stats[7].innerHTML = 70;
	startButton.disabled = true;
	startButton.style.cursor = "not-allowed";
	nextButton.disabled = false;
	nextButton.style.cursor = "pointer";
	reButton.disabled = false;
	reButton.style.cursor = "pointer";
}
function next() {
	if(stats[0].innerHTML == 53) {
		document.getElementById("play").style.display = "none";
		document.getElementById("win").style.display = "block";
	}
	stats[0].innerHTML = parseInt(stats[0].innerHTML) + 1;
	act = parseInt(stats[6].innerHTML);
	dead = Math.floor(act * 0.05);
	stats[3].innerHTML = dead;
	stats[5].innerHTML = parseInt(stats[5].innerHTML) + dead;
	R = 600;
	popularity = parseInt(stats[7].innerHTML) * 10;
	for(let k in actionProp) {
		if(actions[k].checked) {
			R -= actionProp[k].deltaR;
			popularity -= actionProp[k].moral;
		}
	}
	R /= 100;
	if(R < 0) {
		R = 0;
	}
	stats[1].innerHTML = R;
	newAct = Math.floor(act * Math.exp(R * 0.07));
	stats[6].innerHTML = newAct - dead;
	stats[2].innerHTML = newAct - act;
	stats[4].innerHTML = parseInt(stats[4].innerHTML) + newAct - act;
	if(newAct - act > 10000) {
		popularity -= 50;
	}
	if(dead > 500) {
		popularity -= 50;
		specialIncrease = true;
	}
	else if(specialIncrease && dead < 50) {
		popularity += 100;
		specialIncrease = false;
	}
	if(R < 1.5) {
		populatity += 100;
	}
	popularity /= 10;
	stats[7].innerHTML = popularity;
	if(popDanger && popularity < 20) {
		document.getElementById("play").style.display = "none";
		document.getElementById("lose").style.display = "block";
	}
	else if(popularity < 20) {
		popDanger = true;
	}else if(popDanger) {
		popDanger = false;
	}
}
function restart() {
	document.getElementById("play").style.display = "block";
	document.getElementById("win").style.display = "none";
	document.getElementById("lose").style.display = "none";
	stats[0].innerHTML = 1;
	stats[1].innerHTML = 6;
	stats[2].innerHTML = 2;
	stats[3].innerHTML = 0;
	stats[4].innerHTML = 2;
	stats[5].innerHTML = 0;
	stats[6].innerHTML = 2;
	stats[7].innerHTML = 70;
}
