import {
	countriesOfEurope
} from './countries.js';

class Country {
	constructor(countryName, capital, flag) {
		this._countryName = countryName;
		this._capital = capital;
		this._flag = flag;
	}
	get countryName() {
		return this._countryName;
	}
	get capital() {
		return this._capital;
	}
	get flag() {
		return this._flag;
	}
}
class Quiz {
	constructor() {
		this._countries = null;
		this._questions = null;
		this._answers = null;
	}
	get countries() {
		return this._countries;
	}
	get questions() {
		return this._questions;
	}
	get answers() {
		return this._answers;
	}
	createQuestions() {

	}
	getQuestion() {

	}
	addAnswer(question, answer) {

	}
	getRandomCountryCapital() {

	}
}
class QuizApp {
	constructor() {

	}
	play() {

	}
	showQuestion(question) {

	}
	showResult() {
		document.getElementById("answers").innerHTML = "";
		[...this._quiz.answers].forEach(([key, value]) => {
			const tr = document.createElement("tr");
			const td1 = document.createElement("td");
			td1.appendChild(document.createTextNode(key.countryName));
			const td2 = document.createElement("td");
			td2.appendChild(document.createTextNode(key.capital));
			const td3 = document.createElement("td");
			td3.appendChild(document.createTextNode(value));
			const td4 = document.createElement("td");
			const icon = document.createElement("img");
			icon.src = key.capital.toLowerCase() === value.toLowerCase()
				? "images/correct.png"
				: "images/wrong.png";
			icon.width = "25";
			icon.height = "25";
			td4.appendChild(icon);
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			document.getElementById("answers").appendChild(tr);
		});
	}
	createSelectList(c) {
		document.getElementById("capital").innerHTML = "";

	}
	showMessage(message, spinner) {
		document.getElementById("message").classList.remove('hide');
		!spinner ? document.getElementById("spinner").classList.add('hide') : document.getElementById("spinner").classList.remove('hide');
		document.getElementById("messageText").innerText = message;
	}
	hideMessage() {
		document.getElementById("message").classList.add('hide');
		document.getElementById("messageText").innerText = '';
	}
}

window.onload = () => {
	new QuizApp();
};